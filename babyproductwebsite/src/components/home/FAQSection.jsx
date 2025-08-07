import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqData = [
  {
    question: 'Are your products safe for newborns?',
    answer:
      'Yes, all our products are dermatological tested and made with gentle, non-toxic ingredients that are safe for newborns and sensitive skin.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Delivery typically takes between 3 to 6 business days depending on your location.',
  },
  {
    question: 'Can I return or exchange a product?',
    answer:
      'Yes, products can be returned or exchanged within 14 days of delivery. Please refer to our return policy.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit/debit cards, UPI, GPay, PayPal, Amazon Pay, and more.',
  },
  {
    question: 'Are your skincare products organic or natural?',
    answer:
      'Our skincare products are made with natural and organic ingredients wherever possible, and are free from harmful chemicals.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can reach us via the contact form on our website or email us at support@babycare.com.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h3 className="text-5xl sm:text-3xl font-bold text-[#1d1d1d] mb-8 text-center">
        Frequently Asked Questions
      </h3>
      <p className="text-black text-center mb-10 text-lg">
        We're here to help - Every Step of the Way
      </p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index}>
            {/* Question */}
            <div
              className="flex justify-between items-center cursor-pointer pt-4 pb-2"
              onClick={() => toggleFAQ(index)}
            >
              <p
                className={`text-lg font-medium ${
                  openIndex === index ? 'text-black font-semibold' : 'text-black'
                }`}
              >
                {item.question}
              </p>
              <div className="text-[#00B4D8] text-lg rounded-full border border-[#00B4D8] p-1">
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="text-black mt-2 text-lg leading-relaxed">
                {item.answer}
              </p>
            )}

            {/* Custom line with arrow effect */}
            <div className="w-full h-[2px] bg-[#00B4D8] relative mt-3">
              <div className="absolute left-0 w-2 h-2 bg-[#00B4D8] rounded-full -top-[3px]" />
              <div className="absolute right-0 w-2 h-2 bg-[#00B4D8] rounded-full -top-[3px]" />
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
