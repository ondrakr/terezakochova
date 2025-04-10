import React from 'react';
import Button from './Button';

const AboutMe = () => {
  return (
    <div className="bg-[#F6E9DD] pt-12" id="about-me">
      <div className="section-content">
        <h2 className="text-[#8EA37F] text-5xl font-light mb-12">
          Jsem tu pro vás
        </h2>
        
        <div className="space-y-8 text-gray-700 text-lg">
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
        
        <div className="mt-16 p-4 md:p-8 border rounded-2xl md:rounded-full border-gray-400 max-w-full md:max-w-2xl italic text-gray-700 text-sm md:text-base">
          Důvěra a osobní přístup, jsou základem našeho společného procesu, který vám přinese vaše AHA momenty.
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 