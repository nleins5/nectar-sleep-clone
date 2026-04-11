'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice, totalSavings } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay" onClick={closeCart} />

      {/* Drawer */}
      <div className="cart-drawer">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-gray-800" />
            <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
            {totalItems > 0 && (
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">{totalItems}</span>
            )}
          </div>
          <button onClick={closeCart} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Your cart is empty</h3>
              <p className="text-sm text-gray-500 mb-6">Find the perfect mattress for your best sleep ever.</p>
              <button onClick={closeCart} className="btn-primary text-sm px-6 py-3">
                Shop Mattresses
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => {
                const savingsPerItem = item.originalPrice - item.price;
                return (
                  <div key={`${item.productId}-${item.size}`} className="flex gap-4 bg-gray-50 rounded-xl p-4 animate-fade-in">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.size}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.productId, item.size)}
                          className="p-1 rounded hover:bg-red-50 transition-colors shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-gray-400 hover:text-red-500" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-sm font-medium border-x border-gray-200">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900 text-sm">${(item.price * item.quantity).toLocaleString()}</p>
                          {savingsPerItem > 0 && (
                            <p className="text-[11px] text-green-600">Save ${(savingsPerItem * item.quantity).toLocaleString()}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4">
            {/* Free shipping progress */}
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>🚚 Free shipping on all orders!</span>
              </div>
            </div>

            {totalSavings > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-600 font-medium">Total Savings</span>
                <span className="text-green-600 font-bold">-${totalSavings.toLocaleString()}</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">${totalPrice.toLocaleString()}</span>
            </div>

            <p className="text-xs text-gray-400">Taxes and shipping calculated at checkout</p>

            <Link
              href="/cart"
              onClick={closeCart}
              className="btn-primary w-full py-4 text-base"
            >
              Checkout <ArrowRight className="w-4 h-4" />
            </Link>

            <button onClick={closeCart} className="btn-ghost w-full text-sm text-center">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
