import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Layers } from 'lucide-react';

const MaterialsPreviewSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
                        Nuestros <span className="text-brand-deep">Materiales</span>
                    </h2>
                    <p className="text-textMuted max-w-2xl mx-auto">
                        Seleccionamos los mejores materiales para garantizar resistencia, flexibilidad y acabados impecables en cada pieza.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Resins Card */}
                    <Link to="/materiales" className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/resinas.jpg)' }}></div>
                            {/* Subtle Gradient Overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                            {/* Floating decorative blob */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-orchid/30 rounded-full blur-2xl group-hover:bg-brand-orchid/40 transition-all"></div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-8 flex flex-col items-center text-center flex-grow bg-gradient-to-br from-gray-50 to-white">
                            <div className="w-16 h-16 -mt-16 relative z-10 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                <Beaker className="w-8 h-8 text-brand-orchid" />
                            </div>

                            <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-brand-orchid transition-colors">
                                Resinas (SLA)
                            </h3>
                            <p className="text-textMuted mb-6 flex-grow">
                                Alta precisión y detalle. Desde materiales rígidos hasta flexibles y de ingeniería.
                            </p>
                            <span className="text-brand-deep font-semibold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">
                                Ver Catálogo Técnico &rarr;
                            </span>
                        </div>
                    </Link>

                    {/* Filaments Card */}
                    <Link to="/materiales" className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/filamentos.jpeg)' }}></div>
                            {/* Subtle Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                            {/* Floating decorative blob */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-sky/30 rounded-full blur-2xl group-hover:bg-brand-sky/40 transition-all"></div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-8 flex flex-col items-center text-center flex-grow bg-gradient-to-br from-gray-50 to-white">
                            <div className="w-16 h-16 -mt-16 relative z-10 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                <Layers className="w-8 h-8 text-brand-sky" />
                            </div>

                            <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-brand-sky transition-colors">
                                Filamentos (FDM)
                            </h3>
                            <p className="text-textMuted mb-6 flex-grow">
                                Ideales para prototipos rápidos y piezas funcionales. PLA, PETG, TPU y ABS.
                            </p>
                            <span className="text-brand-deep font-semibold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">
                                Ver Catálogo Técnico &rarr;
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MaterialsPreviewSection;
