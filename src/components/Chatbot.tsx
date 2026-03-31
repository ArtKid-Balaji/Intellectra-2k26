import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are a helpful assistant for INTELLECTRA 2K26, a National-level Technical Symposium organized by the IT Department at Adhiparasakthi Engineering College.

EVENT INFORMATION:
- Name: INTELLECTRA 2K26
- Type: National-level Technical Symposium
- Organizer: Department of Information Technology, Adhiparasakthi Engineering College
- Participants: 100+ from 15+ colleges
- Number of Events: 8

TECHNICAL EVENTS:
1. PROMPT STACK
   - Design and develop a creative website using modern tools and AI-driven prompts to showcase innovation and functionality
   - Team of 2-3 members
   - Tools: React, Vue, or modern frameworks
   - AI integration required

2. CODESMITH
   - Test your debugging and coding skills by identifying errors and crafting efficient solutions under pressure
   - Individual participation
   - Languages: C, C++, Java, Python
   - Duration: 2 Hours

3. INNOVATION MEET
   - Present your ideas, research, or projects and impress the judges with your innovation and presentation skills
   - Team of 2-3 members
   - PPT must be submitted before event
   - Presentation duration: 10 minutes

NON-TECHNICAL EVENTS:
4. INFOGRAPHIX
   - Create visually appealing posters to communicate ideas effectively through design, creativity, and clarity
   - Individual participation
   - Topic given on-spot
   - Tools: Canva, Photoshop, etc.

5. BOOYAH BATTLE
   - Compete in an intense Free Fire tournament and prove your squad survival and combat skills
   - Team of 4 members
   - Multiple rounds and playoffs
   - Best squad tactics win

6. CHECKMATE CLASH
   - Challenge your opponents in a strategic chess battle and showcase your tactical thinking
   - Individual participation
   - Knockout rounds
   - Standard chess rules

7. NEUROLINK
   - Test your logical thinking by connecting clues, patterns, and ideas in a fast-paced brain game
   - Individual or Team of 2
   - Buzzer rounds
   - Pattern and logic-based challenges

8. AUCTION ARENA
   - Build your dream cricket team through strategic bidding and compete based on performance and decision-making
   - Team of 2 members
   - Auction-based bidding system
   - Virtual cricket matches

EVENT SCHEDULE:
- 09:00 AM: On Spot Registration
- 09:30 AM: Inauguration Ceremony
- 10:00 AM: Refreshments and snacks
- 10:30 AM: Technical Events
- 01:00 PM: Lunch Break
- 02:00 PM: Non-Technical Events
- 03:00 PM: Prize Distribution

REWARDS:
- Cash Prizes for well-performing teams
- Certificate of Recognition for winners
- E-Certificates for all participants
- Elite Networking opportunity with innovators, coders, and creators

Be friendly, helpful, and conversational. Answer questions about the event, its events, schedule, requirements, rewards, and registration. If asked something not related to the event, politely redirect the conversation back to the event.`;

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
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("API key is not configured. Please add VITE_GEMINI_API_KEY to your .env file.");
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: SYSTEM_PROMPT }],
            },
            contents: messages
              .concat({ role: "user", content: userMessage })
              .map((msg) => ({
                role: msg.role === "user" ? "user" : "model",
                parts: [
                  {
                    text: msg.content,
                  },
                ],
              })),
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Response:", errorData);
        throw new Error(`API Error: ${response.status} - ${errorData?.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const assistantMessage =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I couldn't process that. Please try again.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Error: ${errorMessage}`,
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
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue shadow-lg shadow-neon-cyan/50 flex items-center justify-center text-white z-40 hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-8 w-96 max-h-96 rounded-2xl bg-cyber-dark border border-neon-cyan/30 shadow-2xl shadow-neon-cyan/20 flex flex-col z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border-b border-neon-cyan/30 p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold">INTELLECTRA Assistant</h3>
                <p className="text-xs text-neon-cyan">Ask me anything!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-neon-cyan transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cyber-dark/50">
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
                    className={`max-w-xs rounded-lg p-3 ${
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
              className="border-t border-neon-cyan/30 p-3 flex gap-2 bg-cyber-dark/80"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan/50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-neon-cyan to-neon-blue p-2 rounded-lg text-white hover:shadow-lg hover:shadow-neon-cyan/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
