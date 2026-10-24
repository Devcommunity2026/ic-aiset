import React, { useEffect, useState } from 'react'
import "./Home.css"
import Nav from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import { Link } from 'react-router-dom'
import StartHero from '../../components/sections/StartHero/StartHero'
import ConferenceCard from '../../components/common/ConferenceCard'
import { useCount } from '../../context';
import { 
    previousConferences, 
    importantDates, 
    doctoralColloquium,
    publicationPlan 
} from '../../data/data';
import { assets } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';

const QUICK_LINKS = [
    { to: ROUTES.COMMITTEES, icon: 'fa-users-gear', title: 'Committees', desc: 'University leadership, academic advisory council and organizers.' },
    { to: ROUTES.ACCEPTED_PAPERS, icon: 'fa-file-lines', title: 'Paper Guidelines', desc: 'APA 7th Edition style, originality rules and submission checklist.' },
    { to: ROUTES.TOPICS, icon: 'fa-lightbulb', title: 'Tracks & Topics', desc: 'Explore the 6 thematic research tracks and specializations.' },
    { to: ROUTES.VENUE, icon: 'fa-location-dot', title: 'Venue & Mode', desc: 'Campus location in Indore and hybrid session details.' },
];

const CONFERENCE_GALLERY = [
    {
        src: assets.confDelegatesGroup,
        tag: 'Campus Gathering',
        title: 'Delegates, Faculty & Scholars at Medi-Caps Campus',
        desc: 'Distinguished participants, university leadership, and international scholars gathered at the Faculty of Management Studies, Medi-Caps University.',
    },
    {
        src: assets.confProceedingsRelease,
        tag: 'Proceedings Launch',
        title: 'Official Release of Conference Proceedings',
        desc: 'Formal unveiling of peer-reviewed management research proceedings and publication volume by university leadership and dignitaries.',
    },
    {
        src: assets.confKeynoteFelicitation,
        tag: 'Keynote & Honors',
        title: 'Keynote Speaker Felicitation & Citation Ceremony',
        desc: 'Presenting formal honors and conference citation to distinguished international keynote speaker on stage.',
    },
    {
        src: assets.confBookUnveiling,
        tag: 'Inaugural Session',
        title: 'Conference Proceedings Publication Unveiling',
        desc: 'Esteemed dignitaries and faculty holding up the officially published proceedings of the management conference.',
    },
];

