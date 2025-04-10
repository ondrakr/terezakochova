import React from 'react';
import Button from './Button';

const WhenToContact = () => {
  const items = [
    "potřebujete změnu.",
    "potřebujete podporu při řešení životních výzev.",
    "chcete najít rovnováhu mezi pracovním a osobním životem.",
    "jsi sportovec a potřebuješ zlepšit svou mentální odolnost a soustředění.",
    "pomáhám dětem se sebevědomím a zvládáním emocí.",
    "pokud to sami cítíte..."
  ];

  return (
    <div className="bg-[#F6E9DD]">
       <div className="hr-container">
        <hr />
      </div>
      <div className="section-content pt-12">
        <h2 className="text-[#8EA37F] text-5xl font-light mb-16">
          Jsem tu pokud
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 mb-16">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-white/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <span className="text-[#8EA37F] text-2xl font-light group-hover:scale-125 transition-transform duration-300">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <Button 
          variant="primary"
          href="#contact-form"
        >
          Ozvěte se mi
        </Button>
      </div>
    </div>
  );
};

export default WhenToContact; 