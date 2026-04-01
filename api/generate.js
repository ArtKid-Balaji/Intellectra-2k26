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

export default async function handler(req, res) {
  console.log("API handler called", req.method);
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get API key from environment (server-side, hidden from client)
    const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "API key is not configured. Please add VITE_GEMINI_API_KEY or GEMINI_API_KEY to your .env file.",
      });
    }

    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    // Call Gemini API
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
          contents: messages.map((msg) => ({
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
      console.error("Gemini API Error:", errorData);
      return res.status(response.status).json({
        error: errorData?.error?.message || "Failed to generate response",
      });
    }

    const data = await response.json();
    const assistantMessage =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't process that. Please try again.";

    return res.status(200).json({
      message: assistantMessage,
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown server error",
    });
  }
}
