import React from 'react';
import Button from './Button';

const AboutMeExtended = () => {
  return (
    <div className="bg-[#F6E9DD]">
      <div className="hr-container">
        <hr />
      </div>
      <div className="container mx-auto h-full pl-6 pr-16 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 max-w-screen-2xl mx-auto">
          <div className="xl:col-start-3 xl:col-span-5 w-full xl:w-[calc(5*122px+4*16px)]">
            <h2 className="text-[#8EA37F] text-[32px] xl:text-[40px] font-light mb-8 xl:mb-12">
              O mně
            </h2>
            
            <div className="space-y-6 xl:space-y-8 text-gray-700 text-base leading-[25px]">
              <p>
                Ahoj, jsem Terez!
              </p>
              
              <p>
                Jsem normální holka, teď už máma a manželka, ale také kamarádka. Miluji život, lidi 
                a jejich osobní příběhy. Možná proto mě život dovedl až ke koučování.
              </p>
              
              <p>
                Lidé o mně tvrdí, že jsem stále usměvavá a upřímná. Já si myslím, že snažím být jen 
                sobě věrná a autentická. Mám spousty snů, které se snažím plnit a žít tak svůj 
                šťastný a vysněný život. Občas mám hlavu v oblacích a nekonečnou důvěru v život.
              </p>
              
              <p>
                Zažila jsem složité dětství, kdy jsem se musela stát velmi brzy soběstačnou, i proto 
                vím, že člověk občas potřebuje podporu. Myslím, že v životě jsem zažila spoustu 
                silných momentů, přesto jedu dál s optimismem a radostí ze života. Vím, že změna 
                nastavení není vždy jednoduché počínání, ale také z vlastní zkušenosti vím, že je to 
                možné.
              </p>
            </div>

            <div className="mt-12 xl:mt-16">
              <Button variant="primary">
                Přečtěte si recenze
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeExtended; 