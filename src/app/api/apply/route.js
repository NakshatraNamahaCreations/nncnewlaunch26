import nodemailer from 'nodemailer'

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    tls: { rejectUnauthorized: false },
  })
}

function applicationEmailHtml({ name, phone, email, role, experience, noticePeriod, currentCtc, expectedCtc, location, portfolio, message, hasResume }) {
  const row = (label, value) => value ? `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#0B1F4B;">${value}</td>
    </tr>` : ''

  return `
    <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;">
      <div style="background:linear-gradient(135deg,#0B1F4B 0%,#0a2055 100%);padding:28px 32px;border-radius:12px 12px 0 0;">
        <h2 style="color:#fff;margin:0 0 6px;font-size:22px;">New Job Application</h2>
        <p style="color:rgba(255,255,255,.5);margin:0;font-size:13px;">
          Role: <strong style="color:#60B4FF;">${role}</strong> &nbsp;·&nbsp; nakshatranamahacreations.com/careers
        </p>
      </div>
      <div style="background:#f8fafc;padding:28px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">

        <table style="width:100%;border-collapse:collapse;">
          ${row('Applicant Name', `<strong>${name}</strong>`)}
          ${row('Phone', phone)}
          ${row('Email', `<a href="mailto:${email}" style="color:#2196F3;">${email}</a>`)}
          ${row('Experience', experience)}
          ${row('Notice Period', noticePeriod)}
          ${row('Current CTC', currentCtc)}
          ${row('Expected CTC', expectedCtc)}
          ${row('Current Location', location)}
          ${row('Portfolio / LinkedIn', portfolio ? `<a href="${portfolio.startsWith('http') ? portfolio : 'https://' + portfolio}" style="color:#2196F3;">${portfolio}</a>` : '')}
          ${message ? `<tr>
            <td style="padding:10px 0;font-size:13px;color:#64748b;vertical-align:top;">Cover Note</td>
            <td style="padding:10px 0;font-size:14px;color:#0B1F4B;line-height:1.65;">${message.replace(/\n/g, '<br>')}</td>
          </tr>` : ''}
        </table>

        ${hasResume ? `<div style="margin-top:20px;padding:14px 16px;background:#EFF6FF;border:1px solid #DBEAFE;border-radius:8px;font-size:13px;color:#1E40AF;">📎 Resume attached to this email.</div>` : ''}
      </div>
      <p style="font-size:11px;color:#94a3b8;margin-top:16px;text-align:center;">
        Submitted via nakshatranamahacreations.com/careers
      </p>
    </div>
  `
}

export async function POST(request) {
  try {
    const fd = await request.formData()

    const name        = fd.get('name')        || ''
    const phone       = fd.get('phone')       || ''
    const email       = fd.get('email')       || ''
    const role        = fd.get('role')        || ''
    const experience  = fd.get('experience')  || ''
    const noticePeriod= fd.get('noticePeriod')|| ''
    const currentCtc  = fd.get('currentCtc')  || ''
    const expectedCtc = fd.get('expectedCtc') || ''
    const location    = fd.get('location')    || ''
    const portfolio   = fd.get('portfolio')   || ''
    const message     = fd.get('message')     || ''
    const resumeFile  = fd.get('resume')

    if (!name || !phone || !email) {
      return Response.json({ error: 'Name, phone and email are required.' }, { status: 400 })
    }

    // Build attachment if resume was uploaded
    const attachments = []
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer())
      attachments.push({ filename: resumeFile.name, content: buffer })
    }

    const fields = { name, phone, email, role, experience, noticePeriod, currentCtc, expectedCtc, location, portfolio, message, hasResume: attachments.length > 0 }

    // Send email non-blocking so form always redirects to /thankyou
    try {
      const transporter = getTransporter()
      await transporter.sendMail({
        from: `"NNC Careers" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `Job Application: ${role} ${name}`,
        html: applicationEmailHtml(fields),
        text: [
          `New application for: ${role}`,
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          experience   ? `Experience: ${experience}`    : '',
          noticePeriod ? `Notice Period: ${noticePeriod}`: '',
          currentCtc   ? `Current CTC: ${currentCtc}`  : '',
          expectedCtc  ? `Expected CTC: ${expectedCtc}` : '',
          location     ? `Location: ${location}`        : '',
          portfolio    ? `Portfolio: ${portfolio}`      : '',
          message      ? `Cover Note: ${message}`       : '',
          attachments.length ? `Resume: ${resumeFile.name} (attached)` : '',
        ].filter(Boolean).join('\n'),
        attachments,
      })
    } catch (emailErr) {
      console.error('Application email error (non-fatal):', emailErr.message)
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Apply API error:', err.message)
    return Response.json({ error: `Something went wrong: ${err.message}` }, { status: 500 })
  }
}
