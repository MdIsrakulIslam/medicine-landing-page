"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="hero-section text-white py-8 md:py-20 relative overflow-hidden min-h-screen"
      style={{
        background: `url('/homebackground.png') no-repeat center center/cover`,
      }}
    >
      {/* Background decorative elements */}
      {/* <div className="absolute top-8 md:top-20 left-2 md:left-10 w-6 md:w-16 h-6 md:h-16 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-16 md:bottom-40 right-2 md:right-10 w-8 md:w-20 h-8 md:h-20 bg-white/10 rounded-full"></div> */}
      
      {/* Marked images - Hidden on mobile and tablet, shown on desktop */}
      <div className="hidden lg:block absolute top-2/4 left-110 w-24 h-24 z-10">
        < Image
          src="/operation.png"
          alt="Decoration"
            width={96}
            height={96}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="hidden lg:block absolute top-2/4 right-65 w-24 h-24 z-10">
        < Image
          src="/plus.png"
          alt="Decoration"
            width={96}
            height={96}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 md:px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-6 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance mt-8 md:mt-28 bg-gradient-to-r from-white via-blue-100 to-blue-100 bg-clip-text text-transparent leading-tight px-2 md:px-0">
            Your AI-Powered digital companion for health care
          </h1>
          <p
            className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-pretty px-4 md:px-0 leading-relaxed"
            style={{ color: "#dbeafe !important" }}
          >
            LAMARE supports you across your healthcare journey with AI-powered
            tools: SurgiSmart for Surgery Preparation and recovery, CareLoop for
            managing long-term conditions, and EmotiCare for personalized
            emotional support, including pharmacovigilance
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center px-4 md:px-0">
            <Button
              size="lg"
              className="w-full md:w-auto px-8 py-4 md:py-8 rounded-4xl transition-all duration-300  font-semibold group relative overflow-hidden text-lg"
              style={{
                background: "linear-gradient(90deg, #1D4EC2 0%, #4E83FF 100%)",
                color: "#ffffff !important" ,
                border: "none !important",
                // boxShadow: "0 4px 12px rgba(29, 78, 194, 0.4)",
              }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0  opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-4xl"></div>
              <div className="flex gap-3 items-center justify-center relative z-10 cursor-pointer">
                <span>Download App</span>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-l-2 border-white shadow-none group-hover:translate-x-1 transition-transform duration-300">
                  <span>→</span>
                </div>
              </div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full md:w-auto px-8 py-4 md:py-8 bg-transparent rounded-4xl group relative overflow-hidden transition-all duration-300 hover:bg-white/10 text-lg cursor-pointer"
              style={{
                borderColor: "#ffffff !important",
                color: "#ffffff !important",
                backgroundColor: "transparent !important",
              }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-4xl "></div>
              <div className="flex gap-2 items-center justify-center relative z-10 ">
                <div>How It Works</div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-l-2 border-white shadow-none group-hover:translate-x-1 transition-transform duration-300">
                  <span>→</span>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Statistics with Image Gallery */}
        <div className="flex justify-between items-center max-w-6xl mx-auto relative mb-8 md:mb-0">
          {/* Image gallery container - Hidden on mobile/tablet, shown on desktop */}
          <div className="hidden lg:flex absolute inset-0 justify-between items-center -top-32 z-0">
            {/* Left side images */}
            <div className="relative -ml-20 rotate-30">
              <div className="absolute -top-25 left-23 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-30">
                < Image
                  src="/patient1.png"
                  alt="Healthcare professional"
                    width={60}
                    height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-25 left-15 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-20">
                < Image
                  src="/patient2.jpg"
                  alt="Healthcare professional"
                    width={60}
                    height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-25 left-6 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-10">
                < Image
                  src="/patient3.png"
                  alt="Happy patient"
                    width={60}
                    height={60}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Right side images */}
            <div className="relative -mr-20 rotate-330">
              <div className="absolute -top-22 right-25 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-30">
                < Image
                  src="/doc1.png"
                  alt="Healthcare professional"
                    width={60}
                    height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-22 right-35 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-20">
                < Image
                  src="/doc2.png"
                  alt="Happy patient"
                    width={60}
                    height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-22 right-45 w-15 h-15 rounded-full overflow-hidden border-4 border-white/20 z-10">
                < Image
                  src="/doc3.png"
                  alt="Happy patient"
                    width={60}
                    height={60}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Statistics - Responsive */}
          <div className="text-left rotate-12 md:rotate-30 -ml-2 md:-ml-20 z-10 hidden lg:block">
            <div className="text-2xl md:text-4xl  bg-gradient-to-r from-white to-white bg-clip-text text-transparent ">
              5k+ Happy
            </div>
            <div className="text-xl md:text-3xl bg-gradient-to-r from-white bg-clip-text text-transparent">patients</div>
          </div>
          <div className="text-left rotate-12 md:rotate-330 -mr-2 md:-mr-40 z-10 hidden lg:block">
            <div className="text-2xl md:text-4xl  bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              500+ healthcare
            </div>
            <div className="text-xl md:text-3xl bg-gradient-to-r from-white bg-clip-text text-transparent">professional</div>
          </div>
        </div>

        {/* Mobile mockups - Fully responsive */}
        <div className="flex justify-center items-end space-x-4 max-w-4xl mx-auto mt-8 md:mt-0">
          <div className="w-full max-w-sm md:max-w-none">
            < Image
              src="/iPhone 13 Pro.png"
              alt="LAMARE app dashboard"
                width={1473}
                height={672}
              className="w-full h-auto md:w-[1473px] md:h-[672px] object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}