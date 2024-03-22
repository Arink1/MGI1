import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLinks({ setHoverItem, setIsExpanded }) {
  // Define navigation links with explicit paths
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="navbar-nav">
      {links.map(({ name, path }) => (
        <div key={name} className="nav-item" onMouseEnter={() => { setHoverItem(name); setIsExpanded(true); }} onMouseLeave={() => setIsExpanded(false)}>
          <Link to={path} className="nav-link">{name}</Link>
        </div>
      ))}
    </div>
  );
}

export default HeaderLinks;
