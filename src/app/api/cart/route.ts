import { NextResponse } from 'next/server';

// simple in-memory cart (per-request; for demo purposes)
interface CartItem {
  productId: string;
  size: string;
  quantity: number;
  price: number;
}

let cart: CartItem[] = [];

export async function GET() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const itemCount = cart.reduce((s, i) => s + i.quantity, 0);

  return NextResponse.json({
    success: true,
    data: {
      items: cart,
      itemCount,
      subtotal,
      shipping: 0, // free shipping
      tax: Math.round(subtotal * 0.08 * 100) / 100,
      total: Math.round((subtotal + subtotal * 0.08) * 100) / 100,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, size, quantity = 1, price } = body;

    if (!productId || !size || !price) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: productId, size, price' },
        { status: 400 }
      );
    }

    const existing = cart.find(i => i.productId === productId && i.size === size);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ productId, size, quantity, price });
    }

    return NextResponse.json({
      success: true,
      message: 'Item added to cart',
      data: { items: cart },
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { productId, size, quantity } = body;

    const item = cart.find(i => i.productId === productId && i.size === size);
    if (!item) {
      return NextResponse.json(
        { success: false, error: 'Item not found in cart' },
        { status: 404 }
      );
    }

    if (quantity <= 0) {
      cart = cart.filter(i => !(i.productId === productId && i.size === size));
    } else {
      item.quantity = quantity;
    }

    return NextResponse.json({
      success: true,
      message: 'Cart updated',
      data: { items: cart },
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}

export async function DELETE() {
  cart = [];
  return NextResponse.json({
    success: true,
    message: 'Cart cleared',
    data: { items: [] },
  });
}
