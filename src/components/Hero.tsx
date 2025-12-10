import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <div className="relative h-full flex items-center justify-center overflow-hidden bg-white">
            {/* Top Right Shapes */}
            <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[100%] bg-brand-deep/30 transform -skew-x-12 translate-x-[50%] z-0"></div>
            <div className="absolute top-[15%] right-[-10%] w-[70%] h-[30%] bg-brand-soft-blue/30 transform -skew-x-12 translate-x-[50%] z-0 opacity-90"></div>
            <div className="absolute top-[35%] right-[-10%] w-[70%] h-[20%] bg-brand-sky/30 transform -skew-x-12 translate-x-[50%] z-0 opacity-80"></div>

            {/* Bottom Left Shapes */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[80%] bg-brand-orchid/30 transform -skew-x-12 translate-x-[-50%] z-0"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[60%] h-[20%] bg-brand-deep/30 transform -skew-x-12 translate-x-[-50%] z-0 opacity-80"></div>
            <div className="absolute bottom-[35%] left-[-10%] w-[60%] h-[15%] bg-brand-soft-blue/30 transform -skew-x-12 translate-x-[-50%] z-0 opacity-60"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-textMain">
                    AXOLOTL._.ED
                </h1>

                <h2 className="text-xl md:text-2xl font-light text-textMuted mb-12 tracking-[0.2em] uppercase border-b border-gray-200 pb-4 inline-block">
                    Arte, Electrónica y Diseño
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="https://www.instagram.com/axolotl._.ed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-none border border-brand-deep text-brand-deep hover:text-white transition-colors duration-300"
                    >
                        <div className="absolute inset-0 w-0 bg-brand-deep transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <div className="relative flex items-center gap-2 font-bold tracking-wider">
                            <Instagram className="w-5 h-5" />
                        </div>
                    </a>

                    <a
                        href="https://wa.me/5215532539481"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-none border border-brand-deep text-brand-deep hover:text-white transition-colors duration-300"
                    >
                        <div className="absolute inset-0 w-0 bg-brand-deep transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <div className="relative flex items-center gap-2 font-bold tracking-wider">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
