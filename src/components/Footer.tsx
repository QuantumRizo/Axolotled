import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="contacto" className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand & Contact */}
                    <div>
                        <h3 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-2">
                            <span className="text-brand-deep">AXOLOTL</span>._.ED
                        </h3>
                        <p className="text-textMuted mb-6 leading-relaxed max-w-md">
                            Les compartimos el catálogo de productos y servicios que ofrecemos en AXOLOTLED.
                            Quedamos a sus órdenes para materializar sus ideas.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/axolotl._.ed/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-textMain shadow-sm border border-gray-200 hover:text-brand-deep hover:border-brand-deep transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/5215532539481" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-textMain shadow-sm border border-gray-200 hover:text-brand-deep hover:border-brand-deep transition-all duration-300">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a href="mailto:contacto@axolotl.ed" className="p-3 bg-white rounded-full text-textMain shadow-sm border border-gray-200 hover:text-brand-deep hover:border-brand-deep transition-all duration-300">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links or Map Placeholder */}
                    <div className="flex flex-col md:items-end">
                        <h4 className="text-lg font-bold text-textMain mb-6 border-b-2 border-brand-orchid/30 pb-2 inline-block">
                            Ubicación
                        </h4>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-left">
                            <p className="text-textMain font-bold mb-2">Ciudad de México, México</p>
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
            {/* Créditos del desarrollador */}
            <a
    href="https://davidrizo.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[10px] underline text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider cursor-pointer"
>
    Created by davidrizo.dev
</a>
        </footer>
    );
};

export default Footer;
