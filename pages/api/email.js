
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    
    // Generate a random 6-digit OTP
    const otp = crypto.randomBytes(3).toString('hex').toUpperCase();

    // Configure Nodemailer to send emails
    const transporter = nodemailer.createTransport({
      service: 'smtp-relay.brevo.com',
      auth: {
        user: 'hetashrikansariwala@gmail.com',
        pass: 'Hetashri@$1603'
      },
    });

    const mailOptions = {
      from: 'hetashrikansariwala@gmail.com',
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is: ${otp}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send OTP' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
