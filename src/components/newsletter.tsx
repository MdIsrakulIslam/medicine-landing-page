import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="relative text-white py-20 overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/lungtwo.png') ,url('/lungtwo.png')`,
          backgroundPosition: "right 8% top 0%, left bottom -17%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "15%, 15%",
        }}
      />

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-[#1D4EC2]/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="w-[480px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Be the first to know when we launch
            </h2>
            <p className="text-blue-100 mb-8 text-pretty">
              We're still building. Subscribe for updates and 20% off when we
              launch. No spam, we promise!
            </p>
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
          </div>

          <div className="flex justify-center">
            <img
              src="/towiphone.png"
              alt="LAMARE app launch preview"
              className="w-[1000px]  rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
