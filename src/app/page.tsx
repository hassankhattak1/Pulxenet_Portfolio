import React from 'react';
import NavBar from '@/components/NavBar';
import CompanyOverview from '@/components/CompanyOverview';
import CoreServices from '@/components/CoreServices';
import TechExpertise from '@/components/TechExpertise';
import OrgStructure from '@/components/OrgStructure';
import DeliveryModel from '@/components/DeliveryModel';
import WhyPulxenet from '@/components/WhyPulxenet';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100 z-0" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-subheading/5 rounded-full blur-3xl pointer-events-none"></div>

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
        <WhyPulxenet />
      </main>
      <ContactCTA />
    </>
  );
}
