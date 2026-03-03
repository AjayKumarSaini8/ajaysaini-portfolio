import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = (await req.json()) as ContactPayload;

    const trimmedName = name?.trim() ?? '';
    const trimmedEmail = email?.trim() ?? '';
    const trimmedMessage = message?.trim() ?? '';

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !contactToEmail || !contactFromEmail) {
      return NextResponse.json(
        { error: 'Contact service is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
        from: contactFromEmail,
        to: [contactToEmail],
        replyTo: trimmedEmail,
        subject: `New portfolio contact from ${trimmedName}`,
        text: [
          `Name: ${trimmedName}`,
          `Email: ${trimmedEmail}`,
          '',
          'Message:',
          trimmedMessage,
        ].join('\n'),
    });

    if (error) {
      const providerMessage = error.message || 'Failed to send message. Please try again later.';
      console.error('Resend send failed', {
        statusCode: error.statusCode,
        name: error.name,
        message: providerMessage,
      });

      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === 'development'
              ? providerMessage
              : 'Failed to send message. Please try again later.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
