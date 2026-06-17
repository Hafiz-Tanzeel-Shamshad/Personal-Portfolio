import { useState, useRef, useEffect } from "react";
import { askAI } from "../ai/rag";
import "./chat.css";

export default function ChatBot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  function autoGrow() {
    const el = textRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 100) + "px";
  }

  async function send(overrideMsg) {
    const text = (overrideMsg || msg).trim();
    if (!text || loading) return;
    setMsg("");
    if (textRef.current) textRef.current.style.height = "auto";
    setLoading(true);

    try {
      const answer = await askAI(text);
      setChat((prev) => [...prev, { user: text, bot: answer }]);
    } catch (err) {
      console.error("ChatBot error:", err);
      setChat((prev) => [
        ...prev,
        { user: text, bot: "Sorry, I couldn't get a response. Check the console or your API key." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
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
                  Ask me about his projects, skills, education, experience, and more.
                </p>
              </div>
            )}

            {chat.map((c, i) => (
              <div key={i} className="chat-group">
                <div className="chat-row user-row">
                  <div className="chat-bubble user-bubble ht-rise">
                    <p>{c.user}</p>
                  </div>
                </div>
                <div className="chat-row bot-row">
                  <div className="bot-avatar">{">"}_</div>
                  <div className="chat-bubble bot-bubble ht-rise">
                    <p>{c.bot}</p>
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="chat-row bot-row">
                <div className="bot-avatar">{">"}_</div>
                <div className="typing-indicator">
                  <span /><span /><span />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="chat-input-area">
            <textarea
              ref={textRef}
              value={msg}
              onChange={(e) => { setMsg(e.target.value); autoGrow(); }}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={loading}
              rows={1}
            />
            <button onClick={() => send()} disabled={loading || !msg.trim()}>
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
