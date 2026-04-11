'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Size } from '@/lib/data';

export interface CartItem {
  productId: string;
  name: string;
  size: Size;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  slug: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>, qty?: number) => void;
  removeItem: (productId: string, size: Size) => void;
  updateQuantity: (productId: string, size: Size, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  totalSavings: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen(p => !p), []);

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.productId === item.productId && i.size === item.size);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + qty };
        return updated;
      }
      return [...prev, { ...item, quantity: qty }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, size: Size) => {
    setItems(prev => prev.filter(i => !(i.productId === productId && i.size === size)));
  }, []);

  const updateQuantity = useCallback((productId: string, size: Size, qty: number) => {
    if (qty < 1) return;
    setItems(prev => prev.map(i =>
      i.productId === productId && i.size === size ? { ...i, quantity: qty } : i
    ));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setIsOpen(false);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalSavings = items.reduce((sum, i) => sum + (i.originalPrice - i.price) * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, isOpen, openCart, closeCart, toggleCart,
      addItem, removeItem, updateQuantity, clearCart,
      totalItems, totalPrice, totalSavings,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
