import {
  X,
  Home,
  Code,
  Download,
  Settings,
  ChevronRight,
  ExternalLink,
  Watch,
  IdCard,
  Type,
  Component,
  Plug,
  Option,
  LucideProportions,
  Palette,
  AppWindowMac,
  Warehouse,
  UserPlus
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const useActiveSection = () => {
  useEffect(() => {
    // Get all section elements with IDs
    const sections = document.querySelectorAll('[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update URL hash without scrolling
            const id = entry.target.getAttribute('id');
            if (id) {
              window.history.replaceState(null, '', `#${id}`);

              // Optional: Dispatch a custom event that your Sidebar can listen to
              window.dispatchEvent(new CustomEvent('sectionchange', {
                detail: { id: `#${id}` }
              }));
            }
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // 50% of the section is visible
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState<string>('#home');
  const [expandedItems, setExpandedItems] = useState<string[]>(['#quick-start']);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  useActiveSection();

  useEffect(() => {
    const handleSectionChange = (e: CustomEvent) => {
      setActiveItem(e.detail.id);
    };

    window.addEventListener('sectionchange', handleSectionChange as EventListener);

    return () => {
      window.removeEventListener('sectionchange', handleSectionChange as EventListener);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle body scroll lock when sidebar is open on mobile
  useEffect(() => {
    if (!isDesktop && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isDesktop]);

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', href: '#home' },
    {
      icon: <Watch size={20} />,
      label: 'Quick Start',
      href: '#quick-start',
      children: [
        { icon: <Download size={18} />, label: 'Installation', href: '#installation' },
        { icon: <Code size={20} />, label: 'Basic Usage', href: '#basic-usage' },
        { icon: <IdCard size={20} />, label: 'Use of Id', href: '#use-of-id' },
        { icon: <Type size={20} />, label: 'Return Type', href: '#api-return-type' }
      ]
    },
    {
      icon: <Component size={20} />, label: 'Api Methods', href: '#api-methods', children: [
        { icon: <Plug size={20} />, label: 'Simple Api', href: '#simple-api' },
        { icon: <Option size={20} />, label: 'Api options', href: '#api-options' },
        { icon: <LucideProportions size={20} />, label: 'Container Props', href: '#confirm-container-props' }
      ]
    },
    {
      icon: <Settings size={20} />, label: 'Customization', href: '#customization', children: [
        { icon: <Palette size={20} />, label: 'Themes', href: '#themes' },
        { icon: <AppWindowMac size={20} />, label: 'Animations', href: '#animations' },
        { icon: <Warehouse size={20} />, label: 'Classes in Container', href: '#classes-in-container' }
      ]
    },
    {
      icon: <UserPlus size={20} />, label: 'Contributing', href: '#contributing'
    }
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/SaadNasir-git/react-confirm-manager.git' },
    { label: 'npm', href: 'https://www.npmjs.com/package/react-confirm-manager' }
  ];

  const toggleExpand = (href: string) => {
    setExpandedItems(prev =>
      prev.includes(href)
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  const handleItemClick = (href: string, hasChildren: boolean) => {
    window.location.hash = href;
    setActiveItem(href);
    if (hasChildren) {
      toggleExpand(href);
    }
    if (!isDesktop) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay with fade animation */}
      {!isDesktop && (
        <div
          className={`
            fixed inset-0 bg-black/50 z-40
            transition-opacity duration-300 ease-in-out
            ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
        fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50
        transition-all duration-300 ease-in-out pb-4
        ${isDesktop ? 'lg:left-0' : ''}
        ${isOpen ? 'left-0' : 'left-[-256px]'}
      `}
        style={{
          left: isOpen ? 0 : -256,
          transition: 'left 300ms ease-in-out'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Menu
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors lg:hidden"
              aria-label="Close sidebar"
            >
              <X size={24} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  <button
                    onClick={() => handleItemClick(item.href, !!item.children)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-2.5 rounded-lg 
                      transition-all duration-200 group
                      ${activeItem === item.href
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    <span className={`
                      transition-colors duration-200
                      ${activeItem === item.href
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-500'
                      }
                    `}>
                      {item.icon}
                    </span>
                    <span className="flex-1 text-left font-medium">{item.label}</span>
                    {item.children && (
                      <ChevronRight
                        size={16}
                        className={`
                          transition-transform duration-200 ease-out
                          ${expandedItems.includes(item.href) ? 'rotate-90' : ''}
                          ${activeItem === item.href
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-400'
                          }
                        `}
                      />
                    )}
                  </button>

                  {/* Nested Children with smooth animation */}
                  {item.children && (
                    <div
                      className="ml-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700"
                      style={{
                        maxHeight: expandedItems.includes(item.href)
                          ? `${item.children.length * 44}px`
                          : '0px',
                        opacity: expandedItems.includes(item.href) ? 1 : 0,
                        visibility: expandedItems.includes(item.href) ? 'visible' : 'hidden',
                        transition: 'all 200ms ease-out',
                        overflow: 'hidden'
                      }}
                    >
                      <div className="space-y-1 py-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.hash = child.href;
                              setActiveItem(child.href);
                              if (!isDesktop) {
                                onClose();
                              }
                            }}
                            className={`
                              flex items-center gap-3 px-4 py-2 rounded-lg 
                              transition-all duration-200 text-sm
                              ${activeItem === child.href
                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                              }
                            `}
                          >
                            <span className={activeItem === child.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}>
                              {child.icon}
                            </span>
                            <span className='whitespace-nowrap'>{child.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-200 dark:border-gray-800" />

            {/* Social Links */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4 mb-3">
                Community
              </h3>
              <div className="space-y-1">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-3 px-4 py-2.5 rounded-lg 
                      text-gray-600 dark:text-gray-400 
                      hover:bg-gray-100 dark:hover:bg-gray-800 
                      hover:text-gray-900 dark:hover:text-gray-200
                      transition-all duration-200 group
                    "
                  >
                    <ExternalLink size={16} className="group-hover:text-blue-500 transition-colors duration-200" />
                    <span className="flex-1">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;