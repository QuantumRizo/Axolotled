import React from 'react';
import { Image } from 'lucide-react';

const ProjectGrid: React.FC = () => {
    const projects = [1, 2, 3];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-12 text-center">
                    Proyectos <span className="text-brand-soft-blue">Recientes</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((item) => (
                        <div key={item} className="group relative aspect-video bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-sky/50 transition-all duration-300">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image className="w-12 h-12 text-gray-300 group-hover:text-brand-sky transition-colors duration-300" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h3 className="text-xl font-bold text-textMain mb-2">Proyecto {item}</h3>
                                    <p className="text-sm text-textMuted">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
