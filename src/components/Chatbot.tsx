import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const CHATBOT_UNAVAILABLE_MESSAGE =
  "The chatbot is not available on this hosted version right now. This site appears to be deployed without the server API needed for chat.";

const CHATBOT_SERVER_ERROR_MESSAGE =
  "The chatbot is temporarily unavailable on the hosted site right now. Please try again later, or redeploy with a valid GEMINI_API_KEY configured on the server.";

const getFriendlyChatError = (errorMessage: string) => {
  if (errorMessage === "Failed to fetch") {
    return "Failed to connect to the chatbot server. If you're developing locally, please use 'vercel dev' instead of 'npm run dev' to enable the API routes.";
  }

  if (errorMessage.includes("API key is not configured")) {
    return "Chatbot API key is missing on the deployed server. Add GEMINI_API_KEY in your hosting provider settings and redeploy.";
  }

  if (
    errorMessage.includes("Server Error (404)") ||
    errorMessage.includes("Server Error (405)") ||
    errorMessage.includes("<!DOCTYPE html") ||
    errorMessage.includes("<html")
  ) {
    return CHATBOT_UNAVAILABLE_MESSAGE;
  }

  if (
    errorMessage.includes("Server Error (500)") ||
    errorMessage.includes("Connection error (500)") ||
    errorMessage.includes("Server returned 500")
  ) {
    return CHATBOT_SERVER_ERROR_MESSAGE;
  }

  return `Sorry, the chatbot ran into a problem: ${errorMessage}`;
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm your INTELLECTRA 2K26 assistant. I can help answer any questions about the event, events, schedule, registration, and prizes. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Call serverless function instead of Gemini API directly
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages.concat({ role: "user", content: userMessage }),
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("API Error Response body:", text);
        try {
          const errorData = JSON.parse(text);
          throw new Error(errorData?.error || `Server returned ${response.status}`);
        } catch (e) {
          throw new Error(`Server Error (${response.status}): ${text.substring(0, 100)}...`);
        }
      }

      const data = await response.json();
      const assistantMessage = data.message || "I couldn't process that. Please try again.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      let errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      errorMessage = getFriendlyChatError(errorMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue shadow-lg shadow-neon-cyan/50 flex items-center justify-center text-white z-40 hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={22} className="sm:w-6 sm:h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-3 bottom-20 top-16 sm:inset-auto sm:bottom-24 sm:right-8 sm:w-96 sm:h-[32rem] rounded-2xl bg-cyber-dark border border-neon-cyan/30 shadow-2xl shadow-neon-cyan/20 flex flex-col z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border-b border-neon-cyan/30 p-3 sm:p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base">INTELLECTRA Assistant</h3>
                <p className="text-xs text-neon-cyan">Ask me anything!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-neon-cyan transition-colors"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-cyber-dark/50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-xs rounded-lg p-3 ${
                      msg.role === "user"
                        ? "bg-neon-cyan/20 text-white border border-neon-cyan/40"
                        : "bg-white/5 text-white/90 border border-white/10"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 text-white/90 border border-white/10 rounded-lg p-3">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse delay-100" />
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="border-t border-neon-cyan/30 p-2 sm:p-3 flex gap-2 bg-cyber-dark/80"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan/50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-neon-cyan to-neon-blue p-2 rounded-lg text-white hover:shadow-lg hover:shadow-neon-cyan/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <Send size={18} className="sm:w-5 sm:h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
