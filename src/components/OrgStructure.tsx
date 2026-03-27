import React from 'react';

export default function OrgStructure() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-subheading uppercase mb-3">Leadership</h2>
          <h3 className="font-bebas text-4xl md:text-6xl text-heading tracking-wide">Organization Structure</h3>
        </div>

        <div className="flex flex-col items-center relative py-10">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2 hidden md:block z-0"></div>

          <div className="bg-white px-8 py-4 rounded-xl border-2 border-primary/80 shadow-md z-10 mb-8 w-64 text-center">
            <h4 className="font-bebas text-2xl text-heading tracking-wide mb-1">Chief Executive Officer</h4>
            <span className="text-subheading font-medium text-sm">(CEO)</span>
          </div>

          <div className="bg-slate-50 px-8 py-4 rounded-xl border border-primary/30 shadow-sm z-10 mb-8 w-64 text-center">
            <h4 className="font-bebas text-2xl text-heading tracking-wide mb-1">Managing Director</h4>
            <span className="text-subheading font-medium text-sm">(MD)</span>
          </div>

          <div className="bg-slate-50 px-8 py-4 rounded-xl border border-primary/30 shadow-sm z-10 mb-12 w-64 text-center">
            <h4 className="font-bebas text-2xl text-heading tracking-wide mb-1">Chief Technology Officer</h4>
            <span className="text-subheading font-medium text-sm">(CTO)</span>
          </div>

          {/* Branching below CTO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl z-10 relative">
            <div className="hidden md:block absolute top-0 left-1/6 right-1/6 h-0.5 bg-primary/30 -translate-y-6"></div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white w-full p-4 rounded-xl border border-gray-200 shadow-sm text-center mb-4">
                <h4 className="font-bebas text-xl text-subheading tracking-wide">Project Manager</h4>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white w-full p-4 rounded-xl border border-gray-200 shadow-sm text-center mb-4 relative">
                <div className="hidden md:block absolute -top-6 left-1/2 w-0.5 h-6 bg-primary/30"></div>
                <h4 className="font-bebas text-xl text-subheading tracking-wide">Team Leads</h4>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white w-full p-4 rounded-xl border border-gray-200 shadow-sm text-center mb-4 relative">
                <div className="hidden md:block absolute -top-6 left-1/2 w-0.5 h-6 bg-primary/30"></div>
                <h4 className="font-bebas text-xl text-subheading tracking-wide">Engineers</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
