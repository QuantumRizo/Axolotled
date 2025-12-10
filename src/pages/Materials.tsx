import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { axolotlData } from '../data/axolotlData';
import { Beaker, Layers, CheckCircle2 } from 'lucide-react';

const Materials: React.FC = () => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navigation />

            <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-textMain mb-6">
                            Catálogo de <span className="text-brand-orchid">Materiales</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-textMuted">
                            Explora nuestras especificaciones técnicas para elegir el material perfecto para tu proyecto.
                        </p>
                    </div>

                    {/* Resinas Section */}
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-brand-orchid/10 rounded-lg">
                                <Beaker className="w-8 h-8 text-brand-orchid" />
                            </div>
                            <h2 className="text-3xl font-bold text-textMain">Resinas (SLA)</h2>
                        </div>

                        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
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
                                    {axolotlData.resins.map((resina, index) => (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-5">
                                                <span className="font-bold text-brand-deep">{resina.name}</span>
                                                {resina.extra && (
                                                    <span className="block text-xs text-brand-orchid mt-1 font-medium bg-brand-orchid/10 inline-block px-2 py-0.5 rounded-full w-fit">
                                                        {resina.extra}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-5 text-textMuted font-medium">
                                                {resina.shoreD ? `D ${resina.shoreD}` : `A ${resina.shoreA}`}
                                            </td>
                                            <td className="p-5 text-textMuted">
                                                {resina.elongation}
                                            </td>
                                            <td className="p-5 text-textMuted leading-relaxed text-sm">
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-brand-success mt-1 flex-shrink-0" />
                                                    {resina.usage}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Filaments Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-brand-sky/10 rounded-lg">
                                <Layers className="w-8 h-8 text-brand-sky" />
                            </div>
                            <h2 className="text-3xl font-bold text-textMain">Filamentos (FDM)</h2>
                        </div>

                        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
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
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Materials;
