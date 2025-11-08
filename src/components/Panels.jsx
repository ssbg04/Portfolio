import React from 'react';
import Home from './contents/Home';
import Projects from './contents/Projects'
import About from './contents/About'
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import '../styles/fonts.css'


function Panels() {
    const sections = [
        { id: 'home', content: <Home /> },
        { id: 'projects', content: <Projects /> },
        { id: 'about', content: <About /> },
        { id: 'skills', content: <Skills /> },
        { id: 'contact', content: <Contact /> },
    ];

    return (
        <main className="min-h-screen flex flex-col space-y-12 py-8 mt-12 mx-6">
            {sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="container panels-content mx-auto px-4 md:px-6 lg:px-24 max-w-7xl
                     bg-white/1.5 backdrop-blur-xl border-t border-white/40 shadow-white/20 shadow-inner
                     rounded-4xl p-8 flex flex-col items-center justify-center"
                    style={{ minHeight: '60vh' }}
                >
                    {/* Section Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-left w-full">
                        {section.title}
                    </h2>

                    {/* Section Content */}
                    {section.content && (
                        <div className="mt-4 w-full text-center">
                            {section.content}
                        </div>
                    )}
                </section>
            ))}
        </main>
    );
}

export default Panels;
