'use client';
import { useState, useRef, useEffect } from 'react';
import { X, Phone, Mail, MessageCircle, HelpCircle, Send, CheckCircle } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(true);
      setTimeout(() => setError(false), 1500);
      return;
    }
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: "",
          message,
          packageName: "Support Modal Message",
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  const quickActions = [
    { icon: <Phone size={16} />, label: 'Call us', sub: '+91 96 6789 2504', href: 'tel:+919667892504', color: '#E6F1FB', iconColor: '#185FA5' },
    { icon: <Mail size={16} />, label: 'Email', sub: 'contact@gettripgo.com', href: 'mailto:contact@gettripgo.com', color: '#EAF3DE', iconColor: '#3B6D11' },
    { icon: <MessageCircle size={16} />, label: 'WhatsApp', sub: 'Chat with us', href: 'https://wa.me/919667892504', color: '#E1F5EE', iconColor: '#0F6E56' },
    { icon: <HelpCircle size={16} />, label: 'Help Center', sub: 'Browse articles', href: '/help', color: '#FAEEDA', iconColor: '#854F0B' },
  ];

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    >
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-[#1A3FA8] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Phone size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white font-medium text-[15px]">Need help?</p>
              <p className="text-white/70 text-xs">We typically reply within minutes</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close support chat" className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <X size={14} />
          </button>
        </div>

        <div className="p-6">
          {/* Quick Actions */}
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">Quick actions</p>
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {quickActions.map((a) => (
              <a key={a.label} href={a.href} target={a.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-gray-300 transition-colors no-underline">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: a.color }}>
                  <span style={{ color: a.iconColor }}>{a.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 m-0">{a.label}</p>
                  <p className="text-[11px] text-gray-500 m-0">{a.sub}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Leave a message */}
          <div className="border-t border-gray-100 pt-5">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">Leave a message</p>
            <div className={`rounded-xl border overflow-hidden bg-gray-50 transition-colors ${error ? 'border-red-400' : 'border-gray-200 focus-within:border-[#1A3FA8]'}`}>
              <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-100">
                <Phone size={13} className="text-gray-400" />
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your name"
                  className="flex-1 bg-transparent text-sm outline-none text-gray-800 placeholder-gray-400" />
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-100">
                <Mail size={13} className="text-gray-400" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email address"
                  className="flex-1 bg-transparent text-sm outline-none text-gray-800 placeholder-gray-400" />
              </div>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} placeholder="How can we help you?"
                className="w-full px-3 py-2.5 bg-transparent text-sm outline-none text-gray-800 placeholder-gray-400 resize-none" />
            </div>

            {!sent ? (
              <button onClick={handleSend}
                className="mt-3 w-full py-3 bg-[#1A3FA8] text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#1535891] transition-colors">
                <Send size={14} /> Send message
              </button>
            ) : (
              <div className="mt-3 flex items-center gap-2 px-4 py-3 bg-green-50 rounded-xl border border-green-200">
                <CheckCircle size={16} className="text-green-600" />
                <p className="text-sm text-green-800 m-0">Message sent! We'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}