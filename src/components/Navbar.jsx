import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // 当前悬停的导航项索引
  const [indicatorStyle, setIndicatorStyle] = useState({}); // 蓝色长条的样式
  const location = useLocation(); // 获取当前路径
  const navRefs = useRef([]); // 存储导航项的引用

  // 导航项列表
  const navItems = [
    { name: '首页', path: '/' },
    { name: '新闻', path: '/news' },
    { name: '关于', path: '/about' },
    { name: '服务', path: '/services' },
    { name: '产品', path: '/products' },
    { name: '联系我们', path: '/contact' },
  ];

  // 获取当前激活的导航项索引
  const getActiveIndex = () => {
    const activeItem = navItems.findIndex(item => item.path === location.pathname);
    return activeItem !== -1 ? activeItem : 0;
  };

  const activeIndex = getActiveIndex();

  // 当路径变化时，更新蓝色长条的位置和宽度
  useEffect(() => {
    if (navRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeIndex]);

  // 当鼠标悬停在导航项上时，更新蓝色长条的位置和宽度
  const handleMouseEnter = (index) => {
    if (navRefs.current[index]) {
      const { offsetLeft, offsetWidth } = navRefs.current[index];
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
    setHoveredIndex(index);
  };

  // 当鼠标离开导航项时，恢复蓝色长条的位置和宽度
  const handleMouseLeave = () => {
    if (navRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = navRefs.current[activeIndex];
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
    setHoveredIndex(null);
  };

  return (
    <section className="relative w-full h-22 bg-gray-100">
      {/* Logo */}
      <div className="hidden md:block absolute left-6 top-0 h-[40px] w-48">
        <img src="https://via.placeholder.com/188x88.png?text=Logo" alt="Logo" className='h-[40px] w-full'/>
      </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full relative">
        {/* 导航项 */}
        <div className="flex justify-around items-center flex-grow">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="relative px-4 py-2 text-gray-700"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              ref={el => navRefs.current[index] = el}
            >
              {item.name}
              {((hoveredIndex === index) || (hoveredIndex === null && activeIndex === index)) && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition-all duration-300"></div>
              )}
            </NavLink>
          ))}
          <div
            className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300"
            style={indicatorStyle}
          ></div>
        </div>
      </div>
      {/* 用户信息 */}
      <div className="absolute right-6 top-0 h-[40px] w-auto hidden md:block">
        <div className='flex justify-between items-center space-x-2'>
          <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full" />
          <span className="text-gray-700">****8953</span>
            <button>退出登录</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;