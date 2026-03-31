import { Globe, ShieldCheck, Target, Users } from 'lucide-react';

export default function CompanyOverview() {
  const features = [
    { icon: <Target className="text-subheading" size={32} />, title: "Agile Delivery", desc: "Fast, iterative delivery model tailored for enterprise needs." },
    { icon: <Globe className="text-subheading" size={32} />, title: "Offshore Excellence", desc: "Premium IT teams operating seamlessly with GCC clients." },
    { icon: <ShieldCheck className="text-subheading" size={32} />, title: "Enterprise Quality", desc: "Strict adherence to security, compliance, and best practices." },
    { icon: <Users className="text-subheading" size={32} />, title: "Seamless Integration", desc: "We act as an extension of your own internal team." },
  ];

  return (
    <section id="about" className="py-24 cozy-section-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-subheading uppercase mb-3">Company Overview</h2>
          <h3 className="font-bebas text-4xl md:text-6xl text-heading mb-6 tracking-wide">Bridging the Gap with <br />Offshore Delivery</h3>
          <p className="text-lg text-paragraph">
            Pulxenet specializes in providing top-tier Managed IT Services and Custom Development for GCC clients. We leverage an advanced offshore delivery model to bring high-quality technical talent to your projects while optimizing costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="cozy-card p-6 group">
              <div className="mb-4 bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                {feat.icon}
              </div>
              <h4 className="font-bebas text-2xl text-heading mb-3 tracking-wide">{feat.title}</h4>
              <p className="text-paragraph text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
