import React from 'react';
import Button from './Button';

const AboutMe = () => {
  return (
    <div className="bg-[#F6E9DD] pt-40" id="about-me">
      <div className="container mx-auto h-full pl-6 pr-16 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 max-w-screen-2xl mx-auto">
          <div className="xl:col-start-3 xl:col-span-5 w-full xl:w-[calc(5*122px+4*16px)]">
            <h2 className="text-[#8EA37F] text-[32px] xl:text-[40px] font-light mb-8 xl:mb-12">
              Jsem tu pro vás
            </h2>
            
            <div className="space-y-6 xl:space-y-8 text-gray-700 text-base leading-[25px]">
              <p>
                Budu velice ráda, Váš osobní průvodce na této Vaší cestě, protože vše začíná už od úplné maličkosti.
              </p>
              
              <p>
                Společně se podíváme na Vaše silné stránky a na Vaše potenciály.
              </p>
              
              <p>
                Uvědomíte si jaké máte sny, jak chcete žít a jaké chcete mít vztahy.
              </p>
              
              <p>
                Pomohu Vám najít odpovědi, které čekají uvnitř Vás, krok za krokem.
              </p>
              
              <p>
                Začnete si tvořit Váš <span className="font-bold">VYSNĚNÝ ŽIVOT!</span>
              </p>
            </div>
            
            <div className="mt-12 xl:mt-16 p-4 w-full xl:w-[290px] text-center border rounded-2xl md:rounded-full border-gray-400 italic text-base leading-[20px] text-[14px] text-gray-700">
              Důvěra a osobní přístup, jsou základem našeho společného procesu, který vám přinese vaše AHA momenty.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 