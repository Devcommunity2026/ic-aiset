import React, { memo } from 'react';

/**
 * CommitteeSection - Renders a section of committee members with photos.
 * @param {string} title     - Section heading (e.g. "General Co-Chairs")
 * @param {Array}  members   - Array of { name, designation, image }
 * @param {boolean} fullWidth - When true renders full-width cards
 */
const CommitteeSection = memo(({ title, members, fullWidth = false }) => {
  if (!members || members.length === 0) return null;

  return (
    <div className="committee-sec-wrap">
      <h3 className="committee-sec-title font-heading">
        {title}
      </h3>
      <div className={
        fullWidth 
          ? "committee-grid committee-grid--wide"
          : "committee-grid"
      }>
        {members.map((member, idx) => (
          <div key={idx} className="committee-card">
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="committee-img"
                loading="lazy"
              />
            )}
            <p className="committee-name">{member.name}</p>
            <p className="committee-designation">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

CommitteeSection.displayName = 'CommitteeSection';

export default CommitteeSection;
