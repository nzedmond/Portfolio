import { useEffect, useRef } from 'react';
import photo1 from '/assets/images/photo1.jpg';
import photo2 from '/assets/images/photo2.jpg';
import photo3 from '/assets/images/photo3.jpg';
import photo4 from '/assets/images/photo4.jpg';

function Featured() {
    const galleryRef = useRef(null);

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

        const cards = galleryRef.current.querySelectorAll('.gallery-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="featured" className="gallery">
            <h2>Featured Work</h2>
            <div className="gallery-grid" ref={galleryRef}>
                <div className="gallery-card animate">
                    <img src={photo1} alt="Portrait Photo" />
                    <p className="caption">Portrait: Timeless elegance in every frame</p>
                </div>
                <div className="gallery-card animate">
                    <img src={photo2} alt="Landscape Photo" />
                    <p className="caption">Landscape: Nature's grandeur unveiled</p>
                </div>
                <div className="gallery-card animate">
                    <img src={photo3} alt="Sports Photo" />
                    <p className="caption">Sports: Freezing the thrill of the moment</p>
                </div>
                <div className="gallery-card animate">
                    <img src={photo4} alt="Wildlife Photo" />
                    <p className="caption">Wildlife: Capturing the soul of the wild</p>
                </div>
            </div>
        </section>
    );
}

export default Featured;