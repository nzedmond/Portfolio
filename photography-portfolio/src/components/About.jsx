import { useState, useEffect, useRef } from 'react';
import about1 from '/assets/images/about1.jpg';
import about2 from '/assets/images/about2.jpg';
import about3 from '/assets/images/about3.jpg';

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const textRef = useRef(null);
    const sliderRef = useRef(null);

    const slides = [
        { src: about1, alt: 'About Photo 1' },
        { src: about2, alt: 'About Photo 2' },
        { src: about3, alt: 'About Photo 3' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(textRef.current);
        observer.observe(sliderRef.current);

        return () => observer.disconnect();
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text animate" ref={textRef}>
                    <h2>About Me</h2>
                    <p>
                        I'm a passionate photographer with a love for storytelling through visuals. My journey began with a simple camera and a curiosity to explore the world. What makes me unique is my ability to find beauty in the ordinary, transforming fleeting moments into lasting memories.
                    </p>
                    <p>
                        Photography, for me, is more than a profession—it's a way to connect with people and nature. Whether it's a candid portrait, a sweeping landscape, or the raw energy of sports, I strive to evoke emotion and authenticity in every shot.
                    </p>
                </div>
                <div className="about-slider animate" ref={sliderRef}>
                    <div className="slider-images">
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide.src}
                                alt={slide.alt}
                                className={index === currentSlide ? 'slide active' : 'slide'}
                            />
                        ))}
                    </div>
                    <div className="slider-controls">
                        <button className="prev" onClick={handlePrev}>
                            ←
                        </button>
                        <button className="next" onClick={handleNext}>
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;