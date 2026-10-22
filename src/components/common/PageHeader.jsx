import React, { memo } from 'react';

/**
 * PageHeader — Uniform white page banner, used on every inner page.
 * @param {string} title   - Main page title
 * @param {string} eyebrow - Small label above title (e.g. "About", "Navigation")
 * @param {string} desc    - Optional short description below title
 */
const PageHeader = memo(({ title, eyebrow, desc }) => {
  return (
    <div className="page-header-root">
      <div className="page-header-inner">
        {eyebrow && (
          <span className="page-header-eyebrow">{eyebrow}</span>
        )}
        <h1 className="page-header-title bodyFont2">{title}</h1>
        <div className="page-header-bar" />
        {desc && (
          <p className="page-header-desc">{desc}</p>
        )}
      </div>
    </div>
  );
});

PageHeader.displayName = 'PageHeader';

export default PageHeader;
