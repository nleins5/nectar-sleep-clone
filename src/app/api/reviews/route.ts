import { NextResponse } from 'next/server';
import { reviews } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');
  const limit = parseInt(searchParams.get('limit') || '10');
  const page = parseInt(searchParams.get('page') || '1');

  let filtered = [...reviews];

  if (productId) {
    filtered = filtered.filter(r => r.productId === productId || !r.productId);
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return NextResponse.json({
    success: true,
    data: paginated,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    averageRating: filtered.length > 0
      ? Math.round((filtered.reduce((s, r) => s + r.rating, 0) / filtered.length) * 10) / 10
      : 0,
  });
}

// POST - add a review
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { author, rating, title, body: reviewBody, productId } = body;

    if (!author || !rating || !title || !reviewBody) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newReview = {
      id: `r${Date.now()}`,
      author,
      rating: Math.min(5, Math.max(1, rating)),
      title,
      body: reviewBody,
      date: new Date().toISOString().split('T')[0],
      verified: false,
      productId: productId || undefined,
    };

    return NextResponse.json({
      success: true,
      data: newReview,
      message: 'Review submitted successfully',
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
