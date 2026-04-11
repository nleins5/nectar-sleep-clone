import { NextResponse } from 'next/server';
import { mattresses } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const sort = searchParams.get('sort') || 'popular';

  let filtered = mattresses;
  if (type && type !== 'all') {
    filtered = mattresses.filter(m => m.mattressType === type);
  }

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-low') return a.prices['Queen'] - b.prices['Queen'];
    if (sort === 'price-high') return b.prices['Queen'] - a.prices['Queen'];
    return b.reviewCount - a.reviewCount;
  });

  return NextResponse.json({
    success: true,
    count: sorted.length,
    data: sorted,
  });
}
