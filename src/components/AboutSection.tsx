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
                            ¿Quiénes <span className="text-brand-orchid">Somos?</span>
                        </h2>
                        <p className="text-textMuted mb-6 leading-relaxed">
                            En <span className="font-bold text-brand-deep">Axolotl._.ed</span>, somos un laboratorio creativo donde la precisión de la ingeniería se encuentra con la libertad del arte. Nacimos de la pasión por materializar ideas, entendiendo que cada proyecto es único y merece la herramienta perfecta para cobrar vida.
                        </p>
                        <p className="text-textMuted mb-6 leading-relaxed">
                            Fusionamos tecnologías avanzadas como la <span className="font-semibold text-brand-deep">impresión 3D (SLA y FDM)</span> con técnicas artesanales tradicionales como la pintura a mano y el modelado. Ya sea que busques un prototipo funcional de alta fidelidad o una pieza artística personalizada, nuestro objetivo es transformar tu visión en una realidad tangible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
