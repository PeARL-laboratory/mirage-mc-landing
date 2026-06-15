'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const SUBJECTS = ['General Inquiry', 'Collaboration', 'Data Access', 'Technical Issue', 'Media / Press'];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('access_key', '182cbc47-5321-4852-ace8-b63a1682b05a');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', org ? `Organization: ${org}\n\n${message}` : message);

      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setName(''); setOrg(''); setEmail(''); setSubject('General Inquiry'); setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#1e1e1e] rounded-3xl p-8 md:p-14 flex flex-col gap-12 items-end w-full">

      {/* My name is … from … */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center w-full flex-wrap">
        <p className="text-[24px] md:text-[32px] text-white leading-[1.1] tracking-[0.384px] shrink-0 font-display">
          My name is
        </p>
        <div className="border-b border-[#e0e0e0] relative flex items-center h-14 py-4 w-full sm:w-[280px] shrink-0">
          {!name && (
            <span className="absolute left-0 inset-y-0 flex items-center text-[20px] text-[#8a8a8a] pointer-events-none select-none">
              Enter your name <span className="text-[#f74b0e] ml-1">*</span>
            </span>
          )}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 bg-transparent text-[20px] font-normal text-[#8a8a8a] outline-none leading-[1.5]"
          />
        </div>
        <p className="text-[24px] md:text-[32px] text-white leading-[1.1] shrink-0 font-display">from</p>
        <div className="border-b border-[#e0e0e0] flex items-center h-14 py-4 flex-1 min-w-[160px]">
          <input
            type="text"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            placeholder="University / Organization"
            className="flex-1 bg-transparent text-[20px] font-normal text-[#8a8a8a] placeholder-[#8a8a8a] outline-none leading-[1.5]"
          />
        </div>
      </div>

      {/* Reach me at … */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center w-full">
        <p className="text-[24px] md:text-[32px] text-white leading-[1.1] shrink-0 font-display">
          Reach me at
        </p>
        <div className="border-b border-[#e0e0e0] relative flex items-center h-14 py-4 flex-1 w-full">
          {!email && (
            <span className="absolute left-0 inset-y-0 flex items-center text-[20px] text-[#8a8a8a] pointer-events-none select-none">
              Enter your email <span className="text-[#f74b0e] ml-1">*</span>
            </span>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-transparent text-[20px] font-normal text-[#8a8a8a] outline-none leading-[1.5]"
          />
        </div>
      </div>

      {/* Subject is … */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start w-full">
        <p className="text-[24px] md:text-[32px] text-white leading-[1.1] shrink-0 pt-3 font-display">
          Subject is
        </p>
        <div className="flex flex-wrap gap-3 flex-1">
          {SUBJECTS.map((s) => {
            const selected = subject === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSubject(s)}
                className={`h-14 px-6 rounded-xl border-2 text-[18px] md:text-[20px] leading-[1.5] transition-colors ${
                  selected
                    ? 'bg-[#f3f3f3] border-[#e0e0e0] text-[#1e1e1e] font-semibold'
                    : 'bg-transparent border-[#e0e0e0] text-white font-normal hover:bg-white/5'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* To discuss … */}
      <div className="flex flex-col gap-4 w-full">
        <p className="text-[24px] md:text-[32px] text-white leading-[1.1] shrink-0 font-display">To discuss</p>
        <div className="border-b border-[#e0e0e0] pb-24 pt-4 w-full">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows={5}
            className="w-full bg-transparent text-[20px] font-normal text-[#8a8a8a] placeholder-[#8a8a8a] outline-none leading-[1.5] resize-none"
          />
        </div>
      </div>

      {/* Status messages */}
      {status === 'success' && (
        <p className="text-green-400 text-[16px] font-medium w-full text-right">
          Message sent! We&apos;ll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-[16px] font-medium w-full text-right">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="h-[56px] w-[232px] flex items-center justify-center bg-[#3b6edc] rounded-2xl text-[16px] font-semibold text-white hover:bg-[#2f5cbf] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
