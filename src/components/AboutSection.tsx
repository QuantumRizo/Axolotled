import React from 'react';


const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-sky to-brand-orchid rounded-2xl rotate-6 opacity-20 blur-lg mix-blend-multiply"></div>
                            <div className="relative h-full w-full bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                                <img src="/who.jpg" alt="Who we are" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">
                            Sobre <span className="text-brand-orchid">Nosotros</span>
                        </h2>
                        <p className="text-textMuted mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-textMuted leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
