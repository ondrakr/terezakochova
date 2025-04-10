import React from 'react';
import Button from './Button';

const ContactForm = () => {
  return (
    <div id="contact-form" className="bg-[#F6E9DD]">
         <div className="hr-container">
        <hr />
      </div>
      <div className="section-content pt-12">
        <h2 className="text-[#8EA37F] text-5xl font-light mb-12">
          Ozvěte se mi
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-medium text-gray-800 mb-8">
            Tereza Kochová
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img src="/Phone_icon.svg" alt="Telefon" className="w-12 h-12" />
              </div>
              <a href="tel:+420603871299" className="text-gray-700 hover:text-[#8EA37F] transition-colors">
                +420 603 871 299
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img src="/WhatsApp_icon.svg" alt="WhatsApp" className="w-12 h-12" />
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#8EA37F] transition-colors">
                Whatsapp
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img src="/Mail_icon.svg" alt="Email" className="w-12 h-12" />
              </div>
              <a href="mailto:ahoj@terezakochova.cz" className="text-gray-700 hover:text-[#8EA37F] transition-colors">
                ahoj@terezakochova.cz
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img src="/Ig_icon.svg" alt="Instagram" className="w-12 h-12" />
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#8EA37F] transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-8">
          Zanechte mi rychlou zprávu, brzy se Vám ozvu :)
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="*Jméno"
              className="w-full px-6 py-4 rounded-full border border-gray-300 bg-transparent"
              required
            />
            <input
              type="tel"
              placeholder="*Telefon"
              className="w-full px-6 py-4 rounded-full border border-gray-300 bg-transparent"
              required
            />
          </div>
          
          <input
            type="email"
            placeholder="*E-mail"
            className="w-full px-6 py-4 rounded-full border border-gray-300 bg-transparent"
            required
          />
          
          <textarea
            placeholder="Vaše zpráva..."
            className="w-full px-6 py-4 rounded-3xl border border-gray-300 bg-transparent min-h-[200px]"
          />

          <div>
            <Button type="submit" variant="primary" disabled={true}>
              Odeslat
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 