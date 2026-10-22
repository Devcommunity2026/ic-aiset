import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Nav from '../../components/layout/Navbar/Navbar'
import PageHeader from '../../components/common/PageHeader'
import '../../components/common/PageHeader.css'
import './AboutMedicaps.css'

import aboutMedicapsGallery from '../../assets/images/branding/aboutMedicapsGallery.jpeg'
import aboutMedi1 from '../../assets/images/branding/aboutMedi1-min.jpg'
import aboutMedi2 from '../../assets/images/branding/aboutMedi2-min.jpg'
import aboutMedi3 from '../../assets/images/branding/aboutMedi3-min.jpg'
import aboutMedi4 from '../../assets/images/branding/aboutMedi4-min.jpg'
import { assets } from '../../constants/assets'

function AboutMedicaps() {
    return (
        <>
            <Nav />
            <PageHeader
                eyebrow="Our University"
                title="About Medi-Caps University"
                desc="A brand name in higher education, consistently creating an ideal environment for budding professionals in Central India."
            />

            <div className="page-body">
                <div className="page-container">

                    {/* Introduction */}
                    <div className="about-intro-row">
                        <div className="about-intro-text">
                            <span className="page-section-eyebrow">Introduction</span>
                            <h2 className="page-section-heading bodyFont2">Excellence in Education Since 2000</h2>
                            <span className="page-section-bar" />
                            <p className="about-body-text">
                                Medi-Caps University is one of the brand names in the arena of higher education and is contributing to making Indore an educational hub. Since its inception in July 2000, the group consistently aims at creating an ideal ambiance for budding professionals and helping them grow into leaders.
                            </p>
                            <p className="about-body-text">
                                The main strength of Medi-Caps University is its highly qualified faculty — an optimal blend of academic brilliance and industry exposure, supplemented by specialized visiting faculty, industry experts, and senior professionals from various business sectors.
                            </p>
                        </div>
                        <div className="about-intro-gallery">
                            {[
                                { src: "https://cache.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1760/2019/7/8/Auditorium%20of%20Medi-Caps%20University%20Indore_Auditorium.jpg", alt: "Auditorium" },
                                { src: aboutMedi3, alt: "University Campus" },
                                { src: aboutMedicapsGallery, alt: "Medicaps Campus" },
                                { src: aboutMedi1, alt: "Engineering Wing" },
                                { src: aboutMedi2, alt: "Academic Block" },
                                { src: aboutMedi4, alt: "Main Library" },
                            ].map(({ src, alt }) => (
                                <img key={alt} src={src} alt={alt} className="about-gallery-img" />
                            ))}
                        </div>
                    </div>

                    {/* Faculty of Management Studies & IC-AISET-2027 */}
                    <div className="about-split-card" style={{ marginBottom: '32px' }}>
                        <div className="about-split-text">
                            <span className="page-section-eyebrow">Conference Host</span>
                            <h2 className="page-section-heading bodyFont2">Faculty of Management Studies</h2>
                            <span className="page-section-bar" />
                            <p className="about-body-text">
                                The <strong>Faculty of Management Studies (FMS)</strong> at Medi-Caps University is dedicated to developing resilient, ethical, and future-ready business leaders and scholars. Through innovative curriculum, research initiatives, and corporate partnerships, FMS bridges academia and industry to address pressing management challenges in the global economy.
                            </p>
                            <p className="about-body-text">
                                <strong>IC-AISET-2027</strong> represents a transformative initiative by the Faculty of Management Studies to establish Medi-Caps University as a premier centre of excellence in interdisciplinary research at the convergence of artificial intelligence, sustainability, entrepreneurship, and responsible management.
                            </p>
                        </div>
                        <div className="about-split-img">
                            <img
                                src={assets.medicaps25}
                                alt="Faculty of Management Studies Medi-Caps"
                                className="about-feature-img"
                            />
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="about-split-card">
                        <div className="about-split-text">
                            <span className="page-section-eyebrow">Our Foundation</span>
                            <h2 className="page-section-heading bodyFont2">Our Vision</h2>
                            <span className="page-section-bar" />
                            <p className="about-body-text">
                                To build an institutional ecosystem that equips and inspires the next generation of society-ready professionals with a core belief that knowledge is power.
                            </p>
                        </div>
                        <div className="about-split-img">
                            <img
                                src="https://www.medicaps.ac.in/public/frontend/images/the-university-img1.webp"
                                alt="Medicaps University Vision"
                                className="about-feature-img"
                            />
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="about-split-card about-split-card--reverse">
                        <div className="about-split-text">
                            <span className="page-section-eyebrow">Our Purpose</span>
                            <h2 className="page-section-heading bodyFont2">Our Mission</h2>
                            <span className="page-section-bar" />
                            <ul className="about-mission-list">
                                {[
                                    'Emerge as the most sought-after higher education institution in central India with state-of-the-art resources and experienced faculty.',
                                    'Nurture an academic environment at par with global standards of pedagogy, conducive to experiential learning and research.',
                                    'Cultivate a vibrant ecosystem for professional and intellectual growth to empower individuals as responsible global citizens.',
                                    'Engage and collaborate with academic institutions, organizations, and communities to address contemporary challenges.',
                                ].map((item, i) => (
                                    <li key={i} className="about-mission-item">
                                        <span className="about-mission-dot">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="about-split-img">
                            <img
                                src="https://www.medicaps.ac.in/public/frontend/images/academic-collaboration-img.webp"
                                alt="Medicaps Collaboration"
                                className="about-feature-img"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default AboutMedicaps