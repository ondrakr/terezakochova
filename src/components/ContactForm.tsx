import React from 'react';
import Button from './Button';

const ContactForm = () => {
  return (
    <div id="contact-form" className="bg-[#F6E9DD] pb-32">
      <div className="hr-container">
        <hr />
      </div>
      <div className="container mx-auto h-full pl-6 pr-16 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 max-w-screen-2xl mx-auto">
          <div className="xl:col-start-3 xl:col-span-5 w-full xl:w-[calc(5*122px+4*16px)]">
            <h2 className="text-[#8EA37F] text-[32px] xl:text-[40px] font-light mb-8 xl:mb-12">
              Ozvěte se mi
            </h2>

            <div className="mb-8 xl:mb-12">
              <h3 className="text-[32px] xl:text-[40px] font-medium text-gray-800 mb-6 xl:mb-8">
                Tereza Kochová
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    <img src="/Phone_icon.svg" alt="Telefon" className="w-10 xl:w-12 h-10 xl:h-12" />
                  </div>
                  <a href="tel:+420603871299" className="text-base leading-[25px] text-gray-700 hover:text-[#8EA37F] transition-colors">
                    +420 603 871 299
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    <img src="/WhatsApp_icon.svg" alt="WhatsApp" className="w-10 xl:w-12 h-10 xl:h-12" />
                  </div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-base leading-[25px] text-gray-700 hover:text-[#8EA37F] transition-colors">
                    Whatsapp
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    <img src="/Mail_icon.svg" alt="Email" className="w-10 xl:w-12 h-10 xl:h-12" />
                  </div>
                  <a href="mailto:ahoj@terezakochova.cz" className="text-base leading-[25px] text-gray-700 hover:text-[#8EA37F] transition-colors">
                    ahoj@terezakochova.cz
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    <img src="/Ig_icon.svg" alt="Instagram" className="w-10 xl:w-12 h-10 xl:h-12" />
                  </div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-base leading-[25px] text-gray-700 hover:text-[#8EA37F] transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-base leading-[25px] mb-6 xl:mb-8">
              Zanechte mi rychlou zprávu, brzy se Vám ozvu :)
            </p>

            <form className="space-y-4 xl:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
                <input
                  type="text"
                  placeholder="*Jméno"
                  className="w-full px-4 xl:px-6 py-3 xl:py-4 rounded-full border border-gray-300 bg-transparent text-base leading-[25px]"
                  required
                />
                <input
                  type="tel"
                  placeholder="*Telefon"
                  className="w-full px-4 xl:px-6 py-3 xl:py-4 rounded-full border border-gray-300 bg-transparent text-base leading-[25px]"
                  required
                />
              </div>
              
              <input
                type="email"
                placeholder="*E-mail"
                className="w-full px-4 xl:px-6 py-3 xl:py-4 rounded-full border border-gray-300 bg-transparent text-base leading-[25px]"
                required
              />
              
              <textarea
                placeholder="Vaše zpráva..."
                className="w-full px-4 xl:px-6 py-3 xl:py-4 rounded-2xl xl:rounded-3xl border border-gray-300 bg-transparent min-h-[150px] xl:min-h-[200px] text-base leading-[25px]"
              />

              <div>
                <Button type="submit" variant="primary" disabled={true}>
                  Odeslat
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 