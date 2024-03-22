import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeaderLinks from './HeaderLinks';
import Logo from './assets/mgilogo.png';

function Header() {
  const [hoverItem, setHoverItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = {
    Products: [
      { name: 'Electronics', path: '/products/electronics' },
      { name: 'Furniture', path: '/products/furniture' },
    ],
    // Add other categories as needed
  };

  const headerVariants = {
    initial: { height: "initial", backgroundColor: "transparent" },
    expanded: { height: "50vh", backgroundColor: "#ffffff", transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="initial"
      animate={isExpanded ? "expanded" : "initial"}
      variants={headerVariants}
      className="header-container"
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        {/* Use justify-content-between to push the logo to the left and links to the right */}
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" style={{ height: '50px' }} />
          </Link>
          {/* This div will take the remaining space and center the HeaderLinks within itself */}
          <div className="flex-grow-1 d-flex justify-content-center">
            <HeaderLinks setHoverItem={setHoverItem} setIsExpanded={setIsExpanded} />
          </div>
        </div>
      </nav>
      {isExpanded && hoverItem && (
        <div className="categories-container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          {categories[hoverItem]?.map(category => (
            <Link key={category.name} to={category.path} className="category-link">
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Header;
