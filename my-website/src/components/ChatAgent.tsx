
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'agent';
  text: string;
}

interface ChatAgentProps {
  bookName: string;
}

function ChatAgent({ bookName }: ChatAgentProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = { sender: 'user', text: inputMessage };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage }), // backend expects "message"
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const agentResponse: Message = {
        sender: 'agent',
        text: data.response || 'No response from agent.',
      };
      setMessages((prev) => [...prev, agentResponse]);
    } catch (e: any) {
      setError(e.message);
      const errorMessage: Message = {
        sender: 'agent',
        text: `Error: Could not get response (${e.message})`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      style={{
        border: '1px solid #444',
        borderRadius: '12px',
        padding: '20px',
        maxWidth: '700px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        backgroundColor: '#1e1e1e',
        color: '#f1f1f1',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>
        Chat with {bookName} Chatbot
      </h2>

      <div
        style={{
          border: '1px solid #333',
          borderRadius: '8px',
          padding: '12px',
          minHeight: '250px',
          maxHeight: '450px',
          overflowY: 'auto',
          backgroundColor: '#2c2c2c',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {messages.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#888' }}>Start a conversation...</div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.sender === 'user' ? '#0b8457' : '#444',
                color: '#f1f1f1',
                borderRadius: '16px',
                padding: '10px 14px',
                maxWidth: '80%',
                wordBreak: 'break-word',
              }}
            >
              <strong>{msg.sender === 'user' ? 'You' : 'Agent'}:</strong> {msg.text}
            </div>
          ))
        )}
        {/* Dummy div to scroll into view */}
        <div ref={chatEndRef} />
      </div>

      {loading && <div style={{ textAlign: 'center', color: '#aaa' }}>Agent is typing...</div>}
      {error && <div style={{ color: '#ff6b6b', textAlign: 'center' }}>Error: {error}</div>}

      <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={{
            flexGrow: 1,
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #555',
            backgroundColor: '#333',
            color: '#f1f1f1',
          }}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '12px 18px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#0b8457',
            color: '#fff',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
          }}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatAgent;
