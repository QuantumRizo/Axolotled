import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <div className="relative h-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-brand-deep to-brand-orchid pt-20">
            {/* Background Decorative Elements */}
            {/* Existing soft blobs - kept for depth */}
            <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[100%] bg-white/5 transform -skew-x-12 translate-x-[50%] z-0 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[80%] bg-brand-sky/20 transform -skew-x-12 translate-x-[-50%] z-0 blur-3xl rounded-full"></div>

            {/* Geometric Figures - Top Right */}
            <div className="absolute top-0 right-0 w-full md:w-[50%] h-[100%] z-0 pointer-events-none overflow-hidden block">
                <div className="relative w-full h-full transform scale-50 md:scale-100 origin-top-right">
                    {/* Large Purple Angle */}
                    <div className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] bg-brand-deep/20 transform rotate-45 translate-x-1/2 -translate-y-[20%]"></div>
                    {/* Blue Accent Strip */}
                    <div className="absolute top-[10%] right-[-10%] w-[600px] h-[100px] bg-brand-sky/30 transform -rotate-12 translate-x-[20%] shadow-lg backdrop-blur-sm"></div>
                    {/* Orchid Accent Triangle/Rect */}
                    <div className="absolute top-[30%] right-[-5%] w-[400px] h-[60px] bg-brand-orchid/40 transform -rotate-45 translate-x-[30%]"></div>
                    {/* Thin diagonal strip */}
                    <div className="absolute top-[50%] right-[-5%] w-[500px] h-[40px] bg-white/10 transform -rotate-12 translate-x-[20%]"></div>

                    {/* Soft purple rectangle */}
                    <div className="absolute top-[70%] right-[10%] w-[300px] h-[120px] bg-brand-orchid/20 transform rotate-[25deg]"></div>

                    {/* Blue triangle shape */}
                    <div className="absolute top-[40%] right-[25%] w-[200px] h-[200px] bg-brand-sky/20 transform rotate-45 clip-path-polygon"></div>

                </div>
            </div>

            {/* Geometric Figures - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-full md:w-[50%] h-[100%] z-0 pointer-events-none overflow-hidden block">
                <div className="relative w-full h-full transform scale-50 md:scale-100 origin-bottom-left">
                    {/* Large White/Blue Angle */}
                    <div className="absolute bottom-[-10%] left-[-20%] w-[800px] h-[800px] bg-white/10 transform rotate-[30deg] -translate-x-1/2 translate-y-[20%]"></div>
                    {/* Deep Accent Strip */}
                    <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[80px] bg-brand-deep/30 transform rotate-12 -translate-x-[20%] shadow-lg"></div>
                    {/* Soft white bar */}
                    <div className="absolute bottom-[35%] left-[0%] w-[450px] h-[60px] bg-white/10 transform rotate-[18deg]"></div>

                    {/* Deep purple square */}
                    <div className="absolute bottom-[10%] left-[30%] w-[180px] h-[180px] bg-brand-deep/20 transform rotate-[12deg]"></div>

                    {/* Sky-blue diagonal strip */}
                    <div className="absolute bottom-[50%] left-[10%] w-[300px] h-[50px] bg-brand-sky/25 transform -rotate-[28deg]"></div>

                </div>
            </div>

            {/* Glass Container */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="relative">

                    {/* Glass Card */}
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-center">
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 text-white text-shadow-lg">
                            AXOLOTL._.ED
                        </h1>

                        <h2 className="text-lg md:text-2xl font-light text-gray-100 mb-8 md:mb-12 tracking-[0.25em] uppercase border-b border-white/30 pb-6 inline-block">
                            Arte, Electrónica y Diseño
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
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

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/5215517273806"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full sm:w-auto px-6 py-3 bg-brand-sky/20 overflow-hidden rounded-xl border border-brand-sky/40 text-white hover:bg-brand-sky hover:text-white transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="relative flex items-center justify-center gap-2 font-bold tracking-wider">
                                        <MessageCircle className="w-5 h-5" />
                                        <span>5517273806</span>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/5215532539481"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full sm:w-auto px-6 py-3 bg-brand-sky/20 overflow-hidden rounded-xl border border-brand-sky/40 text-white hover:bg-brand-sky hover:text-white transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="relative flex items-center justify-center gap-2 font-bold tracking-wider">
                                        <MessageCircle className="w-5 h-5" />
                                        <span>5532539481</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
