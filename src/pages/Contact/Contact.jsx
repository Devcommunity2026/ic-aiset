import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Nav from '../../components/layout/Navbar/Navbar'
import PageHeader from '../../components/common/PageHeader'
import '../../components/common/PageHeader.css'
import './Contact.css'
import { contactInfo } from '../../data/data'

const ContactUs = () => {
    return (
        <>
            <Nav />
            <PageHeader
                eyebrow="Reach Out"
                title="Contact Us"
                desc="Have questions about IC-AISET-2027? Get in touch with our organizing committee at Faculty of Management Studies."
            />

            <div className="page-body">
                <div className="page-container--narrow" style={{ margin: '0 auto', padding: '48px 20px' }}>

                    {/* Primary email */}
                    <div className="contact-email-card">
                        <div className="contact-email-icon">
                            <i className="fa-solid fa-envelope" />
                        </div>
                        <div>
                            <h3 className="contact-email-label">Official Conference Email</h3>
                            <a href={`mailto:${contactInfo.email}`} className="contact-email-link">
                                {contactInfo.email}
                            </a>
                            <p className="contact-email-note">Send general inquiries and manuscript submissions here.</p>
                        </div>
                    </div>

                    {/* Contact grid */}
                    <div className="contact-grid">
                        {contactInfo.contacts.map((c, i) => (
                            <div key={i} className="page-card contact-card">
                                <span className="page-section-eyebrow">{c.purpose}</span>
                                <h4 className="contact-name">{c.name}</h4>
                                <div className="contact-phone-row">
                                    <a href={`tel:${c.phone}`} className="contact-phone">
                                        <i className="fa-solid fa-phone" />
                                        {c.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs