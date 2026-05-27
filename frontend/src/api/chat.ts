import axios from "axios";

const chatApi = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

type ChatResponse = {
  reply: string;
};

export async function sendChatMessage(message: string) {
  const response = await chatApi.post<ChatResponse>("/chat", { message });
  return response.data.reply;
}
