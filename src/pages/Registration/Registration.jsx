import React from 'react'
import Nav from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import PageHeader from '../../components/common/PageHeader'
import '../../components/common/PageHeader.css'
import './Registration.css'
import ImportantDates from '../../components/common/ImportantDates'
import { assets } from '../../constants/assets'
import { registrationFees, attendeeRegistrationFees } from '../../data/data'
import { CONFIG } from '../../constants/config'
import { useRegistration } from '../../context'

function Register() {
    const { setIsRegModalOpen } = useRegistration();

    const handlePaymentClick = (e) => {
        if (!CONFIG.REGISTRATION_ENABLED) {
            e.preventDefault();
            setIsRegModalOpen(true);
        }
    };

    return (
        <>
            <Nav />
            
            <PageHeader
                eyebrow="Attend & Present"
                title="Registration & Fees"
                desc="Review registration charges, verify key deadlines, and complete your payment through the official portal."
            />

            <div className="page-body">
                <div className="page-container">

                    {/* Important Dates Container */}
                    <div className="reg-dates-section">
                        <ImportantDates />
                    </div>

                    {/* Registration Charges */}
                    <div className="reg-section-card">
                        <div className="reg-section-header">
                            <span className="page-section-eyebrow">Pricing Table</span>
                            <h2 className="page-section-heading bodyFont2">Registration Charges</h2>
                            <span className="page-section-bar" />
                        </div>

                        <div className="reg-table-wrapper">
                            <table className="registerTable">
                                <thead>
                                    <tr>
                                        <th className="table-col-particulars font-heading">Particulars</th>
                                        <th className="table-col-ind text-center font-heading">Charges for Indians</th>
                                        <th className="table-col-int text-center font-heading">Charges for International</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {registrationFees.map((fee, index) => (
                                        <tr key={index}>
                                            <td className="fee-category font-heading">{fee.category}</td>
                                            <td className="fee-charge fee-charge--indian text-center">{fee.indian}</td>
                                            <td className="fee-charge fee-charge--international text-center">{fee.international}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* CTA button */}
                        <div className="reg-cta-wrapper">
                            <a 
                                href={CONFIG.REGISTRATION_ENABLED ? "https://portal.medicaps.ac.in/accsoft2/MiscellaneousPayment.aspx" : "#"} 
                                target={CONFIG.REGISTRATION_ENABLED ? "_blank" : undefined} 
                                rel={CONFIG.REGISTRATION_ENABLED ? "noopener noreferrer" : undefined}
                                onClick={handlePaymentClick}
                            >
                                <button className="page-btn page-btn--primary reg-pay-btn">
                                    Register & Pay Here
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Registration for Attendees */}
                    <div className="reg-section-card">
                        <div className="reg-section-header">
                            <span className="page-section-eyebrow">Pricing Table</span>
                            <h2 className="page-section-heading bodyFont2">Registration for Attendees</h2>
                            <span className="page-section-bar" />
                        </div>

                        <div className="reg-table-wrapper">
                            <table className="registerTable">
                                <thead>
                                    <tr>
                                        <th className="table-col-particulars font-heading">Particulars</th>
                                        <th className="table-col-ind text-center font-heading">Charges for Indians</th>
                                        <th className="table-col-int text-center font-heading">Charges for International</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendeeRegistrationFees.map((fee, index) => (
                                        <tr key={index}>
                                            <td className="fee-category font-heading">{fee.category}</td>
                                            <td className="fee-charge fee-charge--indian text-center">{fee.indian}</td>
                                            <td className="fee-charge fee-charge--international text-center">{fee.international}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* CTA button */}
                        <div className="reg-cta-wrapper">
                            <a 
                                href={CONFIG.REGISTRATION_ENABLED ? "https://portal.medicaps.ac.in/accsoft2/MiscellaneousPayment.aspx" : "#"} 
                                target={CONFIG.REGISTRATION_ENABLED ? "_blank" : undefined} 
                                rel={CONFIG.REGISTRATION_ENABLED ? "noopener noreferrer" : undefined}
                                onClick={handlePaymentClick}
                            >
                                <button className="page-btn page-btn--primary reg-pay-btn">
                                    Register & Pay Here
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Payment Details Container */}
                    <div className="reg-section-card reg-payment-card">
                        <div className="reg-section-header">
                            <span className="page-section-eyebrow">Account Info</span>
                            <h2 className="page-section-heading bodyFont2">Account & Payment Details</h2>
                            <span className="page-section-bar" />
                        </div>

                        <div className="reg-payment-grid">
                            {/* Details card */}
                            <div className="payment-details-panel">
                                <h3 className="payment-panel-title font-heading">Online Gateway Payment</h3>
                                <p className="payment-panel-desc">
                                    You can perform instant registration payments securely via the official university portal. Click the gateway portal link to open the miscellaneous payment system.
                                </p>
                                
                                <div className="gateway-target-box">
                                    <div className="gateway-icon-wrap">
                                        <i className="fa-solid fa-credit-card"></i>
                                    </div>
                                    <div className="gateway-target-details">
                                        <span className="gateway-label">Gateway Target</span>
                                        <a 
                                            href={CONFIG.REGISTRATION_ENABLED ? "https://portal.medicaps.ac.in/accsoft2/MiscellaneousPayment.aspx" : "#"} 
                                            className="gateway-link" 
                                            target={CONFIG.REGISTRATION_ENABLED ? "_blank" : undefined} 
                                            rel={CONFIG.REGISTRATION_ENABLED ? "noopener noreferrer" : undefined}
                                            onClick={handlePaymentClick}
                                        >
                                            Medicaps Miscellaneous Portal
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* QR Code card */}
                            {CONFIG.REGISTRATION_ENABLED ? (
                                <div className="payment-qr-panel">
                                    <div className="qr-img-wrap">
                                        <img className="qr-image" src={assets.paymentQR} alt="Medicaps University UPI QR Code" />
                                    </div>
                                    <span className="qr-instructions">
                                        Scan this UPI QR code using any UPI payment app to transfer registration fees directly.
                                    </span>
                                </div>
                            ) : (
                                <div className="payment-qr-panel payment-qr-panel--locked">
                                    <div className="qr-img-wrap qr-img-wrap--blur">
                                        <img className="qr-image" src={assets.paymentQR} alt="Medicaps University UPI QR Code" />
                                    </div>
                                    <div className="qr-lock-overlay">
                                        <div className="qr-lock-icon">
                                            <i className="fa-solid fa-lock"></i>
                                        </div>
                                        <span className="qr-lock-tag font-heading">
                                            QR Code Locked
                                        </span>
                                    </div>
                                    <span className="qr-instructions qr-instructions--disabled">
                                        QR code is disabled as registrations are currently closed.
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Register;