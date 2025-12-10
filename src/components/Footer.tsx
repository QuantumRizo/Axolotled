import React from 'react';
import { Instagram, MessageCircle, Mail, Printer, Box, Palette, Layers } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="contacto" className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-brand-orchid/5 blur-[100px] pointer-events-none mix-blend-multiply"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand & Contact */}
                    <div>
                        <h3 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-2">
                            <span className="text-brand-soft-blue">AXOLOTL</span>._.ED
                        </h3>
                        <p className="text-textMuted mb-6 leading-relaxed">
                            Les compartimos el catálogo de productos y servicios que ofrecemos en AXOLOTLED.
                            Quedamos a sus órdenes para materializar sus ideas.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/axolotl._.ed/" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-brand-hover transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://wa.me/5215532539481" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-brand-hover transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </a>
                            <a href="mailto:contacto@axolotl.ed" className="text-textMuted hover:text-brand-hover transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-textMain mb-6 border-b border-brand-soft-blue/30 pb-2 inline-block">
                            Servicios
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-textMuted hover:text-brand-hover transition-colors group">
                                <Printer className="w-5 h-5 text-brand-orchid group-hover:text-brand-hover transition-colors" />
                                <span>Impresión 3D (FDM)</span>
                            </li>
                            <li className="flex items-center gap-3 text-textMuted hover:text-brand-hover transition-colors group">
                                <Layers className="w-5 h-5 text-brand-orchid group-hover:text-brand-hover transition-colors" />
                                <span>Prototipado Rápido</span>
                            </li>
                            <li className="flex items-center gap-3 text-textMuted hover:text-brand-hover transition-colors group">
                                <Box className="w-5 h-5 text-brand-orchid group-hover:text-brand-hover transition-colors" />
                                <span>Diseño 3D</span>
                            </li>
                            <li className="flex items-center gap-3 text-textMuted hover:text-brand-hover transition-colors group">
                                <Palette className="w-5 h-5 text-brand-orchid group-hover:text-brand-hover transition-colors" />
                                <span>Pintura de Miniaturas</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links or Map Placeholder */}
                    <div>
                        <h4 className="text-lg font-bold text-textMain mb-6 border-b border-brand-soft-blue/30 pb-2 inline-block">
                            Ubicación
                        </h4>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-textMain mb-2">Mexico City, Mexico</p>
                            <p className="text-sm text-textMuted">
                                Envíos a toda la república y entregas personales en puntos céntricos.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-textMuted">
                    <p>&copy; {new Date().getFullYear()} Axolotl._.ed. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
