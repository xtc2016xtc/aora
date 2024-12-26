import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: '首页', path: '/' },
    { name: '新闻', path: '/news' },
    { name: '关于', path: '/about' },
    { name: '服务', path: '/services' },
    { name: '产品', path: '/products' },
    { name: '联系我们', path: '/contact' },
  ];

  const getActiveIndex = () => {
    const activeItem = navItems.findIndex(item => item.path === location.pathname);
    return activeItem !== -1 ? activeItem : 0;
  };

  const activeIndex = getActiveIndex();

  return (
    <section className="relative w-full h-22 bg-gray-100">
       {/* Logo */}
       <div className="hidden md:block absolute left-6 top-0 h-[40px] w-48">
          <img src="https://via.placeholder.com/188x88.png?text=Logo" alt="Logo" className='h-[40px] w-full'/>
        </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full relative">
        {/* Navigation Items */}
        <div className="flex justify-around items-center flex-grow">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="relative px-4 py-2 text-gray-700"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.name}
              {((hoveredIndex === index) || (hoveredIndex === null && activeIndex === index)) && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition-all duration-300"></div>
              )}
            </NavLink>
          ))}
          <div
            className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300"
            style={{
              width: `${100 / navItems.length}%`,
              transform: `translateX(${(hoveredIndex !== null ? hoveredIndex : activeIndex) * 100}%)`,
            }}
          ></div>
        </div>
      </div>
      {/* User Info */}
      <div className="absolute right-6 top-0 h-[40px] w-auto hidden md:block">
        <div className='flex justify-between items-center space-x-2'>
        <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full" />
          <span className="text-gray-700">152****8951</span>
          <span className="text-gray-700">用户名</span>
        </div>
        </div>
    </section>
  );
};

export default Navbar;