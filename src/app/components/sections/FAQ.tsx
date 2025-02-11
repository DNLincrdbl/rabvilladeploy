'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
    {
      question: "Villa Laki Rab mennyiért kínál szállást?",
      answer: "Villa Laki Rab árai változóak lehetnek, a foglalás feltételeitől függően (pl.: foglalási dátumok, szállodai szabályzat, stb.). Adja meg a dátumokat és tekintse meg az árakat."
    },
    {
      question: "Milyen közel van Villa Laki Rab a strandhoz?",
      answer: "Villa Laki Rab csupán 100 m távolságra van a legközelebbi strandtól. Minden távolságot légvonalban mérünk. A valódi út hossza ettől eltérhet."
    },
    {
      question: "Villa Laki Rab milyen be- és kijelentkezési időkkel dolgozik?",
      answer: "Villa Laki Rab 14:00 után várja a bejelentkezőket és 09:00-ig van kijelentkezés."
    },
    {
      question: "Villa Laki Rab milyen programokat kínál?",
      answer: "Villa Laki Rab a következő programokat / szolgáltatásokat kínálja (felár lehetséges):\n• saját partszakasz\n• strand"
    },
    {
      question: "Milyen messze van Villa Laki Rab Rab központjától?",
      answer: "Villa Laki Rab 1,6 km távolságra van Rab központjától. Minden távolságot légvonalban mérünk. A valódi út hossza ettől eltérhet."
    }
  ];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gyakori kérdések</h2>
            <p className="text-xl text-gray-600">
              Minden amit tudni érdemes a szállásról
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/80 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#007AFF]"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}