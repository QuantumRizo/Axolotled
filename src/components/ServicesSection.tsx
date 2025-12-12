import React from 'react';
import { BookOpen, Gem, Scissors, Smile, Zap, Cuboid, Layers, PenTool, Brush, Scan, FlaskConical, Instagram } from 'lucide-react';
import { axolotlData } from '../data/axolotlData';

const ServicesSection: React.FC = () => {

    // Featured Art Services (The "Special" ones)
    const featuredArtServices = [
        {
            name: 'Ilustración/Narrativa gráfica',
            icon: BookOpen,
            color: 'text-brand-deep',
            href: 'https://www.instagram.com/alyser.art'
        },
        {
            name: 'Crochet',
            icon: Smile,
            color: 'text-brand-soft-blue',
            href: 'https://www.instagram.com/ink_crochet_ink'
        }
    ];

    // Other Services (Moved to Technical/3D Section)
    const otherServices = [
        { name: 'Joyería', icon: Gem, color: 'text-brand-sky' },
        { name: 'Macramé', icon: Scissors, color: 'text-brand-orchid' },
        { name: 'Corte Láser', icon: Zap, color: 'text-brand-deep' },
        { name: 'Escaneo 3D', icon: Scan, color: 'text-brand-sky' },
        { name: 'Electroplating', icon: FlaskConical, color: 'text-brand-orchid' },
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

                    {/* Main 3D Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {axolotlData.services3D.map((service, index) => {
                            const Icon = getIconFor3D(index);

                            // Image Mapping
                            let bgImage = '';
                            if (service.title.includes('Resina')) bgImage = '/impresionresina.webp';
                            else if (service.title.includes('Filamento')) bgImage = '/impresionfilamento.webp';
                            else if (service.title.includes('Diseño')) bgImage = '/diseñoymodelado.webp';
                            else if (service.title.includes('Pintura')) bgImage = '/pintura.webp';

                            return (
                                <div key={index} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    {/* Image Section */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${bgImage})` }}></div>
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                        {/* Floating decorative blob - Color matches icon context if possible, default to sky/orchid */}
                                        <div className={`absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 rounded-full blur-2xl transition-all opacity-40 ${index % 2 === 0 ? 'bg-brand-orchid' : 'bg-brand-sky'}`}></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="relative p-8 flex flex-col items-center text-center flex-grow bg-white">
                                        <div className={`w-16 h-16 -mt-16 relative z-10 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100`}>
                                            <Icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-brand-orchid' : 'text-brand-sky'}`} />
                                        </div>

                                        <h4 className="text-xl font-bold text-textMain mb-3 group-hover:text-brand-deep transition-colors">
                                            {service.title}
                                        </h4>
                                        <p className="text-textMuted leading-relaxed flex-grow">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Additional Technical/Other Services Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {otherServices.map((service) => (
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

                {/* Artistic Services Section - Featured Grid */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8">
                        Arte y Creación Manual
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {featuredArtServices.map((service, index) => {
                            // Image logic
                            let bgImage = '';
                            let igHandle = '';
                            if (service.name.includes('Ilustración')) {
                                bgImage = '/alyser.jpeg';
                                igHandle = '@alyser.art';
                            } else if (service.name.includes('Crochet')) {
                                bgImage = '/crochet.jpeg';
                                igHandle = '@ink_crochet_ink';
                            }

                            return (
                                <div key={service.name} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                    {/* Image Section */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${bgImage})` }}></div>
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                        {/* Floating decorative blob */}
                                        <div className={`absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 rounded-full blur-2xl transition-all opacity-40 ${service.name.includes('Ilustración') ? 'bg-brand-deep' : 'bg-brand-soft-blue'}`}></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="relative p-8 flex flex-col items-center text-center flex-grow bg-white">
                                        <div className={`w-16 h-16 -mt-16 relative z-10 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100`}>
                                            <service.icon className={`w-8 h-8 ${service.color}`} />
                                        </div>

                                        <h3 className="text-xl font-bold text-textMain mb-4 group-hover:text-brand-deep transition-colors">
                                            {service.name}
                                        </h3>

                                        {/* Instagram Button */}
                                        {service.href && (
                                            <a
                                                href={service.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn relative w-full sm:w-auto px-6 py-2.5 mt-2 bg-white border border-gray-200 overflow-hidden rounded-xl text-gray-700 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                                            >
                                                {/* Gradient Background on Hover */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-brand-deep to-brand-orchid opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                                                <div className="relative flex items-center justify-center gap-2 font-bold tracking-wider text-sm">
                                                    <Instagram className="w-4 h-4" />
                                                    <span>{igHandle}</span>
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
