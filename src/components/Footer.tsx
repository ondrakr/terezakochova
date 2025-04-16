import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 md:px-40">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/copyright.png"
              alt="Copyright"
              className="w-8"
            />
            <span className="text-sm">copyright 2024</span>
          </div>
          <div>
            <a href="https://matfix.cz">
              <img
                src="/matfix.png"
                alt="Matfix"
                className="h-6 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 