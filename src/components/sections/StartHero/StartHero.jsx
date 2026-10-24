import React, { useState, useEffect } from 'react';
import './StartHero.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { assets } from '../../../constants/assets';
import { heroContent, importantDates, conferenceInfo } from '../../../data/data';
import { CONFIG } from '../../../constants/config';
import { useRegistration } from '../../../context';

const HERO_SLIDES = [
    {
        image: assets.confDelegatesGroup,
        alt: 'Conference Delegates, Faculty & Leadership at Medi-Caps University Campus',
        tag: 'Campus & Faculty Gathering',
        title: 'Distinguished Delegates & Academic Leadership',
    },
    {
        image: assets.confProceedingsRelease,
        alt: 'Official Release of Conference Proceedings by Esteemed Dignitaries',
        tag: 'Proceedings Launch',
        title: 'Official Conference Proceedings Release Ceremony',
    },
    {
        image: assets.confKeynoteFelicitation,
        alt: 'Keynote Speaker Felicitation & Citation Presentation Ceremony',
        tag: 'Dignitaries & Honors',
        title: 'Keynote Speaker Felicitation & Citation Ceremony',
    },
    {
        image: assets.confBookUnveiling,
        alt: 'Unveiling Research Proceedings on Stage at Medi-Caps',
        tag: 'Inaugural Stage',
        title: 'Peer-Reviewed Conference Proceedings Unveiling',
    },
];

const StartHero = () => {
    const { setIsBrochureModalOpen } = useRegistration();
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handlePrevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    };

    const handleNextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    };

    const handleBrochureClick = (e) => {
        if (!CONFIG.BROCHURE_DOWNLOAD_ENABLED) {
            e.preventDefault();
            setIsBrochureModalOpen(true);
        }
    };

    return (
        <div className="hero-root">

            {/* ── Announcement Ticker ── */}
            <div className="hero-ticker">
                <span className="hero-ticker-label">
                    <i className="fa-solid fa-bullhorn" /> &nbsp;UPDATES
                </span>
                <div className="hero-ticker-track-wrap">
                    <ul className="hero-ticker-list hero-ticker-track">
                        {importantDates.map((item) => (
                            <li key={item.id} className="hero-ticker-item">
                                <i className={`fa-solid ${item.icon} hero-ticker-icon`} />
                                {item.label}&nbsp;—&nbsp;
                                <span className="hero-ticker-date">{item.date}</span>
                            </li>
                        ))}
                        {/* Duplicate set — required for seamless infinite scroll */}
                        {importantDates.map((item) => (
                            <li key={`dup-${item.id}`} className="hero-ticker-item" aria-hidden="true">
                                <i className={`fa-solid ${item.icon} hero-ticker-icon`} />
                                {item.label}&nbsp;—&nbsp;
                                <span className="hero-ticker-date">{item.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Hero Split Panel ── */}
            <div className="hero-split">

                {/* Left — Text Content (light) */}
                <div className="hero-left">

                    {/* Top labels */}
                    <div className="hero-left-labels">
                        <span className="hero-org-badge">
                            <i className="fa-solid fa-building-columns" />
                            Faculty of Management Studies, Medi-Caps University
                        </span>
                        <span className="hero-edition-tag">
                            Hybrid Mode
                        </span>
                        <span className="hero-pub-badge" title="Proceedings with ISBN & Springer publication">
                            <i className="fa-solid fa-book-bookmark" />
                            ISBN Proceedings &amp; Springer Book
                        </span>
                    </div>

                    {/* Conference name */}
                    <h1 className="hero-title bodyFont2">
                        {heroContent.heading}
                    </h1>

                    {/* Short name & Tagline */}
                    <p className="hero-abbr">({heroContent.shortName})</p>
                    <p style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600, marginTop: '6px', marginBottom: '16px', lineHeight: 1.4 }}>
                        {heroContent.tagline}
                    </p>

                    {/* Date + Location row */}
                    <div className="hero-info-row">
                        <div className="hero-info-chip">
                            <i className="fa-regular fa-calendar" />
                            <span>{conferenceInfo.dates}</span>
                        </div>
                        <div className="hero-info-chip">
                            <i className="fa-solid fa-location-dot" />
                            <span>Indore, M.P., India</span>
                        </div>
                        <div className="hero-info-chip">
                            <i className="fa-solid fa-globe" />
                            <span>In-Person &amp; Virtual</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hero-left-divider" />

                    {/* Action buttons */}
                    <div className="hero-actions">
                        <Link to={ROUTES.REGISTER}>
                            <button className="hero-btn hero-btn--primary">
                                <i className="fa-solid fa-pen-to-square" /> Register Now
                            </button>
                        </Link>
                        <Link to={ROUTES.PAPER_SUBMISSION}>
                            <button className="hero-btn hero-btn--secondary">
                                <i className="fa-solid fa-paper-plane" /> Submit Paper
                            </button>
                        </Link>
                        <a
                            href={assets.brochurePDF}
                            download="conferenceBrochure"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleBrochureClick}
                        >
                            <button className="hero-btn hero-btn--ghost">
                                <i className="fa-solid fa-circle-down" /> Brochure
                            </button>
                        </a>
                    </div>
                    
                </div>

                {/* Right — Authentic Conference Photos Carousel */}
                <div className="hero-right">
                    <div className="hero-photo-wrap">
                        {HERO_SLIDES.map((slide, idx) => (
                            <div
                                key={idx}
                                className={`hero-slide-item ${idx === activeSlide ? 'active' : ''}`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="hero-photo"
                                />
                            </div>
                        ))}
                        
                        <div className="hero-photo-overlay" />

                        {/* Slide caption badge */}
                        <div className="hero-slide-badge">
                            <span className="hero-slide-tag">{HERO_SLIDES[activeSlide].tag}</span>
                            <span className="hero-slide-title">{HERO_SLIDES[activeSlide].title}</span>
                        </div>

                        {/* Carousel selector controls */}
                        <div className="hero-slide-controls">
                            <button
                                className="hero-slide-btn"
                                onClick={handlePrevSlide}
                                aria-label="Previous slide"
                            >
                                <i className="fa-solid fa-chevron-left" />
                            </button>

                            {HERO_SLIDES.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`hero-slide-dot ${idx === activeSlide ? 'active' : ''}`}
                                    onClick={() => setActiveSlide(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}

                            <button
                                className="hero-slide-btn"
                                onClick={handleNextSlide}
                                aria-label="Next slide"
                            >
                                <i className="fa-solid fa-chevron-right" />
                            </button>
                        </div>

                        {/* Floating stat cards */}
                        <div className="hero-float-card hero-float-card--tl">
                            <span className="hero-float-num bodyFont2">200+</span>
                            <span className="hero-float-lbl">Submissions Target</span>
                        </div>
                        <div className="hero-float-card hero-float-card--br">
                            <span className="hero-float-num bodyFont2">25+</span>
                            <span className="hero-float-lbl">Countries</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StartHero;
