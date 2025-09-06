"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What is the LAMARE app for?",
    answer:
      "LAMARE is a digital health companion designed to support patients before and after surgery with AI-powered tools, education, and emotional support.",
  },
  {
    question: "Is it free to use the LAMARE app?",
    answer:
      "Yes, LAMARE offers free basic features with premium options available for enhanced support and advanced AI capabilities.",
  },
  {
    question: "Can I use it if I'm not good with technology?",
    answer:
      "LAMARE is designed with simplicity in mind, featuring an intuitive interface that's easy to navigate for users of all technical skill levels.",
  },
  {
    question: "Is my medical data safe?",
    answer:
      "Yes, we use enterprise-grade encryption and comply with HIPAA regulations to ensure your medical data is completely secure and private.",
  },
  {
    question: "Does LAMARE support multiple languages?",
    answer:
      "Yes, LAMARE supports multiple languages to ensure accessibility for diverse patient populations worldwide.",
  },
  {
    question: "What if I need help while using the app?",
    answer:
      "We provide 24/7 chat support, comprehensive help documentation, and video tutorials to assist you whenever you need help.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section 
      id="faq" 
      className="py-20 relative overflow-hidden mt-0"
      style={{
        backgroundImage: "url('/faq.jpg')", // Add your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
        
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-white/0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div>
            <span className="text-blue-600 font-semibold">• Faq</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-balance text-[#454545]">Everything You Need to Know</h2>
            <img
              src="/angleiPhone 15.png"
              alt="LAMARE app interface"
              className="w-full lg:w-[510px] lg:absolute -bottom-20 z-20"
            />
             <img
              src="/lung.png"
              alt="LAMARE app interface"
              className="w-full lg:w-[200px] lg:absolute  z-10 -ml-60 -mt-60"
            />
            
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-white/80 backdrop-blur-sm">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-mediu text-xl text-[#454545]">{faq.question}</span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white border flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#595959]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}