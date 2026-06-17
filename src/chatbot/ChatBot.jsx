import { useState, useRef, useEffect } from "react";
import { askAI } from "../ai/rag";
import "./chat.css";

export default function ChatBot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  async function send() {
    if (!msg.trim() || loading) return;
    const userMsg = msg;
    setMsg("");
    setLoading(true);

    try {
      const answer = await askAI(userMsg);
      setChat((prev) => [...prev, { user: userMsg, bot: answer }]);
    } catch (err) {
      console.error("ChatBot error:", err);
      setChat((prev) => [
        ...prev,
        {
          user: userMsg,
          bot: "Sorry, I couldn't get a response. Check the console or your API key.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") send();
  }

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div className="chatbot">
          <div className="chat-header">
            <div className="chat-header-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" />
                <path d="M18 14l.7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7z" />
              </svg>
            </div>
            <div className="chat-header-info">
              <h2>Portfolio Assistant</h2>
              <span className="chat-header-online" />
            </div>
          </div>

          <div className="chat-messages">
            {chat.length === 0 && !loading && (
              <div className="chat-placeholder">
                <p className="chat-placeholder-heading">Ask me anything about my portfolio!</p>
                <p className="chat-placeholder-desc">
                  Ask me about his projects, skills, education, experience, and more. I'm here to help you learn about his work and background.
                </p>
              </div>
            )}
            {loading && chat.length === 0 && (
              <div className="chat-loading">
                <div className="chat-loading-dots">
                  <span /><span /><span />
                </div>
                <p className="chat-loading-text">Getting answer...</p>
              </div>
            )}
            {chat.map((c, i) => (
              <div key={i} className="chat-entry">
                <div className="chat-bubble user-bubble">
                  <span className="chat-label">You</span>
                  <p>{c.user}</p>
                </div>
                <div className="chat-bubble bot-bubble">
                  <span className="chat-label">Bot</span>
                  <p>{c.bot}</p>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-area">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={loading}
            />
            <button onClick={send} disabled={loading}>
              {loading ? (
                <span className="chat-btn-loading">
                  <span /><span /><span />
                </span>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
