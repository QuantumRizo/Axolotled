import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Droplets, Brush, Feather, GripHorizontal, StickyNote } from 'lucide-react';
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
        name: "Acuarela Líquida",
        icon: Droplets,
        characteristics: "Pigmento concentrado muy vibrante, transparente y de secado rápido.",
        applications: "Ideal para ilustraciones de moda y diseño gráfico manual por su intensidad. Se usa mucho en aerografía, técnicas de lettering con pincel de agua y para teñir papeles o maderas claras de forma homogénea."
    },
    {
        name: "Tinta China",
        icon: Brush,
        characteristics: "Negro profundo, opaco y generalmente resistente al agua una vez seco.",
        applications: "Además del dibujo y entintado de cómics, es perfecta para técnicas de aguada (sumi-e), caligrafía con plumilla y para crear contrastes altos en técnicas mixtas. También se usa para estarcido y siluetas."
    },
    {
        name: "Tinta India",
        icon: Feather,
        characteristics: "Permanente, con base de laca que le da un brillo sutil y resistencia total al agua.",
        applications: "Muy utilizada en dibujo arquitectónico y técnico por su precisión. Al ser indeleble, es excelente para dibujos que luego recibirán capas de acuarela encima sin ensuciar el color."
    },
    {
        name: "Acuarela en Pastilla (Godetes)",
        icon: GripHorizontal,
        characteristics: "Portátil, reactivable con agua y permite un control preciso de las transparencias.",
        applications: "Se utiliza para crear texturas suaves, degradados atmosféricos y capas delicadas en retratos o paisajes."
    },
    {
        name: "Papel para Acuarela (300 g/m²)",
        icon: StickyNote,
        characteristics: "Tiene un grano medio (textura leve), gran capacidad de absorción y el gramaje de 300g evita que el papel se ondule en exceso con el agua.",
        applications: "Es el \"todo terreno\" para artistas. Soporta técnicas húmedas intensas, lavados repetidos y el uso de líquidos de enmascarar. También funciona increíblemente bien para dibujo con grafito o lápices de colores que requieran algo de textura."
    }
];

const MediosAcuosos: React.FC = () => {
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
                        Medios Acuosos y Tintas
                    </h1>
                    <p className="text-xl text-textMuted max-w-3xl mx-auto">
                        Selección de materiales fluidos para artistas que buscan vibrancia, transparencia y fluidez en sus obras.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {materials.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 flex flex-col group">
                            <div className="mb-6 bg-brand-soft-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <item.icon className="w-8 h-8 text-brand-soft-blue" />
                            </div>

                            <h3 className="text-2xl font-bold text-textMain mb-4 group-hover:text-brand-soft-blue transition-colors">
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

export default MediosAcuosos;
