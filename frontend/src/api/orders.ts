import axios from "axios";
import type { CartItem, User } from "../context/StoreContext";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://127.0.0.1:4000/api",
});

export type Order = {
  id: string;
  created_at: string;
  customer_name: string;
  customer_email?: string;
  customer_gmail?: string;
  customer_phone: string;
  delivery_address: string;
  notes?: string;
  items: Array<
    CartItem & {
      unitPrice: number;
      lineTotal: number;
    }
  >;
  total_amount: number;
  status: string;
};

export type OrderResponse = {
  order: Order;
  emailSent: boolean;
  emailMessage: string;
};

type OrdersResponse = {
  orders: Order[];
};

export async function createOrder(payload: {
  customer: User & { phone: string };
  deliveryAddress: string;
  notes: string;
  items: CartItem[];
}) {
  try {
    const response = await api.post<OrderResponse>("/orders", payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<{ message?: string }>(error)) {
      throw new Error(
        error.response?.data?.message ?? "Could not place order."
      );
    }

    throw error;
  }
}

export async function getOrders(gmail: string) {
  const response = await api.get<OrdersResponse>("/orders", {
    params: { gmail },
  });

  return response.data.orders;
}
