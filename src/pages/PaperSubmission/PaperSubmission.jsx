import React from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Nav from '../../components/layout/Navbar/Navbar';
import FAQAccordion from '../../components/common/FAQAccordion';
import PageHeader from '../../components/common/PageHeader';
import '../../components/common/PageHeader.css';
import { assets } from '../../constants/assets';
import { 
  paperSubmissionInfo, 
  submissionGuidelines, 
  submissionSteps, 
  submissionFAQs 
} from '../../data/data';
import './PaperSubmission.css';
import { CONFIG } from '../../constants/config';
import { useRegistration } from '../../context';

const PaperSubmission = () => {
  const { setIsCmtModalOpen } = useRegistration();

  const handleCmtClick = (e) => {
    if (!CONFIG.CMT_PORTAL_ENABLED) {
      e.preventDefault();
      setIsCmtModalOpen(true);
    }
  };
  
  return (
    <>
      <Nav />

      <PageHeader
        eyebrow="Authors & Presenters"
        title="Paper Submission & Guidelines"
        desc="Submit your original research work to be part of the International Conference on Convergence of AI, Start-Up, Disruptive Technologies and Sustainability (IC-AISET-2027)."
      />

      <div className="page-body">
        <div className="page-container">
          
          {/* Important Dates Section */}
          <div className="sub-section-container">
            <div className="sub-section-label">
              <span className="page-section-eyebrow">Key Dates</span>
              <h2 className="page-section-heading bodyFont2">Submission Milestones</h2>
              <span className="page-section-bar" />
            </div>
            
            <div className="milestones-grid">
              {paperSubmissionInfo.deadlines.map((dl, i) => (
                <div key={i} className="milestone-card">
                  <div className="milestone-icon-wrap">
                    <i className={`fa-solid ${dl.icon}`}></i>
                  </div>
                  <span className="milestone-label">{dl.label}</span>
                  <span className="milestone-date">{dl.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="sub-section-container">
            <div className="sub-section-label">
              <span className="page-section-eyebrow">Guidelines</span>
              <h2 className="page-section-heading bodyFont2">Submission Guidelines</h2>
              <span className="page-section-bar" />
            </div>

            <div className="guidelines-grid">
              {submissionGuidelines.map((item, idx) => (
                <div key={idx} className="guideline-card">
                  <div className="guideline-icon-wrap">
                    <i className={`fa-solid ${item.icon.split(' ')[0]}`}></i>
                  </div>
                  <div className="guideline-content">
                    <h3 className="guideline-title font-heading">{item.title}</h3>
                    <p className="guideline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Process */}
          <div className="sub-section-container">
            <div className="sub-section-label">
              <span className="page-section-eyebrow">Workflow</span>
              <h2 className="page-section-heading bodyFont2">Submission Process</h2>
              <span className="page-section-bar" />
            </div>

            <div className="process-grid">
              {submissionSteps.map((step, idx) => (
                <div key={idx} className="process-card">
                  <div className="process-number">
                    {step.step}
                  </div>
                  <h3 className="process-title font-heading">{step.title}</h3>
                  <p className="process-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources & Templates */}
          <div className="sub-section-container">
            <div className="resources-box">
              <div className="resources-header">
                <span className="page-section-eyebrow">Downloads</span>
                <h2 className="page-section-heading bodyFont2">Author Resources & Instructions</h2>
                <span className="page-section-bar" style={{ margin: '8px auto 0' }} />
              </div>

              <div className="resources-grid">
                {/* Word Template */}
                <div className="resource-card resource-card--word">
                  <div className="resource-body">
                    <h3 className="resource-title font-heading">
                      <i className="fa-solid fa-file-word"></i> APA 7th Edition Template
                    </h3>
                    <p className="resource-desc">
                      Please format your paper submission strictly as per APA 7th Edition style (Times New Roman 12pt, 1.5 line spacing). Ensure citations and headings match standard guidelines.
                    </p>
                  </div>
                  <a href={assets.paperTemplate} download="ICAISET-Paper-Template.docx" className="resource-btn-wrap">
                    <button className="page-btn page-btn--navy">
                      <i className="fa-solid fa-download"></i> Download Template
                    </button>
                  </a>
                </div>

                {/* Author Declaration Form */}
                <div className="resource-card resource-card--pdf">
                  <div className="resource-body">
                    <h3 className="resource-title font-heading">
                      <i className="fa-solid fa-file-shield"></i> Author Declaration Form
                    </h3>
                    <p className="resource-desc">
                      All accepted papers require a signed Author Declaration &amp; Consent form verifying originality and author consent during camera-ready upload. Download template below.
                    </p>
                  </div>
                  <a href={assets.copyrightForm} download="Author-Declaration-Form.pdf" className="resource-btn-wrap">
                    <button className="page-btn page-btn--primary">
                      <i className="fa-solid fa-download"></i> Download Declaration Form
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="sub-section-container">
            <div className="sub-section-label">
              <span className="page-section-eyebrow">Help</span>
              <h2 className="page-section-heading bodyFont2">Frequently Asked Questions</h2>
              <span className="page-section-bar" />
            </div>

            <FAQAccordion faqs={submissionFAQs} />
          </div>

          {/* Submission CTA Card */}
          <div className="submission-cta-card">
            <h2 className="cta-title font-heading">Ready to Submit Your Paper?</h2>
            <p className="cta-desc">
              Click below to access the CMT online submission portal. For any assistance, reach out to us at{' '}
              <a href={`mailto:${paperSubmissionInfo.contactEmail}`} className="cta-email">
                {paperSubmissionInfo.contactEmail}
              </a>.
            </p>

            {paperSubmissionInfo.isOpen ? (
              <a 
                href={paperSubmissionInfo.portalUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={handleCmtClick}
              >
                <button className="page-btn page-btn--primary cta-btn">
                  Access CMT Submission Portal
                </button>
              </a>
            ) : (
              <div className="cta-status-badge">
                <i className="fa-solid fa-circle-info"></i> Paper Submission Portal Will Open Soon
              </div>
            )}

            <div className="cmt-ack-note">
              <p className="cmt-ack-text">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaperSubmission;