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
    <div className="bg-[#F6E9DD]">
      <div className="hr-container">
        <hr />
      </div>
      <div className="container mx-auto h-full px-6 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-0 max-w-screen-2xl mx-auto">
          {/* Mobilní a desktop verze */}
          <div className="xl:col-start-3 xl:col-span-5 flex flex-col gap-8 xl:gap-12">
            <h2 className="text-[#8EA37F] text-[32px] xl:text-[40px] font-light order-1">
              Poznejme se
            </h2>
            
            <p className="text-gray-700 text-base leading-[25px] order-2">
              Protože mi na Vaší změně záleží, dáme si na úvod společných 20 minut online schůzku, abychom se poznali. Společně si ujasníme, jaký směr konzultací pro Vás bude vhodný a kde začneme.
            </p>

            {/* Obrázek a text ZDARMA - na mobilu zde */}
            <div className="xl:hidden order-3">
              <img 
                src="/Foto_tereza_kochova_poznejme_se.png"
                alt="Tereza Kochová" 
                className="w-[70%] mx-auto aspect-square object-cover rounded-lg"
              />
              <div className="md:mt-6 md:mb-6 mt-14 mb-10">
                <p className="text-center text-bold text-[20px]">
                  Online schůzka je
                  <span className="block text-bold font-medium text-[20px]">
                    ZDARMA
                    <img 
                      src="/Underline_icon.svg" 
                      alt="underline" 
                      className="mx-auto w-32"
                    />
                  </span>
                </p>
              </div>
            </div>

            <Button variant="primary" onClick={scrollToContact} className="order-4">
              Pojďme domluvit termín
            </Button>

            <div className="space-y-4 xl:space-y-6 order-5  md:m-0 mt-4">
              <h3 className="text-[16px] font-bold">
                Ceník konzultací (45–60 minut)
              </h3>
              
              <div className="leading-[25px] grid grid-cols-2 w-full xl:w-[380px]">
                <div className="flex items-center">
                  <span>Konzultace</span>
                </div>
                <div className="flex items-center justify-end">
                  <span>1 000 Kč</span>
                </div>
                <div className="flex items-center">
                  <span>Balíček 5x konzultace</span>
                </div>
                <div className="flex items-center justify-end">
                  <span>4 000 Kč</span>
                </div>
                <div className="flex items-center">
                  <span>Balíček 10x konzultace</span>
                </div>
                <div className="flex items-center justify-end">
                  <span>7 000 Kč</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pravá strana - Obrázek a text ZDARMA - pouze na desktopu */}
          <div className="hidden xl:block xl:col-start-8 xl:col-span-2 relative">
            <img 
              src="/Foto_tereza_kochova_poznejme_se.png"
              alt="Tereza Kochová" 
              className="w-full max-w-[400px] xl:max-w-none aspect-square object-cover rounded-lg mx-auto"
            />
            <div className="mt-6">
              <p className="text-center text-bold text-[20px]">
                Online schůzka je
                <span className="block text-bold font-medium text-[20px]">
                  ZDARMA
                  <img 
                    src="/Underline_icon.svg" 
                    alt="underline" 
                    className="mx-auto w-32"
                  />
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