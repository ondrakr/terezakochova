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
      <div className="container mx-auto h-full pl-6 pr-16 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 max-w-screen-2xl mx-auto">
          <div className="xl:col-start-3 xl:col-span-5 w-full xl:w-[calc(5*122px+4*16px)]">
            <h2 className="text-[#8EA37F] text-[32px] xl:text-[40px] font-light mb-12 xl:mb-16">
              Jsem tu pokud
            </h2>
            
            <ul className="list-none space-y-3 xl:space-y-4 text-gray-700 text-base leading-[25px] mb-12 xl:mb-16">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#8EA37F] mr-4">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <Button 
              variant="primary"
              href="#contact-form"
            >
              Ozvěte se mi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenToContact; 