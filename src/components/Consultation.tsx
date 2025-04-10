import React from 'react';
import Button from './Button';

const Consultation = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F6E9DD] pb-12">
       <div className="hr-container">
        <hr />
      </div>
      <div className="section-content pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-32 gap-20 items-center">
          {/* Levá strana - Text a ceník */}
          <div className="space-y-12">
            <h2 className="text-[#8EA37F] text-5xl font-light">
              Poznejme se
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Protože mi na Vaší změně záleží, dáme si na úvod společných 20 minut online schůzku, abychom se poznali. Společně si ujasníme, jaký směr konzultací pro Vás bude vhodný a kde začneme.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-800">
                Ceník konzultací (45–60 minut)
              </h3>
              
              <div className="space-y-3 text-lg text-gray-700">
                <div className="flex justify-between items-center">
                  <span>Konzultace</span>
                  <span>1 000 Kč</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Balíček 5x konzultace</span>
                  <span>4 000 Kč</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Balíček 10x konzultace</span>
                  <span>7 000 Kč</span>
                </div>
              </div>
            </div>

            <Button variant="primary" onClick={scrollToContact}>
              Pojďme domluvit termín
            </Button>
          </div>

          {/* Pravá strana - Obrázek a text ZDARMA */}
          <div className="relative">
            <img 
              src="/Foto_tereza_kochova_poznejme_se.png"
              alt="Tereza Kochová" 
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-0 right-0 transform translate-y-1/2 bg-white p-8 rounded-2xl shadow-xl border border-[#8EA37F]/20">
              <p className="text-xl font-light text-center text-gray-700">
                Úvodní online schůzka je
                <span className="block text-2xl font-medium mt-2 text-[#8EA37F]">
                  ZDARMA
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-[#8EA37F]/30"></span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation; 