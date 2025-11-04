import React from 'react';
import Home from './contents/Home';

function Panels() {
    const sections = [
        { id: 'home', title: 'Cris Charles Garcia', content: <Home /> },
        { id: 'projects', title: 'Work Samples / Projects' },
        { id: 'skills', title: 'Skills and Expertise' },
        { id: 'awards', title: 'Awards and Certifications' },
        { id: 'contact', title: 'Contact Details' },
    ];

    return (
        <main className="panel min-h-screen flex flex-col space-y-12 py-8">
            {sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="container mx-auto px-4 md:px-6 lg:px-24 bg-[#112240]/30 backdrop-blur-md rounded-md md:rounded-xl p-8 flex flex-col items-center justify-center"
                    style={{ minHeight: '60vh' }}
                >
                    {/* Section Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#FFFFFF] font-bold text-left w-full">
                        {section.title}
                    </h2>

                    {/* Section Content */}
                    {section.content && <div className="mt-4 w-full text-center">{section.content}</div>}
                </section>
            ))}
        </main>
    );
}

export default Panels;
