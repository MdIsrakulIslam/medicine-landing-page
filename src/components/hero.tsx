"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="hero-section text-white py-20 relative overflow-hidden"
      style={{
        background: `url('/homebackground.png') no-repeat center center/cover`,
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full"></div>
      {/* <div
        className="absolute top-40 right-20 w-12 h-12 rounded-full"
        style={{ backgroundColor: "#f97316 !important" }}
      ></div> */}
      {/* <div
        className="absolute bottom-20 left-20 w-8 h-8 rounded-full"
        style={{ backgroundColor: "#f97316 !important" }}
      ></div> */}
      <div className="absolute bottom-40 right-10 w-20 h-20 bg-white/10 rounded-full"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance mt-28 bg-gradient-to-r from-white via-blue-100 to-blue-100 bg-clip-text text-transparent">
            Your AI-Powered digital companion for health care
          </h1>
          <p
            className="text-lg md:text-xl mb-8 text-pretty"
            style={{ color: "#dbeafe !important" }}
          >
            LAMARE supports you across your healthcare journey with AI-powered
            tools: SurgiSmart for Surgery Preparation and recovery, CareLoop for
            managing long-term conditions, and EmotiCare for personalized
            emotional support, including pharmacovigilance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px- py-8 rounded-4xl transition-all duration-300 hover:scale-105 font-semibold"
              style={{
                background: "linear-gradient(90deg, #1D4EC2 0%, #4E83FF 100%)",
                color: "#ffffff",
                border: "none",
                boxShadow: "0 4px 12px rgba(29, 78, 194, 0.4)",
              }}
            >
              <div className="flex gap-3 items-center ">
                <span className="text-lg">Download App</span>
                <div className="flex items-center justify-center w-8 h-8 rounded-full   border-l-2 border-white shadow-none">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px- py-8 bg-transparent rounded-4xl"
              style={{
                borderColor: "#ffffff !important",
                color: "#ffffff !important",
                backgroundColor: "transparent !important",
              }}
            >
              <div className="flex gap-2 items-center">
                <div>How It Works</div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full   border-l-2 border-white shadow-none">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Statistics with Image Gallery */}
        <div className="flex justify-between items-center max-w-6xl mx-auto relative">
          {/* Image gallery container */}
          <div className="absolute inset-0 flex justify-between items-center -top-32 z-0">
            {/* Left side images */}
            <div className="relative -ml-20  rotate-30 ">
              <div className="absolute -top-25 left-23 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-30">
                <img
                  src="/patient1.png"
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-25 left-15 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-20">
                <img
                  src="/patient2.jpg"
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-25 left-6 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-10">
                <img
                  src="/patient3.png"
                  alt="Happy patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side images */}
            <div className="relative -mr-20 rotate-330">
              <div className="absolute -top-22 right-25 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-30">
                <img
                  src="/doc1.png"
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-22 right-35 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-20">
                <img
                  src="/doc2.png"
                  alt="Happy patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-22 right-45 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-10">
                <img
                  src="/doc3.png"
                  alt="Happy patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="text-left rotate-30 -ml-20 z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-100 bg-clip-text text-transparent">
              5k+ Happy
            </div>
            <div className="text-3xl">patients</div>
          </div>
          <div className="text-left rotate-330 -mr-40 z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-100 bg-clip-text text-transparent">
              500+ healthcare
            </div>
            <div className="text-3xl">providers</div>
          </div>
        </div>

        {/* Mobile mockups */}
        <div className="flex justify-center items-end space-x-4 max-w-4xl mx-auto ">
          <img
            src="/iPhone 13 Pro.png"
            alt="LAMARE app dashboard"
            className="w-[1473px] h-[672px] object-cover"
          />
        </div>
      </div>

      {/* <style jsx>{`
        .hero-section {
          background: url("/background-image.png") no-repeat center center/cover;
        }
      `}</style> */}
    </section>
  );
}
