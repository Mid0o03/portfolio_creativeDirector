import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="px-6 md:px-40 py-24 flex flex-col md:flex-row gap-16 items-start">
      <div className="w-full md:w-1/3">
        <div className="sticky top-32">
          <span className="font-mono text-primary text-xs tracking-widest uppercase mb-4 block">// Philosophy</span>
          <h2 className="text-3xl font-bold leading-tight">Design is intelligence made visible.</h2>
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
        <p>
          I believe that great design happens at the intersection of clarity and chaos. My work is rooted in a deep understanding of user behavior, combined with an experimental approach to visual aesthetics.
        </p>
        <p>
          With over 10 years of experience leading creative teams, I specialize in bridging the gap between brand strategy and digital execution. Whether it's a 0-to-1 product launch or a global rebrand, my focus remains the same: create work that is undeniably distinct.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#222] mt-8">
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Capabilities</h4>
            <ul className="font-mono text-xs text-gray-500 space-y-3 uppercase tracking-wide">
              {['Creative Direction', 'UI/UX Design', 'Brand Strategy', 'Web Development'].map(item => (
                <li key={item} className="flex items-center gap-2">
                   <span className="size-1 bg-primary rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Recognition</h4>
            <ul className="font-mono text-xs text-gray-500 space-y-3 uppercase tracking-wide">
              {['Awwwards SOTD x3', 'FWA Site of the Month', 'Type Directors Club'].map(item => (
                 <li key={item} className="flex items-center gap-2">
                 <span className="size-1 bg-primary rounded-full"></span> {item}
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;