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
      <div
        className="absolute top-40 right-20 w-12 h-12 rounded-full"
        style={{ backgroundColor: "#f97316 !important" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-8 h-8 rounded-full"
        style={{ backgroundColor: "#f97316 !important" }}
      ></div>
      <div className="absolute bottom-40 right-10 w-20 h-20 bg-white/10 rounded-full"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-12">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-balance"
            style={{ color: "#ffffff !important" }}
          >
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
              className="px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105 font-semibold"
              style={{
                background: "linear-gradient(90deg, #1D4EC2 0%, #4E83FF 100%)",
                color: "#ffffff",
                border: "none",
                boxShadow: "0 4px 12px rgba(29, 78, 194, 0.4)",
              }}
            >
              <div className="flex gap-3 items-center">
                <span className="text-lg">Download App</span>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/30">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 bg-transparent rounded-3xl"
              style={{
                borderColor: "#ffffff !important",
                color: "#ffffff !important",
                backgroundColor: "transparent !important",
              }}
            >
              <div className="flex gap-2 items-center">
                <div>How It Works</div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/30">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="flex justify-between items-center mb-12 max-w-6xl mx-auto">
          <div className="text-left">
            <div
              className="text-2xl font-bold"
              style={{ color: "#ffffff !important" }}
            >
              5k+ Happy
            </div>
            <div style={{ color: "#bfdbfe !important" }}>patients</div>
          </div>
          <div className="text-right">
            <div
              className="text-2xl font-bold"
              style={{ color: "#ffffff !important" }}
            >
              500+ healthcare
            </div>
            <div style={{ color: "#bfdbfe !important" }}>providers</div>
          </div>
        </div>

        {/* Mobile mockups */}
        <div className="flex justify-center items-end space-x-4 max-w-4xl mx-auto">
          <img
            src="/iPhone 13 Pro.png"
            alt="LAMARE app dashboard"
            className="w-[1473px] h-[672px] object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: url("/background-image.png") no-repeat center center/cover;
        }
      `}</style>
    </section>
  );
}
