import { NextResponse } from 'next/server';
import { mattresses, reviews } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = mattresses.find(m => m.slug === slug);

  if (!product) {
    return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
  }

  const productReviews = reviews.filter(r => r.productId === product.id || !r.productId);

  return NextResponse.json({
    success: true,
    data: { ...product, reviews: productReviews },
  });
}
