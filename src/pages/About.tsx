import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navigation />

            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-textMain mb-8 text-center">
                        Más sobre <span className="text-brand-orchid">Axolotl._.ed</span>
                    </h1>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                        <p className="text-textMuted leading-relaxed mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-textMuted leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
