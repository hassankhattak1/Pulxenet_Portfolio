'use client';
import React, { useState } from 'react';

export default function Project() {
  const [activeTab, setActiveTab] = useState<'product' | 'projects'>('product');
  const featuredProject = {
    id: "pulzora",
    title: "Pulzora: Future of Pakistan's Tech Commerce",
    subtitle: "It's not just a marketplace, it's an ecosystem for IT success.",
    description: "A next-generation mobile application designed to revolutionize the way Pakistan buys, sells, and manages IT and networking equipment. By bringing together buyers, vendors, and certified technicians under one seamless platform, Pulzora eliminates the inefficiencies of traditional tech commerce.",
    tags: ["Flutter", "React.js", "E-Commerce", "IT Services", "End-to-End Encryption"],
    details: [
      { title: "Target Audience", text: "Tech Buyers, IT Service Seekers, Vendors" },
      { title: "Key Innovations", text: "Verified Technician Badges, Service + Product Bundles, AR Hardware Preview, Urdu Toggle." },
      { title: "Roadmap", text: "Vendor Wallets, Premium Subscriptions, AI Product Recommender, Learning Hub." }
    ]
  };

  const otherProjects = [
    {
      id: "cloud-migration",
      title: "Cloud Migration & Microsoft 365",
      subtitle: "End-to-end migration from on-premise to Microsoft 365.",
      description: "Successfully planned and executed full cloud migration and M365 infrastructure setup. Focused on improving collaboration, security, and scalability.",
      tags: ["Microsoft 365", "Exchange Online", "SharePoint", "Intune"],
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: "power-platform",
      title: "Power Platform Solutions",
      subtitle: "Digitizing and automating manual processes.",
      description: "Developed custom business applications using Power Apps and automated over 10 business workflows using Power Automate, integrating with M365.",
      tags: ["Power Apps", "Power Automate", "Power BI"],
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: "app-development",
      title: "Industry Custom Apps",
      subtitle: "Petrol Pump & Rice Mill operational applications.",
      description: "Delivering targeted operational solutions, from inventory to daily transaction management. Designed to meet unique industry functional requirements.",
      tags: ["Mobile App", "Web App", "Custom Dev"],
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 cozy-section-bg relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 drop-shadow-sm">Projects</h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-heading tracking-wide mb-6">Digital Ecosystems <br />& Innovations</h3>
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('product')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'product' ? 'bg-primary text-white shadow-md' : 'bg-white text-heading border border-gray-200 hover:bg-gray-50'}`}
            >
              Product
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'projects' ? 'bg-primary text-white shadow-md' : 'bg-white text-heading border border-gray-200 hover:bg-gray-50'}`}
            >
              Projects
            </button>
          </div>
        </div>

        {/* Featured Project - Pulzora (Full Width) */}
        {activeTab === 'product' && (
        <div className="mb-12 cozy-card p-1">
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-[1.4rem] p-8 md:p-12 lg:flex gap-12 items-center relative overflow-hidden">
            {/* Soft decorative ring */}
            <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-primary/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="lg:w-3/5 relative z-10 relative">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-6">Featured Flagship</span>
              <h4 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-heading tracking-wide leading-tight mb-4">
                {featuredProject.title}
              </h4>
              <p className="text-primary font-semibold text-lg font-poppins mb-6">{featuredProject.subtitle}</p>
              <p className="text-paragraph text-lg leading-relaxed mb-8">
                {featuredProject.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {featuredProject.details.map((detail, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 hover:border-primary/20 transition-colors">
                    <strong className="block text-heading text-sm font-bold mb-1.5">{detail.title}</strong>
                    <span className="text-paragraph text-sm leading-relaxed">{detail.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-4 py-1.5 bg-heading text-white border border-transparent text-xs font-semibold rounded-full hover:bg-primary transition-colors cursor-pointer shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-2/5 mt-10 lg:mt-0 relative z-10">
              <div className="bg-gradient-to-tr from-[#121212] to-[#086E73] p-1 rounded-3xl rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-[1.02] shadow-xl">
                <div className="bg-white rounded-[1.4rem] aspect-[4/5] relative overflow-hidden group/image">
                  <img
                    src="/pulzora.jpeg"
                    alt="Pulzora App Dashboard"
                    className="w-full h-full object-cover rounded-[1.4rem] group-hover/image:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)] rounded-[1.4rem] pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* 3-Column Grid for other projects */}
        {activeTab === 'projects' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((project, idx) => (
            <div key={idx} className="cozy-card p-8 group flex flex-col justify-between">

              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors flex items-center justify-center mb-8">
                  {project.icon}
                </div>
                <h4 className="font-bebas text-3xl text-heading tracking-wide leading-tight mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-subheading font-medium text-sm font-poppins mb-4">{project.subtitle}</p>
                <p className="text-paragraph leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-8 mt-4 border-t border-gray-100">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-slate-50 group-hover:bg-primary/5 text-subheading border border-gray-200 group-hover:border-primary/20 text-xs font-medium rounded-full transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        )}

      </div>
    </section>
  );
}
