import React from 'react';
import { Cloud, Code, Database, SearchCheck, Server, Settings, Users } from 'lucide-react';

export default function CoreServices() {
  const services = [
    { icon: <Server size={32} />, title: "Managed IT Services", desc: "End-to-end IT support, infrastructure management, and monitoring." },
    { icon: <Cloud size={32} />, title: "Cloud Services", desc: "Azure & Microsoft 365 migrations, hosting, and architecture." },
    { icon: <Code size={32} />, title: "Development", desc: "Custom Website and Application development using modern stacks." },
    { icon: <Database size={32} />, title: "Power Apps & BI", desc: "Business intelligence and low-code Microsoft ecosystem solutions." },
    { icon: <Settings size={32} />, title: "RPA Automation", desc: "Robotic Process Automation to streamline repetitive workflows." },
    { icon: <SearchCheck size={32} />, title: "SEO & Digital", desc: "Digital optimization and comprehensive Search Engine visibility." },
    { icon: <Users size={32} />, title: "Staff Augmentation", desc: "Dedicated engineering teams embedded into your processes." },
  ];

  return (
    <section id="services" className="py-24 cozy-section-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-bold tracking-widest text-subheading uppercase mb-3">Our Core Services</h2>
          <h3 className="font-bebas text-4xl md:text-6xl text-heading tracking-wide">Comprehensive Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="cozy-card p-8 group">
              <div className="text-subheading mb-6 group-hover:text-primary transition-colors">
                {service.icon}
              </div>
              <h4 className="font-bebas text-2xl text-heading mb-3 group-hover:text-subheading transition-colors tracking-wide">{service.title}</h4>
              <p className="text-paragraph text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
