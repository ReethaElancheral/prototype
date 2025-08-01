import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const faqs = [
  {
    question: 'How do I find a recipe on your website?',
    answer: 'You can find recipes using the search bar or by browsing through categories like cuisine, dietary preferences, or difficulty level.',
  },
  {
    question: 'Can I save my favorite recipes?',
    answer: 'Yes! You can create an account and save your favorite recipes to access them anytime.',
  },
  {
    question: 'How do I submit my own recipes?',
    answer: 'You can submit your recipes by logging in and clicking on the "Submit Recipe" button in your dashboard.',
  },
  {
    question: 'Are the recipes suitable for beginners?',
    answer: 'Absolutely. Many of our recipes are designed with beginners in mind and include step-by-step instructions.',
  },
  {
    question: 'How do I know if a recipe is vegan, gluten-free, or dairy-free?',
    answer: 'Each recipe includes dietary labels like vegan, gluten-free, or dairy-free for easy identification.',
  },
  {
    question: 'Can I print recipes from the website?',
    answer: 'Yes! Every recipe page has a print button that formats the recipe perfectly for printing.',
  },
   {
    question: 'Are the recipes suitable for beginners?',
    answer: 'Absolutely. Many of our recipes are designed with beginners in mind and include step-by-step instructions.',
  },
   {
    question: 'Can I save my favorite recipes?',
    answer: 'Yes! You can create an account and save your favorite recipes to access them anytime.',
  },
   {
    question: 'How do I find a recipe on your website?',
    answer: 'You can find recipes using the search bar or by browsing through categories like cuisine, dietary preferences, or difficulty level.',
  },
  {
    question: 'Are the recipes suitable for beginners?',
    answer: 'Absolutely. Many of our recipes are designed with beginners in mind and include step-by-step instructions.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFF7F0] px-4 py-12 md:py-16"
      id="faq"
    >
        <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-black mb-2">FAQ'S</h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white border border-[#EADAC0] rounded-xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-base md:text-lg font-medium text-[#4B3B30] font-[Poppins]">
                {index + 1}. {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-[#4B3B30]" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-sm md:text-base text-[#6C5C4D] font-[Poppins]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
