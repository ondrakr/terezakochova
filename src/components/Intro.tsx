import React from 'react';
import Button from './Button';

const Intro = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-me');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F6E9DD] min-h-screen flex items-center overflow-hidden">
      <div className="w-full">
        {/* Mobile design */}
        <div className="flex flex-col md:hidden w-full h-screen">
          {/* Logo section */}
          <div className="w-full px-8 pt-12 pb-6">
            <img 
              src="/Logo_Terezakochova.svg"
              alt="Tereza Kochová - Coaching & Mentoring" 
              className="w-full"
            />
          </div>
          
          {/* Text section */}
          <div className="px-8 pb-6 pt-6">
            <h1 className="text-[#8EA37F] text-3xl font-light leading-relaxed text-center">
              Vaše cesta začíná tady, tak ji pojďme projít spolu!
            </h1>
          </div>

          {/* Image section - takes remaining space */}
          <div className="flex-1 relative w-full flex items-end">
            <img 
              src="/Foto_tereza_kochova_uvod.png"
              alt="Tereza Kochová" 
              className="w-full object-contain"
            />
          </div>

        </div>

        {/* Tablet/Medium design */}
        <div className="hidden md:flex xl:hidden flex-col w-full h-screen">
          <div className="w-1/2 mx-auto px-8 pt-12 pb-6">
            <img 
              src="/Logo_Terezakochova.svg"
              alt="Tereza Kochová - Coaching & Mentoring" 
              className="w-full"
            />
          </div>
          
          <div className="px-8 pb-6">
            <h1 className="text-[#8EA37F] text-4xl font-light leading-relaxed text-center">
              Vaše cesta začíná tady, tak ji pojďme projít spolu!
            </h1>
          </div>

          <div className="flex-1 relative w-1/2 mx-auto flex items-end">
            <img 
              src="/Foto_tereza_kochova_uvod.png"
              alt="Tereza Kochová" 
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Desktop design - unchanged */}
        <div className="hidden xl:flex flex-col xl:flex-row items-center justify-between gap-16 section-content">
          <div className="relative w-[85%] h-full">
            <img 
              src="/Foto_tereza_kochova_uvod.png"
              alt="Tereza Kochová" 
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-black/20"></div>
          </div>

          <div className="w-[60%] flex flex-col items-start gap-8 self-center">
            <img 
              src="/Logo_Terezakochova.svg"
              alt="Tereza Kochová - Coaching & Mentoring" 
              className="w-full max-w-lg"
            />
            <h1 className="text-[#8EA37F] text-5xl font-light leading-relaxed">
              Vaše cesta začíná tady, tak ji pojďme projít spolu!
            </h1>
            <Button variant="secondary" onClick={scrollToAbout}>
              Začít cestu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro; 