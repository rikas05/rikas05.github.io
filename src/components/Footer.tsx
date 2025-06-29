import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; {currentYear} Rikas Mohammed N. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 