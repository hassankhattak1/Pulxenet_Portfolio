import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyPulxenet() {
  const reasons = [
    "Cost-effective yet highly skilled offshore teams",
    "Tailored for the GCC enterprise landscape",
    "Deep expertise in Microsoft Ecosystem & Cloud",
    "Agile driven and scalable delivery models",
    "Strong focus on Cloud security & compliance",
    "Seamless IT infrastructure management"
  ];

  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary-light/10 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-subheading uppercase mb-3">Why Choose Us</h2>
            <h3 className="font-bebas text-5xl md:text-6xl text-heading mb-6 tracking-wide">Your Strategic Offshore IT Partner</h3>
            <p className="text-paragraph text-lg mb-8">
              At Pulxenet, we believe in building long-lasting partnerships. We combine our offshore delivery capabilities with enterprise-grade quality to help you achieve your digital transformation goals faster and more efficiently.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="text-primary-light mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-paragraph font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl relative">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-3 h-3 rounded-full bg-subheading animate-pulse" />
              </div>
              <h4 className="font-bebas text-3xl text-heading tracking-wide mb-4">Request a Consultation</h4>
              <p className="text-paragraph mb-6">Let's discuss how our offshore talent can accelerate your projects.</p>
              
              <form className="space-y-4 flex flex-col">
                <input type="text" placeholder="Full Name" className="bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-paragraph focus:outline-none focus:border-primary-light focus:bg-white transition-colors" />
                <input type="email" placeholder="Business Email Address" className="bg-slate-50 border border-gray-200 rounded-lg px-4 py-3 text-paragraph focus:outline-none focus:border-primary-light focus:bg-white transition-colors" />
                <button type="button" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg mt-2 transition-colors">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
