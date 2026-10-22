import React from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Nav from '../../components/layout/Navbar/Navbar';
import PageHeader from '../../components/common/PageHeader';
import '../../components/common/PageHeader.css';
import { assets } from '../../constants/assets';
import { paperSubmissionInfo } from '../../data/data';
import './AcceptedPapers.css';

const AcceptedPapers = () => {
  return (
    <>
      <Nav />
      
      <PageHeader
        eyebrow="For Accepted Authors"
        title="Paper Guidelines"
        desc="Please follow these instructions carefully to ensure your final camera-ready paper is accepted for publication."
      />

      <div className="page-body">
        <div className="page-container page-container--narrow">
          
          <div className="guidelines-card-wrapper">
            
            {/* Key Constraints Grid */}
            <div className="constraints-grid">
              <div className="constraint-item">
                <span className="constraint-label">Style Format</span>
                <span className="constraint-val">APA 7th Edition</span>
              </div>
              <div className="constraint-item">
                <span className="constraint-label">Typography</span>
                <span className="constraint-val">TNR 12pt, 1.5 Space</span>
              </div>
              <div className="constraint-item">
                <span className="constraint-label">Plagiarism Limit</span>
                <span className="constraint-val">&le; 10% (Turnitin)</span>
              </div>
              <div className="constraint-item">
                <span className="constraint-label">Language</span>
                <span className="constraint-val">English Only</span>
              </div>
            </div>

            {/* Submission Guidelines List */}
            <div className="guidelines-checklist-section">
              <h3 className="section-subtitle font-heading">
                Submission Guidelines
              </h3>
              <ul className="checklist-items">
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>Original Submissions:</strong> We invite researchers, practitioners, policymakers, and doctoral scholars worldwide to submit previously unpublished, original, innovative research papers, empirical investigations, and conceptual frameworks.
                  </span>
                </li>
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>Peer Review Process:</strong> All submissions will undergo strict double-blind peer-review by at least two independent expert reviewers. Papers must include a title, complete author contact info, structured abstract, and keywords on the first page.
                  </span>
                </li>
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>APA 7th Edition Guidelines:</strong> The paper formatting must strictly align with standard APA 7th Edition guidelines (Times New Roman 12pt, 1.5 line spacing, standard margins, and APA referencing format). You can download the template below.
                  </span>
                </li>
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>Plagiarism Check:</strong> All submitted manuscripts will go through a plagiarism check via Turnitin. Papers with a similarity score of <strong>greater than 10%</strong> are liable to be rejected immediately without further review.
                  </span>
                </li>
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>Electronic Submission:</strong> Paper submission must be done online via the{' '}
                    <a 
                      href={paperSubmissionInfo.portalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-link"
                    >
                      Conference Submission Portal
                    </a>. Hard copies and email submissions are not accepted.
                  </span>
                </li>
              </ul>
            </div>

            {/* Rejection Criteria */}
            <div className="rejection-box">
              <h3 className="rejection-title font-heading">
                <i className="fa-solid fa-circle-exclamation"></i> Common Reasons for Rejection
              </h3>
              <p className="rejection-desc">
                The organizing committee reserves the right to reject submitted papers for publication in cases of:
              </p>
              <div className="rejection-grid">
                <div className="rejection-item">
                  <span className="rejection-num">1.</span> Poor English language quality and readability
                </div>
                <div className="rejection-item">
                  <span className="rejection-num">2.</span> Insufficient empirical or conceptual research content
                </div>
                <div className="rejection-item">
                  <span className="rejection-num">3.</span> Failure to address reviewer feedback and revisions
                </div>
                <div className="rejection-item">
                  <span className="rejection-num">4.</span> Plagiarism / High similarity index (&gt; 10%)
                </div>
                <div className="rejection-item rejection-item--full">
                  <span className="rejection-num">5.</span> Significant deviations from APA 7th Edition manuscript formatting
                </div>
              </div>
            </div>

            {/* Download Action Section */}
            <div className="template-download-footer">
              <div className="template-info">
                <h4 className="template-title font-heading">Standard Manuscript Template</h4>
                <p className="template-desc">Download standard APA 7th Edition manuscript template for formatting reference.</p>
              </div>
              <a href={assets.paperTemplate} download="ICAISET-Paper-Template.docx" className="template-btn-wrap">
                <button className="page-btn page-btn--primary">
                  <i className="fa-solid fa-file-arrow-down"></i> Download Manuscript Format
                </button>
              </a>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AcceptedPapers;