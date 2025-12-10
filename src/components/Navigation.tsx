import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
    };

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        const footer = document.getElementById('contacto');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Proyectos', path: '/proyectos' },
        { name: 'Sobre Mí', path: '/sobre-mi' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 group">
                            <img src="/logo.jpg" alt="Axolotl Logo" className="h-10 w-10 rounded-full object-cover border border-gray-200" />
                            <span className="text-xl font-bold tracking-wider text-textMain group-hover:text-brand-soft-blue transition-colors duration-300">
                                Axolotl._.ed
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={scrollToTop}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-brand-hover ${location.pathname === link.path ? 'text-brand-soft-blue font-bold' : 'text-textMuted'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="#contacto"
                                onClick={scrollToContact}
                                className="px-3 py-2 rounded-md text-sm font-medium text-textMuted hover:text-brand-hover transition-all duration-300 cursor-pointer"
                            >
                                Contacto
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-textMuted hover:text-textMain hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={scrollToTop}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? 'text-brand-soft-blue' : 'text-textMuted'
                                    } hover:text-brand-hover hover:bg-gray-50`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="#contacto"
                            onClick={scrollToContact}
                            className="block px-3 py-2 rounded-md text-base font-medium text-textMuted hover:text-brand-hover hover:bg-gray-50 cursor-pointer"
                        >
                            Contacto
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
