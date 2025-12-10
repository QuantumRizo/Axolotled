import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { axolotlData } from '../data/axolotlData';
import { Layers, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Filamentos: React.FC = () => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navigation />

            <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-textMuted hover:text-brand-deep transition-colors group">
                            <div className="p-2 bg-white rounded-full shadow-sm border border-gray-200 group-hover:border-brand-deep transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </div>
                            <span className="font-medium">Volver al inicio</span>
                        </Link>
                    </div>

                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-textMain mb-6">
                            Catálogo de <span className="text-brand-sky">Filamentos</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-textMuted">
                            Especificaciones técnicas de nuestros materiales FDM (Modelado por Deposición Fundida).
                        </p>
                    </div>

                    {/* Filaments Section */}
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                            <div className="p-3 bg-brand-sky/10 rounded-lg">
                                <Layers className="w-8 h-8 text-brand-sky" />
                            </div>
                            <h2 className="text-3xl font-bold text-textMain">Filamentos (FDM)</h2>
                        </div>

                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="p-5 font-bold text-textMain text-sm uppercase tracking-wider">Material</th>
                                        <th className="p-5 font-bold text-textMain text-sm uppercase tracking-wider">Dureza (Shore)</th>
                                        <th className="p-5 font-bold text-textMain text-sm uppercase tracking-wider">Elongación</th>
                                        <th className="p-5 font-bold text-textMain text-sm uppercase tracking-wider md:w-1/2">Uso Recomendado</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {axolotlData.filaments.map((filament, index) => (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-5 font-bold text-brand-deep">{filament.name}</td>
                                            <td className="p-5 text-textMuted font-medium">
                                                {filament.shoreD ? `D ${filament.shoreD}` : `A ${filament.shoreA}`}
                                            </td>
                                            <td className="p-5 text-textMuted">
                                                {filament.elongation}
                                            </td>
                                            <td className="p-5 text-textMuted leading-relaxed text-sm">
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-brand-success mt-1 flex-shrink-0" />
                                                    {filament.usage}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden grid grid-cols-1 gap-6">
                            {axolotlData.filaments.map((filament, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-lg text-brand-deep mb-4">{filament.name}</h3>

                                    <div className="grid grid-cols-2 gap-4 mb-4 bg-gray-50 p-4 rounded-lg">
                                        <div>
                                            <p className="text-xs text-textMuted uppercase font-bold mb-1">Dureza</p>
                                            <p className="text-sm font-medium text-textMain">{filament.shoreD ? `D ${filament.shoreD}` : `A ${filament.shoreA}`}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-textMuted uppercase font-bold mb-1">Elongación</p>
                                            <p className="text-sm font-medium text-textMain">{filament.elongation}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs text-textMuted uppercase font-bold mb-2">Uso Recomendado</p>
                                        <div className="flex items-start gap-2 text-sm text-textMuted leading-relaxed">
                                            <CheckCircle2 className="w-4 h-4 text-brand-success mt-1 flex-shrink-0" />
                                            {filament.usage}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Filamentos;
