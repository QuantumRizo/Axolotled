import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Gem, CircleDot, Boxes } from 'lucide-react';
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
        name: "Hilo Chino",
        icon: CircleDot,
        characteristics: "Nylon sintético, resistente y térmico (se funde con calor).",
        applications: "Especial para macramé fino, pulseras de la amistad y joyería tejida. Su capacidad de sellar nudos quemando las puntas lo hace ideal para piezas que deben durar mucho tiempo sin desarmarse."
    },
    {
        name: "Cuentas de Distintos Materiales",
        icon: Boxes,
        characteristics: "Variedad de texturas (vidrio, metal, piedra, madera).",
        applications: "Creación de collares, rosarios, bordados en relieve sobre tela y decoraciones para el hogar como cortinas de cuentas o adornos colgantes."
    },
    {
        name: "Dijes Personalizados (Resina 3D)",
        icon: Gem,
        characteristics: "Detalle extremo y superficie lisa.",
        applications: "Perfectos para joyería de autor con diseños geométricos complejos, prototipos de medallas, piezas personalizadas o miniaturas detalladas. Se pintan con acrílico o se someten a un proceso de Electroplating."
    }
];

const Bisuteria: React.FC = () => {
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
                        Bisutería y Accesorios
                    </h1>
                    <p className="text-xl text-textMuted max-w-3xl mx-auto">
                        Materiales delicados y versátiles para la creación de joyería única y accesorios personalizados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {materials.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 flex flex-col group">
                            <div className="mb-6 bg-brand-sky/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <item.icon className="w-8 h-8 text-brand-sky" />
                            </div>

                            <h3 className="text-2xl font-bold text-textMain mb-4 group-hover:text-brand-sky transition-colors">
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

export default Bisuteria;
