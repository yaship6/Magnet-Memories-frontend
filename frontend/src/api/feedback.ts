import axios from "axios";
import type { User } from "../context/StoreContext";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://127.0.0.1:4000/api",
});

export type Feedback = {
  id: string;
  created_at: string;
  customer_user_id?: string | null;
  customer_name: string;
  customer_email?: string | null;
  customer_gmail?: string | null;
  order_id: string;
  rating: number;
  feedback: string;
};

type FeedbackResponse = {
  feedback: Feedback;
};

export async function createFeedback(payload: {
  customer?: User | null;
  name: string;
  orderId: string;
  rating: number;
  feedback: string;
}) {
  try {
    const response = await api.post<FeedbackResponse>("/feedback", payload);
    return response.data.feedback;
  } catch (error) {
    if (axios.isAxiosError<{ message?: string }>(error)) {
      throw new Error(
        error.response?.data?.message ?? "Could not submit feedback."
      );
    }

    throw error;
  }
}
