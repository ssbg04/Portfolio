import React, { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can integrate with a service like Formspree, EmailJS, or your backend
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact-content py-12 px-6 lg:px-20 text-[#CCD6F6] font-mono min-h-screen">

            {/* Main Heading */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#64FFDA]">
                    <span className="text-[#8892B0] font-medium text-xl mr-3">03.</span> Get In Touch
                </h1>
                <p className="text-[#8892B0] text-lg mt-4 max-w-2xl">
                    Have a project in mind or want to collaborate? I'd love to hear from you.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                {/* Contact Information */}
                <div className="w-full lg:w-2/5 space-y-8">
                    <div className="bg-[#112240] p-6 rounded-lg border border-[#64FFDA]/20 shadow-inner shadow-white/10">
                        <h3 className="text-2xl font-semibold text-[#64FFDA] mb-6 flex items-center">
                            <span className="mr-3 text-[#64FFDA]">💬</span>
                            Let's Connect
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-center group hover:text-[#64FFDA] transition-colors duration-200">
                                <span className="mr-4 text-[#64FFDA] text-xl">📧</span>
                                <div>
                                    <p className="text-sm text-[#8892B0]">Email</p>
                                    <a
                                        href="mailto:crischarlesgarcia345@gmail.com"
                                        className="text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors duration-200"
                                    >
                                        crischarlesgarcia345@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center group hover:text-[#64FFDA] transition-colors duration-200">
                                <span className="mr-4 text-[#64FFDA] text-xl">💼</span>
                                <div>
                                    <p className="text-sm text-[#8892B0]">LinkedIn</p>
                                    <a
                                        href="https://www.linkedin.com/in/cris-charles-garcia-187415303/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors duration-200"
                                    >
                                        /in/crischarles
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center group hover:text-[#64FFDA] transition-colors duration-200">
                                <span className="mr-4 text-[#64FFDA] text-xl">🐙</span>
                                <div>
                                    <p className="text-sm text-[#8892B0]">GitHub</p>
                                    <a
                                        href="https://github.com/ssbg04"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors duration-200"
                                    >
                                        @crischarles
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center group hover:text-[#64FFDA] transition-colors duration-200">
                                <span className="mr-4 text-[#64FFDA] text-xl">📍</span>
                                <div>
                                    <p className="text-sm text-[#8892B0]">Location</p>
                                    <p className="text-[#CCD6F6]">Remote / Available Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats
                    <div className="bg-[#112240] p-6 rounded-lg border border-[#64FFDA]/20 shadow-inner shadow-white/10">
                        <h3 className="text-2xl font-semibold text-[#64FFDA] mb-6 flex items-center">
                            <span className="mr-3 text-[#64FFDA]">⚡</span>
                            Quick Response
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="p-4 rounded-lg bg-[#0A192F] border border-[#64FFDA]/10">
                                <p className="text-2xl font-bold text-[#64FFDA]">24h</p>
                                <p className="text-sm text-[#8892B0]">Avg. Response</p>
                            </div>
                            <div className="p-4 rounded-lg bg-[#0A192F] border border-[#64FFDA]/10">
                                <p className="text-2xl font-bold text-[#64FFDA]">100%</p>
                                <p className="text-sm text-[#8892B0]">Projects Reply</p>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-3/5">
                    <div className="bg-[#112240] p-8 rounded-lg border border-[#64FFDA]/20 shadow-inner shadow-white/10">
                        <h3 className="text-2xl font-semibold text-[#64FFDA] mb-6 flex items-center">
                            <span className="mr-3 text-[#64FFDA]">✉️</span>
                            Send Me a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#64FFDA] mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#0A192F] border border-[#64FFDA]/20 rounded-lg
                                                 text-[#CCD6F6] placeholder-[#8892B0] focus:outline-none focus:border-[#64FFDA]
                                                 focus:ring-1 focus:ring-[#64FFDA] transition-colors duration-300"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#64FFDA] mb-2">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#0A192F] border border-[#64FFDA]/20 rounded-lg
                                                 text-[#CCD6F6] placeholder-[#8892B0] focus:outline-none focus:border-[#64FFDA]
                                                 focus:ring-1 focus:ring-[#64FFDA] transition-colors duration-300"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-[#64FFDA] mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0A192F] border border-[#64FFDA]/20 rounded-lg
                                             text-[#CCD6F6] placeholder-[#8892B0] focus:outline-none focus:border-[#64FFDA]
                                             focus:ring-1 focus:ring-[#64FFDA] transition-colors duration-300"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#64FFDA] mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-[#0A192F] border border-[#64FFDA]/20 rounded-lg
                                             text-[#CCD6F6] placeholder-[#8892B0] focus:outline-none focus:border-[#64FFDA]
                                             focus:ring-1 focus:ring-[#64FFDA] transition-colors duration-300 resize-vertical"
                                    placeholder="Tell me about your project or inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#64FFDA]/20 text-[#64FFDA] px-8 py-4 rounded-lg
                                        shadow-inner shadow-white/20 border border-white/20 font-semibold
                                        hover:bg-[#64FFDA]/40 hover:translate-y-[-2px] transition-all duration-300
                                        focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:ring-opacity-50"
                            >
                                Send Message
                                <span className="ml-2">🚀</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-12">
                <p className="text-[#8892B0] text-sm">
                    "Great things in business are never done by one person. They're done by a team of people." - Steve Jobs
                </p>
                <p className="text-[#64FFDA] text-sm mt-2">
                    Let's build something amazing together!
                </p>
            </div>
        </section>
    )
}