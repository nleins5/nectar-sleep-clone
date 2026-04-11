'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    { q: 'What is your preferred sleeping position?', options: ['Side Sleeper', 'Back Sleeper', 'Stomach Sleeper', 'Combination'] },
    { q: 'What firmness level do you prefer?', options: ['Soft & Plush', 'Medium', 'Medium-Firm', 'Firm'] },
    { q: 'Do you sleep hot?', options: ['Yes, I overheat often', 'Sometimes', 'No, I sleep cool', 'I\'m not sure'] },
    { q: 'Do you have any pain concerns?', options: ['Back Pain', 'Hip/Shoulder Pain', 'No Pain Issues', 'General Soreness'] },
    { q: 'What\'s your budget range?', options: ['Under $500', '$500 - $1,000', '$1,000 - $1,500', '$1,500+'] },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < questions.length - 1) setStep(step + 1);
    else setStep(questions.length);
  };

  return (
    <div>
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Find Your Perfect Mattress</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>Answer 5 quick questions and we&apos;ll recommend your ideal Nectar mattress.</p>
      </section>

      <section style={{ padding: '60px 24px', maxWidth: 680, margin: '0 auto' }}>
        {step < questions.length ? (
          <div>
            {/* Progress */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 32 }}>
              {questions.map((_, i) => (
                <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? '#1a3c5e' : '#e5e7eb', transition: 'background 0.3s' }} />
              ))}
            </div>
            <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>Question {step + 1} of {questions.length}</p>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 24 }}>{questions[step].q}</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {questions[step].options.map(opt => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  style={{
                    padding: '18px 24px', borderRadius: 12, border: '2px solid #e5e7eb',
                    background: 'white', fontSize: 15, fontWeight: 500, color: '#374151',
                    cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = '#1a3c5e'; (e.target as HTMLElement).style.background = '#eff6ff'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = '#e5e7eb'; (e.target as HTMLElement).style.background = 'white'; }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#111827', marginBottom: 12 }}>We Recommend: Nectar Premier</h2>
            <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.7, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              Based on your sleep preferences, the Nectar Premier offers the perfect balance of comfort and support with enhanced cooling technology.
            </p>
            <Link href="/mattresses/nectar-premier" style={{
              padding: '16px 40px', background: '#1a3c5e', color: 'white',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              display: 'inline-block',
            }}>
              Shop Nectar Premier
            </Link>
            <div style={{ marginTop: 16 }}>
              <button onClick={() => { setStep(0); setAnswers([]); }} style={{ background: 'none', border: 'none', color: '#1a3c5e', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
