import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <div className="relative h-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-brand-deep to-brand-orchid pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[100%] bg-white/5 transform -skew-x-12 translate-x-[50%] z-0 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[80%] bg-brand-sky/20 transform -skew-x-12 translate-x-[-50%] z-0 blur-3xl rounded-full"></div>

            {/* Glass Container */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="relative">
                    {/* Glow behind the glass */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-sky to-brand-orchid rounded-3xl rotate-1 blur-xl opacity-30 scale-105"></div>

                    {/* Glass Card */}
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-center">
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 text-white text-shadow-lg">
                            AXOLOTL._.ED
                        </h1>

                        <h2 className="text-lg md:text-2xl font-light text-gray-100 mb-8 md:mb-12 tracking-[0.25em] uppercase border-b border-white/30 pb-6 inline-block">
                            Arte, Electrónica y Diseño
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="https://www.instagram.com/axolotl._.ed/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full sm:w-auto px-8 py-3 bg-white/10 overflow-hidden rounded-xl border border-white/30 text-white hover:bg-white hover:text-brand-deep transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="relative flex items-center justify-center gap-2 font-bold tracking-wider">
                                    <Instagram className="w-5 h-5" />
                                    <span>INSTAGRAM</span>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/5215532539481"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full sm:w-auto px-8 py-3 bg-brand-sky/20 overflow-hidden rounded-xl border border-brand-sky/40 text-white hover:bg-brand-sky hover:text-white transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="relative flex items-center justify-center gap-2 font-bold tracking-wider">
                                    <MessageCircle className="w-5 h-5" />
                                    <span>WHATSAPP</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
