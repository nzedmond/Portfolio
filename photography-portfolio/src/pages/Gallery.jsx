import { useEffect, useRef } from 'react';

function Gallery() {
    const galleryRef = useRef(null);

    const galleryItems = [
        { src: '/assets/images/gallery1.jpg', alt: 'Portrait Photo', desc: 'Portrait: Capturing the essence of individuality' },
        { src: '/assets/images/gallery2.jpg', alt: 'Landscape Photo', desc: 'Landscape: Serenity in vast horizons' },
        { src: '/assets/images/gallery3.jpg', alt: 'Sports Photo', desc: 'Sports: The pulse of action' },
        { src: '/assets/images/gallery4.jpg', alt: 'Wildlife Photo', desc: 'Wildlife: Untamed beauty in motion' },
        { src: '/assets/images/gallery5.jpg', alt: 'Portrait Photo', desc: 'Portrait: Emotions frozen in time' },
        { src: '/assets/images/gallery6.jpg', alt: 'Landscape Photo', desc: 'Landscape: Nature\'s masterpiece' },
        { src: '/assets/images/gallery7.jpg', alt: 'Sports Photo', desc: 'Sports: Energy in every leap' },
        { src: '/assets/images/gallery8.jpg', alt: 'Wildlife Photo', desc: 'Wildlife: Grace in the wild' },
        { src: '/assets/images/gallery9.jpg', alt: 'Portrait Photo', desc: 'Portrait: Stories in every glance' },
        { src: '/assets/images/gallery10.jpg', alt: 'Landscape Photo', desc: 'Landscape: Tranquility in every view' },
        { src: '/assets/images/gallery11.jpg', alt: 'Sports Photo', desc: 'Sports: The thrill of victory' },
        { src: '/assets/images/gallery12.jpg', alt: 'Wildlife Photo', desc: 'Wildlife: The heart of nature' },
    ];

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

        const items = galleryRef.current.querySelectorAll('.gallery-item');
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="full-gallery" className="full-gallery">
            <h2>Full Gallery</h2>
            <div className="full-gallery-grid" ref={galleryRef}>
                {galleryItems.map((item, index) => (
                    <div key={index} className="gallery-item animate">
                        <img src={item.src} alt={item.alt} />
                        <div className="description">{item.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;