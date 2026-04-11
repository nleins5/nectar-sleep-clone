import { NextResponse } from 'next/server';

// in-memory subscriber list (demo)
const subscribers: string[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (subscribers.includes(email.toLowerCase())) {
      return NextResponse.json(
        { success: false, error: 'This email is already subscribed' },
        { status: 409 }
      );
    }

    subscribers.push(email.toLowerCase());

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for a special discount code.',
      data: { email: email.toLowerCase() },
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
