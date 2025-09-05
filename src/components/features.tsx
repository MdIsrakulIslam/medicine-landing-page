import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "SurgiSmart AI - SAFE Surgery Companion for patients",
    description: "Safes support Awareness Follow-up Empowerment",
    color: "bg-[#1D4EC2]", // Solid blue for this card
    textColor: "text-white",
    icon: "🛡️",
  },
  {
    title: "CareLoop (Long term conditions)",
    description:
      "Empathetic, Culturally-Tailored AI Health Coaches for Long-Term Condition Support (Plus Pharmacovigilance)",
    color: "bg-gradient-to-br from-purple-50 to-purple-100", // Purple gradient
    textColor: "text-[#1D4EC2]",
    icon: "🔄",
  },
  {
    title: "EmotiCare Engine",
    description:
      "Emotion-Aware Health Coaching An AI-powered emotional companion built to understand how patients feel and respond with compassion and intelligence (Plus pharmacovigilance)",
    color: "bg-gradient-to-br from-orange-50 to-orange-100", // Orange gradient
    textColor: "text-[#1D4EC2]",
    icon: "❤️",
  },
  {
    title: "AI Wound Scan",
    description: "Pre-op to post-op task tracking",
    color: "bg-gradient-to-br from-blue-50 to-blue-100", // Blue gradient
    textColor: "text-[#1D4EC2]",
    icon: "🔍",
  },
  {
    title: "EmotiCare AI (Emotional support)",
    description: "Pre-op to post-op task tracking",
    color: "bg-gradient-to-br from-gray-50 to-gray-100", // Gray gradient
    textColor: "text-[#1D4EC2]",
    icon: "🤗",
  },
  {
    title: "24/7 Chat Support",
    description: "Pre-op to post-op task tracking",
    color: "bg-gradient-to-br from-purple-50 to-purple-100", // Purple gradient
    textColor: "text-[#1D4EC2]",
    icon: "💬",
  },
  {
    title: "Recovery Tracker",
    description: "Pre-op to post-op task tracking",
    color: "bg-gradient-to-br from-blue-50 to-blue-100", // Blue gradient
    textColor: "text-[#1D4EC2]",
    icon: "📊",
  },
  {
    title: "Multilingual Access",
    description: "Pre-op to post-op task tracking",
    color: "bg-gradient-to-br from-gray-50 to-gray-100", // Gray gradient
    textColor: "text-[#1D4EC2]",
    icon: "🌍",
  },
  {
    title: "Surgery (Surgical Checklist)",
    description: "Pre-op to post-op task tracking",
    color: "bg-gradient-to-br from-purple-50 to-purple-100", // Purple gradient
    textColor: "text-[#1D4EC2]",
    icon: "✅",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('/sugeryone.png'), url('/sugerytwo.png')`,
        backgroundPosition: "right 10% top 60%, left 6% bottom 1%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "20%, 15%",
      }}
    >
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 max-w-6xl mx-auto">
          <span className="text-blue-600 font-semibold text-lg">
            • Valuable Features
          </span>
          <h2 className="text-3xl md:text-4xl text-[#454545] font-semibold mt-4 mb-6 text-balance">
            Powerful Features to Support Every Step <br /> of Your Surgery
            Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.color} border-0 h-full transition-all duration-300 hover:shadow-lg relative z-10 hover:scale-105`}
            >
              <CardHeader className="pb-3">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <CardTitle className={`text-xl font-bold ${feature.textColor}`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-sm opacity-90 leading-relaxed text-[#595959] ${feature.textColor}`}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
