import { Resend } from 'resend';

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export const sendEmailVerification = async (email: string, token: string) => {
  const verificationLink = `${process.env.AUTH_URL}/api/auth/verify-email?token=${token}`;

  try {
    const { data, error } = await resend.emails.send({
      from: 'HFUN.INFO <no-reply@kwayservices.top>',
      to: email,
      subject: 'Verify Your Email - HFUN.INFO',
      html: `
        <h1>Verify Your Email</h1>
        <p>Thank you for signing up with HFUN.INFO. To complete your registration/verification, please verify your email address by clicking the link below:</p>
        <p><a href="${verificationLink}">Verify Email</a></p>
        <p>If the link doesn't work, you can copy and paste the following URL into your browser:</p>
        <p>${verificationLink}</p>
        <p>If you didn't request this verification, please ignore this email.</p>
        <p>Best regards,<br>The HFUN.INFO Team</p>
      `,
    });

    if (error) {
      return { success: false, error: 'Failed to send email' };
    }

    return { success: true, messageId: data?.id };
  } catch (error) {
    return { success: false, error: 'An unexpected error occurred' };
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.AUTH_URL}/new-password?token=${token}`;

  try {
    const { data, error } = await resend.emails.send({
      from: 'HFUN.INFO <no-reply@kwayservices.top>',
      to: email,
      subject: 'Reset Your Password - HFUN.INFO',
      html: `
        <h1>Reset Your Password</h1>
        <p>You have requested to reset your password. Click the link below to set a new password:</p>
        <p><a href="${resetLink}">Reset Password</a></p>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This link will expire in 1 hour.</p>
        <p>Best regards,<br>The HFUN.INFO Team</p>
      `,
    });

    if (error) {
      return { success: false, error: 'Failed to send email' };
    }

    return { success: true, messageId: data?.id };
  } catch (error) {
    return { success: false, error: 'An unexpected error occurred' };
  }
};
