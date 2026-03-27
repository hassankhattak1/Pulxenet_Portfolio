import React from 'react';

export default function DeliveryModel() {
  const steps = [
    { num: "01", title: "Discovery & Planning", text: "Understanding your GCC business needs and structuring the offshore operation." },
    { num: "02", title: "Talent Alignment", text: "Assigning dedicated team leads and engineers with the exact technical expertise." },
    { num: "03", title: "Integration & Tools", text: "Setting up secure communication, repo access, and project management channels." },
    { num: "04", title: "Agile Development", text: "Iterative sprints, continuous integration, and transparent reporting." },
    { num: "05", title: "QA & Deployment", text: "Rigorous testing and seamless delivery into your production environment." }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 rtl-override">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold tracking-widest text-subheading uppercase mb-3">Our Methodology</h2>
          <h3 className="font-bebas text-4xl md:text-6xl text-heading tracking-wide">The Delivery Model</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-primary/10 md:-translate-x-1/2 rounded max-md:-translate-x-1/2"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className={`relative flex items-center justify-between mb-8 md:mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-primary border-4 border-white -translate-x-1/2 flex items-center justify-center font-bold text-white z-10 shadow-md">
                {step.num}
              </div>

              {/* Content box */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${idx % 2 === 0 ? 'md:pl-8 lg:pl-16 text-left' : 'md:pr-8 lg:pr-16 md:text-right'}`}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                  <h4 className="font-bebas text-2xl text-subheading tracking-wide mb-2">{step.title}</h4>
                  <p className="text-paragraph">{step.text}</p>
                </div>
              </div>
              
              {/* Empty spacer for flex parity */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
