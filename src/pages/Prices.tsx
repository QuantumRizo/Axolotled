import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { axolotlData } from '../data/axolotlData';
import { Coins, Brush } from 'lucide-react';

const Prices: React.FC = () => {

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
                            Nuestros <span className="text-brand-sky">Precios</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-textMuted">
                            Transparencia total en nuestros costos de impresión y servicios de post-procesado.
                        </p>
                    </div>

                    {/* Printing Prices */}
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-brand-sky/10 rounded-lg">
                                <Coins className="w-8 h-8 text-brand-sky" />
                            </div>
                            <h2 className="text-3xl font-bold text-textMain">Costos de Impresión</h2>
                        </div>

                        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-brand-deep text-white">
                                        <th className="p-5 text-sm uppercase tracking-wider font-semibold rounded-tl-2xl">Material</th>
                                        <th className="p-5 text-sm uppercase tracking-wider font-semibold text-center bg-brand-deep/90">
                                            Chica
                                            <span className="block text-xs opacity-70 normal-case font-normal mt-1">{axolotlData.pricing.sizes.small}</span>
                                        </th>
                                        <th className="p-5 text-sm uppercase tracking-wider font-semibold text-center bg-brand-deep/80">
                                            Mediana
                                            <span className="block text-xs opacity-70 normal-case font-normal mt-1">{axolotlData.pricing.sizes.medium}</span>
                                        </th>
                                        <th className="p-5 text-sm uppercase tracking-wider font-semibold text-center bg-brand-deep/70 rounded-tr-2xl">
                                            Grande
                                            <span className="block text-xs opacity-70 normal-case font-normal mt-1">{axolotlData.pricing.sizes.large}</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {axolotlData.pricing.printing.map((price, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-5 font-medium text-textMain border-r border-gray-100">
                                                {price.material}
                                            </td>
                                            <td className="p-5 text-center text-textMuted font-mono">
                                                ${price.small}
                                            </td>
                                            <td className="p-5 text-center text-textMuted font-mono bg-gray-50/30">
                                                ${price.medium}
                                            </td>
                                            <td className="p-5 text-center text-textMuted font-mono">
                                                ${price.large}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Painting Services */}
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-brand-orchid/10 rounded-lg">
                                <Brush className="w-8 h-8 text-brand-orchid" />
                            </div>
                            <h2 className="text-3xl font-bold text-textMain">Servicios de Pintura y Acabado</h2>
                        </div>

                        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="p-5 font-bold text-textMain text-sm uppercase tracking-wider">Tipo de Servicio</th>
                                        <th className="p-5 font-bold text-textMain text-sm uppercase tracking-wider text-center">Chica</th>
                                        <th className="p-5 font-bold text-textMain text-sm uppercase tracking-wider text-center">Mediana</th>
                                        <th className="p-5 font-bold text-textMain text-sm uppercase tracking-wider text-center">Grande</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {axolotlData.pricing.painting.map((paint, index) => (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-5 font-medium text-textMain">
                                                {paint.type}
                                            </td>
                                            <td className="p-5 text-center text-textMuted font-mono">
                                                ${paint.small}
                                            </td>
                                            <td className="p-5 text-center text-textMuted font-mono">
                                                ${paint.medium}
                                            </td>
                                            <td className="p-5 text-center text-textMuted font-mono">
                                                ${paint.large}
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

export default Prices;
