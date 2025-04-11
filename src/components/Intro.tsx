import React from 'react';
import Button from './Button';
import Navigation from './Navigation';

const Intro = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-me');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F6E9DD] min-h-screen flex items-center">
      <div className="container mx-auto px-6 xl:px-0">
        {/* Mobile design */}
        <div className="flex flex-col md:hidden w-full min-h-screen">
          {/* Logo section */}
          <div className="w-full pt-8 sm:pt-12 pb-4 sm:pb-6">
            <img 
              src="/Logo_Terezakochova.svg"
              alt="Tereza Kochová - Coaching & Mentoring" 
              className="w-full max-w-[280px] sm:max-w-[320px] mx-auto"
            />
          </div>
          
          {/* Text section */}
          <div className="pb-4 sm:pb-6">
            <h1 className="text-[#8EA37F] text-2xl sm:text-3xl font-light leading-relaxed text-center">
              Vaše cesta začíná tady, tak ji pojďme projít spolu!
            </h1>
          </div>

          {/* Image section */}
          <div className="flex-1 relative w-full flex items-end mt-4">
            <img 
              src="/Foto_tereza_kochova_uvod.png"
              alt="Tereza Kochová" 
              className="w-full max-w-[400px] mx-auto object-contain"
            />
          </div>
        </div>

        {/* Tablet/Medium design */}
        <div className="hidden md:flex xl:hidden flex-col w-full min-h-screen">
          <div className="w-2/3 lg:w-1/2 mx-auto pt-12 pb-8">
            <img 
              src="/Logo_Terezakochova.svg"
              alt="Tereza Kochová - Coaching & Mentoring" 
              className="w-full max-w-[400px] mx-auto"
            />
          </div>
          
          <div className="pb-8">
            <h1 className="text-[#8EA37F] text-3xl lg:text-4xl font-light leading-relaxed text-center max-w-[600px] mx-auto">
              Vaše cesta začíná tady, tak ji pojďme projít spolu!
            </h1>
          </div>

          <div className="flex-1 relative w-2/3 lg:w-1/2 mx-auto flex items-end">
            <img 
              src="/Foto_tereza_kochova_uvod.png"
              alt="Tereza Kochová" 
              className="w-full object-contain max-w-[500px] mx-auto"
            />
          </div>
        </div>

        {/* Desktop design */}
        <div className="hidden xl:grid grid-cols-12 gap-[16px] items-end min-h-screen max-w-screen-2xl mx-auto">
          {/* Left side - Photo (sloupce 1-5) */}
          <div className="col-span-5 self-end">
            <img 
              src="/Foto_tereza_kochova_uvod.png"
              alt="Tereza Kochová" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content (sloupce 6-9) */}
          <div className="col-span-4 flex flex-col items-start gap-24 self-center -mt-24">
            <img 
              src="/Logo_Terezakochova.svg"
              alt="Tereza Kochová - Coaching & Mentoring" 
              className="w-full max-w-md"
            />
            <h1 className="text-[#8EA37F] text-[45px] font-light leading-[55px] w-[90%]">
              Vaše cesta začíná tady, tak ji pojďme projít spolu!
            </h1>
          </div>

          {/* Prázdné sloupce (10-12) */}
          <div className="col-span-3" />
        </div>

        <hr className="w-full xl:w-1/2 mx-auto" />
      </div>
    </div>
  );
};

export default Intro; 