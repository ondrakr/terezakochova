import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8EA37F] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-sm text-white/80">
            © {new Date().getFullYear()} Všechna práva vyhrazena
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
            <span>Created by coalmarketing</span>
            <span className="hidden md:inline text-white/50">|</span>
            <span>Designer by matfix</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 