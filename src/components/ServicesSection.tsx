import React from 'react';
import { Palette, BookOpen, Gem, Scissors, Smile, Zap, Cuboid, Layers, PenTool, Brush } from 'lucide-react';
import { axolotlData } from '../data/axolotlData';

const ServicesSection: React.FC = () => {
    const artisticServices = [
        { name: 'Acuarelas', icon: Palette, color: 'text-brand-soft-blue' },
        { name: 'Ilustración Editorial', icon: BookOpen, color: 'text-brand-deep' },
        { name: 'Joyería', icon: Gem, color: 'text-brand-sky' },
        { name: 'Macramé', icon: Scissors, color: 'text-brand-orchid' },
        { name: 'Amigurumis', icon: Smile, color: 'text-brand-soft-blue' },
        { name: 'Corte Láser', icon: Zap, color: 'text-brand-deep' },
    ];

    const getIconFor3D = (index: number) => {
        const icons = [Cuboid, Layers, PenTool, Brush];
        return icons[index % icons.length];
    };

    return (
        <section className="py-20 bg-gradient-to-r from-brand-deep to-brand-orchid relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Nuestros <span className="text-brand-sky">Servicios</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-200">
                        Fusionamos la precisión de la tecnología 3D con la calidez del arte manual.
                    </p>
                </div>

                {/* 3D Services Section - Featured */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-8">
                        Tecnología e Impresión 3D
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {axolotlData.services3D.map((service, index) => {
                            const Icon = getIconFor3D(index);
                            return (
                                <div key={index} className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-brand-deep/5 text-brand-deep group-hover:bg-brand-deep group-hover:text-white transition-colors duration-300">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-textMain mb-3 group-hover:text-brand-deep transition-colors">
                                                {service.title}
                                            </h4>
                                            <p className="text-textMuted leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Artistic Services Section - Grid */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8">
                        Arte y Creación Manual
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {artisticServices.map((service) => (
                            <div key={service.name} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20 hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-300 flex flex-col items-center text-center group h-full justify-center">
                                <div className={`p-3 rounded-full bg-gray-50 mb-3 group-hover:bg-brand-soft-blue/10 transition-colors duration-300`}>
                                    <service.icon className={`w-6 h-6 ${service.color}`} />
                                </div>
                                <h3 className="font-medium text-textMain text-sm md:text-base">
                                    {service.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
