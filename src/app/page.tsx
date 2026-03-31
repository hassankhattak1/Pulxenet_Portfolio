import React from 'react';
import NavBar from '@/components/NavBar';
import CompanyOverview from '@/components/CompanyOverview';
import CoreServices from '@/components/CoreServices';
import TechExpertise from '@/components/TechExpertise';
import OrgStructure from '@/components/OrgStructure';
import DeliveryModel from '@/components/DeliveryModel';
import WhyPulxenet from '@/components/WhyPulxenet';
import ContactCTA from '@/components/ContactCTA';
import Project from '@/components/Project';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-background min-h-screen">
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          {/* Original Light Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100 z-0" />
          
          {/* Galaxy-like Wavy Spiral Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[750px] md:h-[750px] pointer-events-none z-0 mix-blend-multiply">
            <style>{`
              @keyframes morph-spiral-1 {
                0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1); }
                50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(180deg) scale(1.05); }
                100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(360deg) scale(1); }
              }
              @keyframes morph-spiral-2 {
                0% { border-radius: 50% 50% 30% 70% / 50% 50% 70% 30%; transform: rotate(360deg) scale(1); }
                50% { border-radius: 30% 70% 50% 50% / 30% 30% 50% 50%; transform: rotate(180deg) scale(0.95); }
                100% { border-radius: 50% 50% 30% 70% / 50% 50% 70% 30%; transform: rotate(0deg) scale(1); }
              }
              .wavy-spiral-arm-1 {
                animation: morph-spiral-1 20s ease-in-out infinite;
              }
              .wavy-spiral-arm-2 {
                animation: morph-spiral-2 25s ease-in-out infinite;
              }
              .wavy-galaxy-core {
                animation: morph-spiral-1 15s ease-in-out infinite;
              }
            `}</style>

            {/* Spiral Arm 1 */}
            <div 
              className="absolute inset-0 wavy-spiral-arm-1 opacity-70"
              style={{
                background: 'conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(8,110,115,0.7) 15%, transparent 35%, transparent 50%, rgba(8,110,115,0.7) 65%, transparent 85%)',
                maskImage: 'radial-gradient(ellipse at center, transparent 15%, black 45%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 15%, black 45%, transparent 75%)',
                filter: 'blur(20px)'
              }}
            ></div>
            
            {/* Spiral Arm 2 */}
            <div 
              className="absolute inset-8 wavy-spiral-arm-2 opacity-60"
              style={{
                background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, rgba(8,110,115,0.5) 20%, transparent 40%, transparent 50%, rgba(8,110,115,0.5) 70%, transparent 90%)',
                maskImage: 'radial-gradient(ellipse at center, transparent 10%, black 40%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 10%, black 40%, transparent 70%)',
                filter: 'blur(16px)'
              }}
            ></div>

            {/* Glowing Wavy Core */}
            <div 
              className="absolute inset-[25%] wavy-galaxy-core opacity-90"
              style={{
                background: 'radial-gradient(circle, rgba(8,110,115,0.9) 0%, rgba(8,110,115,0.4) 40%, transparent 80%)',
                filter: 'blur(12px)',
                boxShadow: '0 0 80px 40px rgba(8,110,115,0.15)'
              }}
            ></div>
            
            {/* Wavy Dust Rings */}
            <div className="absolute inset-[15%] wavy-spiral-arm-1 border-[4px] border-[#086E73]/10 border-dashed" style={{ filter: 'blur(2px)' }}></div>
            <div className="absolute inset-[25%] wavy-spiral-arm-2 border-[2px] border-[#333333]/10 border-dashed" style={{ filter: 'blur(1px)' }}></div>
          </div>

          {/* Network Connection Nodes SVG Overlay (darker strokes for light bg) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <svg className="absolute w-full h-full opacity-40 min-w-[1200px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path stroke="#086E73" strokeWidth="1" strokeOpacity="0.2" fill="none" d="M0,20% L25%,40% L50%,10% L75%,50% L100%,20%" />
              <path stroke="#086E73" strokeWidth="1" strokeOpacity="0.15" fill="none" d="M10%,60% L33%,30% L58%,50% L83%,10% L100%,50%" />
              <path stroke="#333333" strokeWidth="1" strokeOpacity="0.1" fill="none" d="M16%,10% L41%,50% L66%,20% L91%,60% L100%,10%" />
              
              <circle cx="25%" cy="40%" r="4" fill="#086E73" fillOpacity="0.5" className="animate-pulse" style={{ animationDuration: '3s' }} />
              <circle cx="50%" cy="10%" r="6" fill="#333333" fillOpacity="0.3" className="animate-ping" style={{ animationDuration: '4s' }} />
              <circle cx="75%" cy="50%" r="5" fill="#086E73" fillOpacity="0.4" />
              <circle cx="33%" cy="30%" r="3" fill="#086E73" fillOpacity="0.5" />
              <circle cx="58%" cy="50%" r="4" fill="#333333" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '1s' }} />
              
              <line x1="25%" y1="40%" x2="33%" y2="30%" stroke="#086E73" strokeOpacity="0.15" strokeWidth="1" />
              <line x1="50%" y1="10%" x2="66%" y2="20%" stroke="#333333" strokeOpacity="0.1" strokeWidth="1" />
            </svg>
          </div>

          <div className="z-10 text-center max-w-4xl px-4 mt-10">
            <h1 className="font-bebas text-6xl md:text-8xl text-heading mb-6 tracking-wide drop-shadow-sm">
              Empowering Your <span className="text-gradient drop-shadow-none">Digital Transformation</span>
            </h1>
            <p className="font-poppins text-xl md:text-2xl text-paragraph mb-10 max-w-2xl mx-auto leading-relaxed">
              Pulxenet is your premier offshore partner for Managed IT Services, Cloud Solutions, and Custom Development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg">
                Explore Our Services
              </a>
              <a href="#contact" className="bg-white hover:bg-gray-50 text-heading border border-gray-200 px-8 py-3.5 rounded-full font-bold shadow-sm hover:shadow transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <CompanyOverview />
        <CoreServices />
        <TechExpertise />
        <OrgStructure />
        <DeliveryModel />
        <Project />
        <WhyPulxenet />
      </main>
      <ContactCTA />
    </>
  );
}
