import React from 'react';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
  onNavigate: (direction: 'up' | 'down') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, totalSections, onNavigate }) => {
  const handleDotClick = (index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed h-full flex items-center z-[9999] right-0">
      <div className="flex flex-col items-center gap-6 mb-2 md:static fixed bottom-4 right-0">
        <button 
          onClick={() => onNavigate('up')}
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          <img src="/Up_arrow.svg" alt="Nahoru" className="w-10 h-10" />
        </button>
        
        <div className="flex flex-col gap-3">
          {Array.from({ length: totalSections }).map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer
                ${currentSection === index ? 'bg-black' : 'bg-transparent border border-black/20'}`}
            />
          ))}
        </div>

        <button 
          onClick={() => onNavigate('down')}
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          <img src="/Down_arrow.svg" alt="Dolů" className="w-10 h-10" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 