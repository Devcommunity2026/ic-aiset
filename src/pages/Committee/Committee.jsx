import React, { memo } from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Nav from '../../components/layout/Navbar/Navbar'
import PageHeader from '../../components/common/PageHeader'
import '../../components/common/PageHeader.css'
import './Committee.css'
import CommitteeSection from '../../components/common/CommitteeSection'
import {
  committeeData,
  programChair,
  workingCommittee,
  internationalAdvisoryCommittee1,
  internationalAdvisoryCommittee2,
} from '../../data/data'

const ProgrameComitte = memo(() => {
  const doMyTask = (word) => {
    let arr = word.split(',', 3)
    return arr
  }

  const hasPhotoMembers = Boolean(
    (committeeData.chiefPatron && committeeData.chiefPatron.length > 0) ||
    (committeeData.patron && committeeData.patron.length > 0) ||
    (committeeData.generalChair && committeeData.generalChair.length > 0) ||
    (committeeData.generalCoChairs && committeeData.generalCoChairs.length > 0) ||
    (committeeData.advisoryCouncil && committeeData.advisoryCouncil.length > 0)
  );

  const hasTextMembers = Boolean(
    (programChair && programChair.length > 0) ||
    (workingCommittee && workingCommittee.length > 0) ||
    (internationalAdvisoryCommittee1 && internationalAdvisoryCommittee1.length > 0) ||
    (internationalAdvisoryCommittee2 && internationalAdvisoryCommittee2.length > 0)
  );

  return (
    <>
      <Nav />
      
      <PageHeader
        eyebrow="Organizers & Leadership"
        title="Committees & Academic Advisory"
        desc="Meet the university leadership, distinguished advisory board, and organizing committee behind IC-AISET-2027."
      />

      <div className="page-body">
        <div className="page-container">

          {/* ── PHOTO SECTIONS ── */}
          {hasPhotoMembers && (
            <>
              {/* Chief Patron */}
              <CommitteeSection title="Chief Patron" members={committeeData.chiefPatron} />

              {/* Patron */}
              <CommitteeSection title="Patron" members={committeeData.patron} />

              {/* General Chair */}
              <CommitteeSection title="General Chair" members={committeeData.generalChair} />

              {/* General Co-Chairs */}
              <CommitteeSection title="General Co-Chairs" members={committeeData.generalCoChairs} />

              {/* Publication / Finance / Publicity */}
              <div className="committee-chairs-grid committee-chairs-grid--3col">
                <div className="committee-chairs-item">
                  <CommitteeSection title="Publication Chair" members={committeeData.publicationChairs} />
                </div>
                <div className="committee-chairs-item">
                  <CommitteeSection title="Finance Chair" members={committeeData.financeChair} />
                </div>
                <div className="committee-chairs-item">
                  <CommitteeSection title="Publicity Chair" members={committeeData.publicityChair} />
                </div>
              </div>

              {/* Technical Program Committee Chair + Executive Committee Chair */}
              <div className="committee-chairs-grid committee-chairs-grid--2col">
                <div className="committee-chairs-item">
                  <CommitteeSection title="Technical Program Committee Chair" members={committeeData.technicalProgramChair} />
                </div>
                <div className="committee-chairs-item">
                  <CommitteeSection title="Executive Committee Chair" members={committeeData.executiveChair} />
                </div>
              </div>

              {/* Distinguished Academic Advisory Council */}
              <CommitteeSection title="Distinguished Academic Advisory Council" members={committeeData.advisoryCouncil} />
            </>
          )}

          {/* ── WORKING & ADDITIONAL COMMITTEES: ANNOUNCED SOON ── */}
          {!hasTextMembers && (
            <div className="p-8 bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-50 border border-blue-100/80 rounded-2xl text-center my-10 shadow-sm">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50 text-[#c0392b] border border-red-200/60 text-xs font-extrabold uppercase tracking-wider rounded-full mb-3">
                <i className="fa-solid fa-clock"></i> Announced Soon
              </span>
              <h3 className="text-xl font-bold text-[#1a1f5e] font-heading">
                Working Committee &amp; International Advisory Members
              </h3>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2 leading-relaxed">
                The departmental working committees, peer-review panels, track chairs, and international advisory board members for IC-AISET-2027 are currently being reconstituted and will be announced soon.
              </p>
              <div className="mt-4 pt-3 border-t border-blue-100/60 flex items-center justify-center gap-2 text-xs text-gray-500 font-semibold">
                <i className="fa-solid fa-envelope text-[#016698]"></i> For committee inquiries: <a href="mailto:icaiset@medicaps.ac.in" className="text-[#016698] font-bold hover:underline">icaiset@medicaps.ac.in</a>
              </div>
            </div>
          )}

          {/* ── DISTINGUISHED SPEAKER CATEGORIES (DOCX Section 8) ── */}
          <div className="my-12 p-8 bg-gradient-to-r from-slate-50 to-blue-50/40 rounded-2xl border border-blue-100 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#016698]">Keynote Speakers</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1f5e] font-heading mt-1">Distinguished Speaker Categories</h2>
              <p className="text-sm text-gray-600 mt-2">IC-AISET-2027 brings together renowned keynote luminaries across 4 distinguished categories representing premier institutions across four continents.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'International Academic Leaders', icon: 'fa-globe', desc: 'From Globally Recognized Universities & Research Institutions' },
                { title: 'Premier National Academicians', icon: 'fa-landmark-dome', desc: 'From Leading Indian Higher Education Institutions (IITs, IIMs, Universities)' },
                { title: 'Industry Visionaries', icon: 'fa-lightbulb', desc: 'Driving Innovation, Technology, Business & Digital Transformation' },
                { title: 'Entrepreneurs & VCs', icon: 'fa-rocket', desc: 'Venture Capitalists, Research Leaders & Emerging Innovation Champions' },
              ].map((cat, idx) => (
                <div key={idx} className="p-5 bg-white rounded-xl border border-gray-200/80 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#016698] flex items-center justify-center text-xl mb-3 shadow-inner">
                    <i className={`fa-solid ${cat.icon}`}></i>
                  </div>
                  <h4 className="text-sm font-bold text-[#1a1f5e] font-heading">{cat.title}</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── TEXT-ONLY SECTIONS (Dynamically renders when populated) ── */}
          {hasTextMembers && (
            <>
              <div className="committee-divider-wrap">
                <span className="committee-divider-line" />
              </div>

              <div className="committee-text-panel">
                <div className="committee-text-inner">

                  {/* Left Panel */}
                  <div className="committee-text-left">
                    {programChair && programChair.length > 0 && (
                      <div className="committee-subsection">
                        <h3 className="committee-sub-title">Program Chair</h3>
                        <div className="committee-list">
                          {programChair.map((element) => (
                            <p className="committee-list-item" key={element}>
                              <span className="committee-name-highlight">{doMyTask(element)[0]}</span>
                              {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                              {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {workingCommittee && workingCommittee.length > 0 && (
                      <div className="committee-subsection">
                        <h3 className="committee-sub-title">Working Committee</h3>
                        <div className="committee-working-grid">
                          {workingCommittee.map((element) => (
                            <p className="committee-list-item committee-list-item--sm" key={element}>
                              <span className="committee-name-highlight">{doMyTask(element)[0]}</span>
                              {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                              {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Panel */}
                  <div className="committee-text-right">
                    {(internationalAdvisoryCommittee1?.length > 0 || internationalAdvisoryCommittee2?.length > 0) && (
                      <>
                        <h3 className="committee-sub-title">International Advisory Committee</h3>
                        <div className="committee-advisory-grid">
                          <div className="committee-list">
                            {internationalAdvisoryCommittee1.map((element) => (
                              <p className="committee-list-item committee-list-item--sm" key={element}>
                                <span className="committee-name-highlight">{doMyTask(element)[0]}</span>
                                {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                                {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                              </p>
                            ))}
                          </div>
                          <div className="committee-list">
                            {internationalAdvisoryCommittee2.map((element) => (
                              <p className="committee-list-item committee-list-item--sm" key={element}>
                                <span className="committee-name-highlight">{doMyTask(element)[0]}</span>
                                {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                                {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                              </p>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                </div>
              </div>
            </>
          )}

        </div>
      </div>
      <Footer />
    </>
  )
})

ProgrameComitte.displayName = 'ProgrameComitte'

export default ProgrameComitte