const HomePage = () => {
    const { setCount } = useCount();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const func = () => setCount(prev => prev + 1);
        window.addEventListener('load', func);
        return () => window.removeEventListener('load', func);
    }, [setCount]);

    return (
        <>
            <Nav />
            <StartHero />

            {/* ════ 1. IMPORTANT DATES ════ */}
            <section className="hp-dates" id="impDates">
                <div className="hp-container">
                    <div className="hp-section-label">
                        <span className="hp-eyebrow">Key Deadlines</span>
                        <h2 className="hp-heading bodyFont2">Important Dates</h2>
                    </div>
                    <div className="hp-dates-grid">
                        {importantDates.map((item) => (
                            <div className="hp-date-card" key={item.id}>
                                <div className="hp-date-icon-wrap">
                                    <i className={`fa-solid ${item.icon} hp-date-icon`} />
                                </div>
                                <span className="hp-date-label">{item.label}</span>
                                <span className="hp-date-value">{item.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 2. CONFERENCE SCOPE ════ */}
            <section className="hp-scope">
                <div className="hp-container hp-scope-inner">
                    <div className="hp-scope-text">
                        <span className="hp-eyebrow">About the Conference</span>
                        <h2 className="hp-heading bodyFont2">Background &amp; Rationale</h2>
                        <div className="hp-heading-bar" />
                        <p className="hp-scope-body">
                            The <strong>International Conference on Convergence of AI, Start-Up, Disruptive Technologies and Sustainability for Resilient and Future-Ready Organizations (IC-AISET-2027)</strong> is proposed as a flagship global event to be held on <strong>05–06 January 2027</strong> in a hybrid mode.
                        </p>
                        <p className="hp-scope-body" style={{ marginTop: '12px' }}>
                            Organized by the <strong>Faculty of Management Studies, Medi-Caps University, Indore</strong>, the conference brings together researchers, academicians, industry leaders, policymakers, entrepreneurs, and scholars to explore emerging frontiers in AI, ESG sustainability, FinTech, and innovative governance. Aligned with <em>Digital India, Startup India, NEP 2020, Viksit Bharat @2047, and the UN Sustainable Development Goals</em>, it fosters cross-border interdisciplinary research and actionable frameworks.
                        </p>
                        <div className="hp-scope-actions">
                            <Link to={ROUTES.REGISTER}>
                                <button className="hp-btn hp-btn--red">Register Now &rarr;</button>
                            </Link>
                            <Link to={ROUTES.TOPICS}>
                                <button className="hp-btn hp-btn--outline">View 6 Tracks</button>
                            </Link>
                        </div>
                    </div>
                    <div className="hp-scope-img-wrap">
                        <img className="hp-scope-img" src={assets.scopeImage} alt="IC-AISET-2027 Conference Scope & Proceedings Release" />
                        <div className="hp-scope-img-badge">
                            <span className="hp-scope-badge-num bodyFont2">2027</span>
                            <span className="hp-scope-badge-txt">Hybrid</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════ 3. SPECIAL HIGHLIGHTS: DOCTORAL COLLOQUIUM & PUBLICATION ════ */}
            <section className="hp-links" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div className="hp-container">
                    <span className="hp-eyebrow">Academic Opportunities</span>
                    <h2 className="hp-heading bodyFont2">Key Conference Highlights</h2>
                    <div className="hp-heading-bar" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Doctoral Colloquium Card */}
                        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#016698] flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-graduation-cap"></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a1f5e] font-heading">{doctoralColloquium.title}</h3>
                                    <p className="text-xs text-gray-500 font-semibold">{doctoralColloquium.eligibility}</p>
                                </div>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-2 mb-4">
                                {doctoralColloquium.features.slice(0, 3).map((f, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <i className="fa-solid fa-check-circle text-emerald-500 mt-1 flex-shrink-0 text-xs"></i>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-[#a21d2e] uppercase tracking-wider">
                                    <i className="fa-solid fa-trophy mr-1"></i> Best Paper Award
                                </span>
                                <Link to={ROUTES.ACCEPTED_PAPERS} className="text-xs font-bold text-[#016698] hover:underline">
                                    Learn More &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Publication Plan Card */}
                        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-book-bookmark"></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a1f5e] font-heading">Publication Plan</h3>
                                    <p className="text-xs text-gray-500 font-semibold">Springer / Taylor &amp; Francis &amp; Scopus Proceedings</p>
                                </div>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-2 mb-4">
                                {publicationPlan.map((p, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <i className="fa-solid fa-award text-amber-500 mt-1 flex-shrink-0 text-xs"></i>
                                        <span><strong>{p.channel}:</strong> {p.details} ({p.timeline})</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                                    <i className="fa-solid fa-certificate mr-1"></i> Double-Blind Review
                                </span>
                                <Link to={ROUTES.ACCEPTED_PAPERS} className="text-xs font-bold text-[#016698] hover:underline">
                                    Guidelines &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════ 4. QUICK LINKS ════ */}
            <section className="hp-links">
                <div className="hp-container">
                    <span className="hp-eyebrow">Navigate</span>
                    <h2 className="hp-heading bodyFont2">Quick Access</h2>
                    <div className="hp-heading-bar" />
                    <div className="hp-links-grid">
                        {QUICK_LINKS.map(({ to, icon, title, desc }) => (
                            <Link to={to} className="hp-link-card" key={title}>
                                <div className="hp-link-icon">
                                    <i className={`fa-solid ${icon}`} />
                                </div>
                                <div className="hp-link-body">
                                    <h3 className="hp-link-title">{title}</h3>
                                    <p className="hp-link-desc">{desc}</p>
                                </div>
                                <i className="fa-solid fa-chevron-right hp-link-arrow" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 5. CONFERENCE GLIMPSES & AUTHENTIC HIGHLIGHTS ════ */}
            <section className="hp-gallery-section" id="gallery">
                <div className="hp-container">
                    <span className="hp-eyebrow">Visual Highlights</span>
                    <h2 className="hp-heading bodyFont2">Conference Glimpses &amp; Moments</h2>
                    <div className="hp-heading-bar" />
                    <p style={{ color: '#4b5563', fontSize: '0.92rem', maxWidth: '720px', margin: '-10px 0 24px', lineHeight: 1.6 }}>
                        Explore authentic moments from our international management conferences hosted by Faculty of Management Studies, Medi-Caps University — bringing together eminent researchers, global delegates, and visionary leaders.
                    </p>

                    <div className="hp-gallery-grid">
                        {CONFERENCE_GALLERY.map((item, idx) => (
                            <div className="hp-gallery-card" key={idx}>
                                <div 
                                    className="hp-gallery-img-wrap"
                                    onClick={() => setSelectedImage(item)}
                                    title="Click to view full photo"
                                >
                                    <img 
                                        src={item.src} 
                                        alt={item.title} 
                                        className="hp-gallery-img" 
                                        loading="lazy" 
                                    />
                                    <span className="hp-gallery-tag">{item.tag}</span>
                                </div>
                                <div className="hp-gallery-body">
                                    <h3 className="hp-gallery-title font-heading">{item.title}</h3>
                                    <p className="hp-gallery-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 6. PREVIOUS CONFERENCES ════ */}
            <section className="hp-prev">
                <div className="hp-container">
                    <span className="hp-eyebrow">Legacy</span>
                    <h2 className="hp-heading bodyFont2">University Conference Legacy</h2>
                    <div className="hp-heading-bar" />
                    <div className="hp-prev-grid">
                        {previousConferences.map((conf) => (
                            <ConferenceCard
                                key={conf.id}
                                title={conf.title}
                                year={conf.year}
                                link={conf.link}
                                image={assets[conf.image]}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 7. PAPER SUBMISSION CTA ════ */}
            <section className="hp-cta">
                <div className="hp-container hp-cta-inner">
                    <div className="hp-cta-text">
                        <span className="hp-eyebrow">Call for Papers</span>
                        <h2 className="hp-heading bodyFont2">Submit Your Research</h2>
                        <p className="hp-cta-desc">
                            Authors are invited to submit original, unpublished research papers, case studies, empirical studies, conceptual frameworks, and review articles aligned with any of the six conference tracks. High-quality accepted papers will be published in ISBN proceedings, an edited book volume with Springer / Taylor &amp; Francis, and Scopus/WoS indexed journals.
                        </p>
                        <div className="hp-cta-actions">
                            <Link to={ROUTES.PAPER_SUBMISSION}>
                                <button className="hp-btn hp-btn--red">Submit Paper &rarr;</button>
                            </Link>
                            <Link to={ROUTES.ACCEPTED_PAPERS}>
                                <button className="hp-btn hp-btn--outline">Guidelines</button>
                            </Link>
                        </div>
                    </div>
                    <div className="hp-cta-visual">
                        <div className="hp-cta-circle">
                            <i className="fa-solid fa-paper-plane hp-cta-circle-icon" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="hp-lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="hp-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="hp-lightbox-close" 
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close photo"
                        >
                            <i className="fa-solid fa-xmark" />
                        </button>
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.title} 
                            className="hp-lightbox-img" 
                        />
                        <div className="hp-lightbox-info">
                            <span className="hp-lightbox-caption">{selectedImage.title}</span>
                            <span className="hp-gallery-tag" style={{ position: 'static' }}>{selectedImage.tag}</span>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default HomePage;