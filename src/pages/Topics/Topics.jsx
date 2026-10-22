import React from 'react'
import Nav from '../../components/layout/Navbar/Navbar'
import "./Topics.css"
import Footer from '../../components/layout/Footer/Footer'
import PageHeader from '../../components/common/PageHeader'
import '../../components/common/PageHeader.css'
import { conferenceTracks } from '../../data/data'

const Topics = () => {
    return (
        <>
            <Nav />

            <PageHeader
                eyebrow="Scope & Coverage"
                title="Conference Tracks & Topics"
                desc="IC-AISET-2027 invites original, high-quality research papers, case studies, empirical studies, and conceptual frameworks across six core thematic tracks."
            />

            <div className="page-body">
                <div className="page-container">
                    
                    {/* Tracks */}
                    <div className="topics-tracks-wrapper">
                        {conferenceTracks.map((track, trackIdx) => (
                            <React.Fragment key={track.id}>
                                {/* Track Header */}
                                <div className="track-header">
                                    <div className="track-number">
                                        T{track.id}
                                    </div>
                                    <div className="track-title-wrap">
                                        <i className={`fa-solid ${track.icon} track-icon`} />
                                        <h2 className="track-title bodyFont2">
                                            Track {track.id} &mdash; {track.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Topic Pills Grid */}
                                <div className="topics-grid">
                                    {track.topics.map((element) => (
                                        <div className="topic-pill" key={element}>
                                            <i className="fa-solid fa-circle-dot topic-pill-dot" />
                                            <span className="topic-pill-text">{element}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider between tracks */}
                                {trackIdx < conferenceTracks.length - 1 && (
                                    <div className="track-divider">
                                        <span className="track-divider-line" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Topics;
