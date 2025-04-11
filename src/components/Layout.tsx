import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  currentSection: number;
  totalSections: number;
  onNavigate: (direction: 'up' | 'down') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentSection, totalSections, onNavigate }) => {
  // Konstanty pro grid layout
  const columnWidth = 122; // šířka sloupce
  const gutterWidth = 16; // mezera mezi sloupci
  const marginWidth = 140; // okraj
  const minGridWidth = (12 * columnWidth) + (11 * gutterWidth) + (2 * marginWidth); // minimální šířka gridu
  
  // Pozice 11. sloupce od levého okraje
  const column11Position = marginWidth + (10 * columnWidth) + (10 * gutterWidth);

  return (
    <div className="relative">
      {/* Grid overlay pro vývojáře */}
      <div className="fixed inset-0 pointer-events-none hidden xl:block">
        <div className="mx-auto h-full">
          <div className="grid grid-cols-12 h-full gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation - mobilní i desktop verze */}
      <div className="block xl:fixed xl:top-1/2 xl:-translate-y-1/2 z-50" 
           style={{ 
             left: `calc(50% + ${column11Position - (minGridWidth/2)}px)`,
             width: `${columnWidth}px`
           }}>
        <Navigation 
          currentSection={currentSection}
          totalSections={totalSections}
          onNavigate={onNavigate}
        />
      </div>

      {/* Container pro hlavní obsah */}
      <div className="mx-auto">
        {/* Hlavní obsah */}
        {children}
      </div>
    </div>
  );
};

export default Layout; 