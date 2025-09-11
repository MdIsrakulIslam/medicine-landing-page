import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const features = [
  {
    title: "SurgiSmart AI - SAFE Surgery Companion for patients",
    description: "Safe+ support Awareness Follow-up Empowerment",
    image: "/check.png",
  },
  {
    title: "CareLoop (Long term conditions)",
    description:
      "Empathetic, Culturally-Tailored AI Health Coaches for Long-Term Condition Support (Plus Pharmacovigilance)",
    image: "/handlove.png",
  },
  {
    title: "EmotiCare Engine",
    description:
      "Emotion-Aware Health Coaching An AI-powered emotional companion built to understand how patients feel and respond with compassion and intelligence (Plus pharmacovigilance)",
    image: "/circit.png",
  },
  {
    title: "AI Wound Scan",
    description: "Pre-op to post-op task tracking",
    image: "/AI.png",
  },
  {
    title: "EmotiCare AI (Emotional support)",
    description: "Pre-op to post-op task tracking",
    image: "/headphon.png",
  },
  {
    title: "24/7 Chat Support",
    description: "Pre-op to post-op task tracking",
    image: "/message.png",
  },
  {
    title: "Recovery Tracker",
    description: "Pre-op to post-op task tracking",
    image: "/monitor.png",
  },
  {
    title: "Multilingual Access",
    description: "Pre-op to post-op task tracking",
    image: "/TV.png",
  },
  {
    title: "Surgery (Surgical Checklist)",
    description:
      "Pre-op to post-op task tracking jglfiooriototirotir  ",
    image: "/knife.png",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-20 relative overflow-hidden  max-w-[1800px] mx-auto  "
      style={{
        backgroundImage: `url('/sugeryone.png'), url('/sugerytwo.png')`,
        backgroundPosition: "right 7% top 52%, left 4% bottom -2%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "20%, 15%",
      }}
    >
      {/* Optional overlay for better readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/30"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 max-w-6xl mx-auto ">
          <span className="text-blue-600 font-semibold text-lg">
            • Valuable Features
          </span>
          <h2 className="text-3xl md:text-4xl text-[#454545] font-semibold mt-4 mb-6 text-balance">
            Powerful Features to Support Every Step <br /> of Your Surgery
            Journey
          </h2>
        </div>

        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col border-[#A0B9F3] cursor-pointer min-h-[220px] h-full group transition-all duration-300 relative overflow-hidden feature-card"
              style={{
                background:
                  "radial-gradient(circle at bottom right, #CAD8F9 0%, #FFFFFF 70%)",
              }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1D4EC2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              {/* Content container */}
              <div className="relative z-10 transition-all duration-300 flex flex-col h-full">
                <CardHeader className="">
                  <div className="">
                    <div className="w-12 h-12 pb-2 mr-4 flex-shrink-0">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain transition-all duration-300 feature-icon"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(33%) sepia(89%) saturate(1032%) hue-rotate(209deg) brightness(91%) contrast(91%)",
                          transition: "filter 0.3s ease",
                        }}
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#1D4EC2] group-hover:text-white">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden">
                  <p className="text-sm opacity-90 leading-relaxed text-[#595959] group-hover:text-white line-clamp-4">
                    {feature.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
