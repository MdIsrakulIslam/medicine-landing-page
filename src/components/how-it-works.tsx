const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Set up your account with personal info, surgery details, and medical history.",
    active: true,
  },
  {
    number: "02",
    title: "Prepare for Surgery",
    description: "Follow your personalized checklist, view educational content, and set reminders",
    active: true,
  },
  {
    number: "03",
    title: "Get Real-Time Support",
    description: "On surgery day and after, use calming audio, chat with providers, and track your recovery.",
    active: true,
  },
  {
    number: "04",
    title: "Heal with Confidence",
    description: "Continue your recovery journey with ongoing support and monitoring.",
    active: false,
  },
]

export function HowItWorks() {
  return (
<div>
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-blue-600 font-semibold">
                • How it works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance text-[#454545]">
                Your Surgery Journey, Simplified
              </h2>
            </div>
 
            <div className="space-y-4">
              {/* Map first three steps dynamically */}
              {steps.slice(0, 3).map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 bg-[#F5F5F5] p-5 rounded-[6px]"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      step.active ? "bg-[#225CE4]" : "bg-gray-300"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div
                    className={step.active ? "text-gray-900" : "text-gray-400"}
                  >
                    <h3 className="text-xl  mb-2 text-[#454545]">
                      {step.title}
                    </h3>
                    <p className="text-[#595959] text-xs">{step.description}</p>
                  </div>
                </div>
              ))}
             
              {/* Add the fourth card statically */}
              <div className="flex items-start space-x-6 bg-gradient-to-b from-[#F5F5F5] p-5  rounded-[6px]">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white  bg-gradient-to-b from-[#7b9dee]">
                  04
                </div>
                <div className="text-gray-300">
                  <h3 className="text-xl  mb-2 text-gray-300">
                    Heal with Confidence
                  </h3>
                  <p className="text-gray-200 text-xs">
                    Continue your recovery journey with ongoing support and monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
