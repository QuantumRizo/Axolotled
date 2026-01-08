import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Layers, Box, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface MaterialItem {
    name: string;
    icon: React.ElementType;
    characteristics: string;
    applications: string;
}

const materials: MaterialItem[] = [
    {
        name: "Gouache",
        icon: Palette,
        characteristics: "Opaco, mate y reactivable con agua.",
        applications: "Muy usado en diseño de personajes e ilustración editorial porque fotografía muy bien (no tiene brillo). Es ideal para corregir errores sobre acuarela o para pintar sobre papeles de colores oscuros."
    },
    {
        name: "Pintura Acrílica",
        icon: Layers,
        characteristics: "Secado rápido, impermeable al secar y muy flexible.",
        applications: "Se aplica en casi cualquier superficie: tela, madera, metal, plástico o cuero. Se usa para muralismo, personalización de calzado (sneakers), pintura de miniaturas y como base para técnicas de pouring (vertido)."
    },
    {
        name: "Laca Selladora",
        icon: Box,
        characteristics: "Cierra la porosidad y estabiliza superficies.",
        applications: "Fundamental para preparar piezas de madera o yeso antes de pintar. También se usa para fijar dibujos al carbón o pastel."
    },
    {
        name: "Barniz para Pintura Acrílica",
        icon: ShieldCheck,
        characteristics: "Protector final contra UV y polvo; disponible en mate, satinado o brillante.",
        applications: "Además de cuadros, se usa para proteger objetos decorativos y manualidades que estarán expuestas al roce, asegurando que el color no se decolore con el sol."
    }
];

const PinturasOpacas: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-textMuted hover:text-brand-deep transition-colors group mb-8">
                    <div className="p-2 bg-white rounded-full shadow-sm border border-gray-200 group-hover:border-brand-deep transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Volver al inicio</span>
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-textMain mb-6">
                        Pinturas Opacas
                    </h1>
                    <p className="text-xl text-textMuted max-w-3xl mx-auto">
                        Materiales de alta cobertura y acabados sólidos para ilustración y decoración.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {materials.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 flex flex-col group">
                            <div className="mb-6 bg-brand-orchid/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <item.icon className="w-8 h-8 text-brand-orchid" />
                            </div>

                            <h3 className="text-2xl font-bold text-textMain mb-4 group-hover:text-brand-orchid transition-colors">
                                {item.name}
                            </h3>

                            <div className="space-y-4 flex-grow">
                                <div>
                                    <h4 className="text-sm font-bold text-brand-deep uppercase tracking-wider mb-2">
                                        Características
                                    </h4>
                                    <p className="text-textMuted leading-relaxed">
                                        {item.characteristics}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-gray-50">
                                    <h4 className="text-sm font-bold text-brand-deep uppercase tracking-wider mb-2">
                                        Aplicaciones
                                    </h4>
                                    <p className="text-textMuted leading-relaxed">
                                        {item.applications}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PinturasOpacas;
