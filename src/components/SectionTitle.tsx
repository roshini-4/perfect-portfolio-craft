
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-portfolio-accent mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;
