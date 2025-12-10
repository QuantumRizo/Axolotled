import React from 'react';
import { Printer, Palette, BookOpen, Gem, Scissors, Smile, Zap } from 'lucide-react';

const ServicesSection: React.FC = () => {
    const services = [
        { name: 'Impresión 3D', icon: Printer, color: 'text-brand-orchid' },
        { name: 'Acuarelas', icon: Palette, color: 'text-brand-soft-blue' },
        { name: 'Ilustración Editorial', icon: BookOpen, color: 'text-brand-deep' },
        { name: 'Joyería', icon: Gem, color: 'text-brand-sky' },
        { name: 'Macramé', icon: Scissors, color: 'text-brand-orchid' },
        { name: 'Amigurumis', icon: Smile, color: 'text-brand-soft-blue' },
        { name: 'Corte Láser', icon: Zap, color: 'text-brand-deep' },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-12 text-center">
                    Nuestros <span className="text-brand-orchid">Servicios</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div key={service.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-hover transition-all duration-300 flex flex-col items-center text-center group">
                            <div className={`p-4 rounded-full bg-gray-50 mb-4 group-hover:bg-brand-hover/10 transition-colors duration-300`}>
                                <service.icon className={`w-8 h-8 ${service.color}`} />
                            </div>
                            <h3 className="font-medium text-textMain group-hover:text-brand-deep transition-colors duration-300">
                                {service.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
