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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Resins Card */}
                    <Link to="/resinas" className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/resinas.jpg)' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-orchid/30 rounded-full blur-2xl group-hover:bg-brand-orchid/40 transition-all"></div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-8 flex flex-col items-center text-center flex-grow bg-gradient-to-br from-gray-50 to-white">
                            <div className="w-16 h-16 -mt-16 relative z-10 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                <Beaker className="w-8 h-8 text-brand-orchid" />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-brand-orchid transition-colors">Resinas (SLA)</h3>
                            <p className="text-textMuted mb-6 flex-grow">Alta precisión y detalle. Desde materiales rígidos hasta flexibles y de ingeniería.</p>
                            <span className="text-brand-deep font-semibold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">Ver Catálogo Técnico &rarr;</span>
                        </div>
                    </Link>

                    {/* Filaments Card */}
                    <Link to="/filamentos" className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/filamentos.jpeg)' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-sky/30 rounded-full blur-2xl group-hover:bg-brand-sky/40 transition-all"></div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-8 flex flex-col items-center text-center flex-grow bg-gradient-to-br from-gray-50 to-white">
                            <div className="w-16 h-16 -mt-16 relative z-10 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                <Layers className="w-8 h-8 text-brand-sky" />
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-brand-sky transition-colors">Filamentos (FDM)</h3>
                            <p className="text-textMuted mb-6 flex-grow">Ideales para prototipos rápidos y piezas funcionales. PLA, PETG, TPU y ABS.</p>
                            <span className="text-brand-deep font-semibold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">Ver Catálogo Técnico &rarr;</span>
                        </div>
                    </Link>

                    {/* Medios Acuosos */}
                    <Link to="/medios-acuosos" className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/materialesAcuarelas.jpg)' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-soft-blue/30 rounded-full blur-2xl group-hover:bg-brand-soft-blue/40 transition-all"></div>
                        </div>
                        <div className="relative p-8 flex flex-col items-center text-center flex-grow bg-gradient-to-br from-gray-50 to-white">
                            <div className="w-16 h-16 -mt-16 relative z-10 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                <svg className="w-8 h-8 text-brand-soft-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-brand-soft-blue transition-colors">Medios Acuosos</h3>
                            <p className="text-textMuted mb-6 flex-grow">Acuarelas, tintas y papeles especiales.</p>
                            <span className="text-brand-soft-blue font-semibold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">Ver Detalles &rarr;</span>
                        </div>
                    </Link>

                    {/* Pinturas Opacas */}
                    <Link to="/pinturas-opacas" className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/materialesAcrilicos.jpg)' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-orchid/30 rounded-full blur-2xl group-hover:bg-brand-orchid/40 transition-all"></div>
                        </div>
                        <div className="relative p-8 flex flex-col items-center text-center flex-grow bg-gradient-to-br from-gray-50 to-white">
                            <div className="w-16 h-16 -mt-16 relative z-10 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                <svg className="w-8 h-8 text-brand-orchid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-brand-orchid transition-colors">Pinturas Opacas</h3>
                            <p className="text-textMuted mb-6 flex-grow">Gouache, acrílicos y barnices protectores.</p>
                            <span className="text-brand-orchid font-semibold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">Ver Detalles &rarr;</span>
                        </div>
                    </Link>

                    {/* Bisutería */}
                    <Link to="/bisuteria" className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/materialesBisuteria.jpg)' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-sky/30 rounded-full blur-2xl group-hover:bg-brand-sky/40 transition-all"></div>
                        </div>
                        <div className="relative p-8 flex flex-col items-center text-center flex-grow bg-gradient-to-br from-gray-50 to-white">
                            <div className="w-16 h-16 -mt-16 relative z-10 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                <svg className="w-8 h-8 text-brand-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-brand-sky transition-colors">Bisutería</h3>
                            <p className="text-textMuted mb-6 flex-grow">Hilos, cuentas y dijes personalizados 3D.</p>
                            <span className="text-brand-sky font-semibold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">Ver Detalles &rarr;</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MaterialsPreviewSection;
