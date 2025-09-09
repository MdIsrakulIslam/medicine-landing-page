"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    text: "LAMARE gives my patients confidence and clarity throughout their healthcare journey. Tools like SurgiSmart, advanced wound scanning, CareLoop, EmotiCare, and pharmacovigilance monitoring truly transform how we deliver safe, personalised care",
    author: "Caitlyn King",
    role: "Head of Design, Layers",
    avatar: "/avatar1.png",
    rating: 5,
  },
  {
    text: "The AI-powered support system has revolutionized our patient care approach. The emotional intelligence and real-time monitoring capabilities are exceptional.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer, HealthTech",
    avatar: "/avatar2.png",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#454545] mb-8 text-pretty">
            {currentTestimonial.text}
          </p>

          <div className="flex flex-col items-center mb-8">
            <Image
              src={currentTestimonial.avatar || "/placeholder.svg"}
              alt={currentTestimonial.author}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h4 className="font-bold text-[#454545]">
              {currentTestimonial.author}
            </h4>
            <p className="text-[#454545]">{currentTestimonial.role}</p>
            <div className="flex space-x-1 mt-2">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ⭐
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            {/* Dots positioned above the buttons */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className={`rounded w-10 h-10 p-0 bg-transparent cursor-pointer border-[#225CE4] ${
                  currentIndex === 0
                    ? "bg-white text-[#1D4EC2]"
                    : "bg-blue-500 text-white"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className={`rounded w-10 h-10 p-0 bg-transparent cursor-pointer border-[#225CE4] ${
                  currentIndex === testimonials.length - 1
                    ? "bg-white text-[#1D4EC2]"
                    : "bg-blue-500 text-white"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
