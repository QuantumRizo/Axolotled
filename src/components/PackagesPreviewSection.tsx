import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { axolotlData } from '../data/axolotlData';

const PackagesPreviewSection: React.FC = () => {
    return (
        <section className="pt-10 pb-20 bg-brand-deep text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orchid/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-10">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                            <Package className="w-5 h-5 text-brand-sky" />
                            <span className="text-brand-sky font-medium">Cotización Transparente</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Paquetes y <span className="text-brand-orchid">Precios</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Conoce nuestros costos base por tamaño y material. Ofrecemos opciones flexibles desde prototipos rápidos hasta piezas industriales de alta gama.
                        </p>
                        <Link to="/precios" className="inline-flex items-center gap-2 bg-white text-brand-deep px-8 py-4 rounded-xl font-bold hover:bg-brand-orchid hover:text-white transition-all duration-300 shadow-lg hover:shadow-brand-orchid/50">
                            Ver Tabla de Precios
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-sky to-brand-orchid rounded-2xl rotate-6 blur-lg opacity-40"></div>
                            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-sm">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-200">Impresión Chica</span>
                                        <span className="font-bold text-white text-xl">Desde $300</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-200">Personalizado</span>
                                        <span className="font-bold text-white text-xl">A tu medida</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-200">Servicio de Pintura  </span>
                                        <span className="font-bold text-brand-sky text-xl">  Disponible</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Discounts Section Merged */}
                <div className="">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                                <Tag className="w-8 h-8 text-brand-sky" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">Descuentos por Volumen</h3>
                                <p className="text-gray-200 flex items-center gap-2">
                                    ¡Pregunta por nuestras promociones de temporada!
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            {axolotlData.discounts.map((discount, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between gap-4 flex-1 min-w-[280px]">
                                    <span className="font-bold text-3xl text-brand-sky text-shadow-sm">
                                        -{discount.percent}
                                    </span>
                                    <span className="text-sm font-medium text-gray-100 leading-tight">
                                        {discount.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackagesPreviewSection;
