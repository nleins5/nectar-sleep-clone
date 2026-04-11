'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Shield, Truck, RefreshCw, CreditCard, Lock } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, totalSavings } = useCart();
  const tax = Math.round(totalPrice * 0.08 * 100) / 100;
  const finalTotal = totalPrice + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-gray-300" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Your Cart is Empty</h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven&apos;t added anything yet. Check out our award-winning mattresses!</p>
          <Link href="/mattresses" className="btn-primary px-10 py-4">
            Shop Mattresses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <Link href="/mattresses" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Shopping Cart <span className="text-lg font-normal text-gray-400">({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => {
              const savingsPerItem = item.originalPrice - item.price;
              return (
                <div key={`${item.productId}-${item.size}`} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-fade-in">
                  <div className="flex gap-5">
                    <Link href={`/mattresses/${item.slug}`} className="relative w-28 h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0 group">
                      <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="112px" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link href={`/mattresses/${item.slug}`} className="font-bold text-gray-900 hover:text-blue-700 transition-colors">{item.name}</Link>
                          <p className="text-sm text-gray-500 mt-0.5">Size: {item.size}</p>
                          {savingsPerItem > 0 && (
                            <span className="inline-flex items-center text-xs text-green-600 font-medium mt-1 bg-green-50 px-2 py-0.5 rounded-full">
                              Save ${savingsPerItem} per item
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.productId, item.size)}
                          className="p-2 rounded-lg hover:bg-red-50 transition-colors group"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                            className="px-3 py-2 hover:bg-gray-50 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-4 py-2 text-sm font-semibold border-x border-gray-200 min-w-[48px] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                            className="px-3 py-2 hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toLocaleString()}</p>
                          {savingsPerItem > 0 && (
                            <p className="text-sm text-gray-400 line-through">${(item.originalPrice * item.quantity).toLocaleString()}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-end">
              <button onClick={clearCart} className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-[120px]">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-medium">${totalPrice.toLocaleString()}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You Save</span>
                    <span className="font-medium">-${totalSavings.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-4" />

              <div className="flex justify-between items-baseline mb-6">
                <span className="text-gray-900 font-bold text-lg">Total</span>
                <span className="text-2xl font-bold text-gray-900">${finalTotal.toFixed(2)}</span>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                or as low as <strong>${Math.round(finalTotal / 12)}/mo</strong> with Affirm
              </p>

              <button className="btn-primary w-full py-4 text-base mb-3">
                <Lock className="w-4 h-4" /> Secure Checkout
              </button>

              <div className="grid grid-cols-2 gap-2 mt-5 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-green-500" />
                  <span>Forever Warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-blue-500" />
                  <span>365-Night Trial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-yellow-500" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-purple-500" />
                  <span>0% APR Financing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
