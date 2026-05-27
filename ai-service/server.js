import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  })
);
app.use(express.json({ limit: "1mb" }));

const answers = [
  {
    keywords: ["price", "cost", "rs", "rate"],
    reply:
      "Square Photo Magnets are Rs. 99, Big Acryclic Magent Frames are Rs. 199, and Strip Acryclic Magent Frames are Rs. 249. Custom designs may vary depending on quantity and style.",
  },
  {
    keywords: ["custom", "customize", "photo", "upload", "picture"],
    reply:
      "You can customize products from the Customize page. Square Photo Magnets and Big Acryclic Magent Frames need 1 picture, while Strip Acryclic Magent Frames need 3 pictures.",
  },
  {
    keywords: ["strip"],
    reply:
      "Strip Acryclic Magent Frames are rectangle-shaped and made for 3 pictures in one frame. They are perfect for mini story-style memories.",
  },
  {
    keywords: ["square"],
    reply:
      "Square Photo Magnets are classic photo keepsakes. Upload 1 picture and choose your quantity from the Customize page.",
  },
  {
    keywords: ["big acryclic", "big acrylic", "big frame"],
    reply:
      "Big Acryclic Magent Frames use 1 picture with a keepsake-style frame. They are great for gifting and memory displays.",
  },
  {
    keywords: ["cart", "add", "checkout"],
    reply:
      "You can add magnets from Shop or Customize. Your cart is saved to your logged-in account, so login first if you want it saved.",
  },
  {
    keywords: ["login", "signup", "account", "password"],
    reply:
      "Use Signup to create an account with your email and password. Then login anytime to keep your cart linked to your account.",
  },
  {
    keywords: ["delivery", "shipping", "ship"],
    reply:
      "Delivery details can be confirmed during order discussion. For urgent orders or society stalls, contact the Memory Magnets team directly.",
  },
  {
    keywords: ["society", "stall", "bulk", "event"],
    reply:
      "For society stalls, bulk gifting, or events, visit the Society Stalls page or contact us with your date, location, and quantity.",
  },
  {
    keywords: ["contact", "instagram", "email", "help"],
    reply:
      "You can reach us from the Contact page or on Instagram at @the.memory.magnets.",
  },
  {
    keywords: ["order", "feedback", "review"],
    reply:
      "You can share your experience on the Order Feedback page. We love hearing how your magnets turned out.",
  },
];

function getReply(message) {
  const normalizedMessage = message.toLowerCase();
  const matchedAnswer = answers.find((answer) =>
    answer.keywords.some((keyword) => normalizedMessage.includes(keyword))
  );

  if (matchedAnswer) {
    return matchedAnswer.reply;
  }

  return "I can help with product types, customization, prices, cart, login, delivery, stalls, and order feedback. Tell me what you would like to know.";
}

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/api/chat", (request, response) => {
  const message = String(request.body.message ?? "").trim();

  if (!message) {
    return response.status(400).json({ message: "Please send a question." });
  }

  return response.json({
    reply: getReply(message),
  });
});

app.listen(port, () => {
  console.log(`Memory Magnets AI service running on http://127.0.0.1:${port}`);
});
