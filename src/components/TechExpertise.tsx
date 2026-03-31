import React from 'react';
import { LayoutGrid } from 'lucide-react';

export default function TechExpertise() {
  const categories = [
    {
      name: "Cloud & Infrastructure",
      techs: ["Microsoft Azure", "Microsoft 365", "AWS", "Google Cloud", "Docker & Kubernetes"]
    },
    {
      name: "Microsoft Ecosystem",
      techs: ["Power Platform", "SharePoint", "Dynamics 365", "Teams Integration", "Active Directory"]
    },
    {
      name: "Application Development",
      techs: ["React & Next.js", "Node.js", ".NET Core", "Python", "React Native & Flutter"]
    },
    {
      name: "Data & Automation",
      techs: ["Power BI", "SQL Server", "MongoDB", "UiPath", "Microsoft Power Automate"]
    }
  ];

  return (
    <section id="expertise" className="py-24 cozy-section-bg border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold tracking-widest text-subheading uppercase mb-3">Our Toolkit</h2>
          <h3 className="font-bebas text-4xl md:text-6xl text-heading tracking-wide">Technology Expertise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="cozy-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <LayoutGrid className="text-subheading" />
                <h4 className="font-bebas text-2xl text-heading tracking-wide pt-1">{cat.name}</h4>
              </div>
              <ul className="space-y-3">
                {cat.techs.map((tech, i) => (
                  <li key={i} className="flex items-center text-paragraph">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
