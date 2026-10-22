// ============================================================
// src/constants/routes.jsx
// Central route definitions — update here, updates everywhere
// ============================================================

export const ROUTES = {
  HOME: '/',
  PAPER_SUBMISSION: '/paperSubmission',
  COMMITTEES: '/programeComitte',
  ACCEPTED_PAPERS: '/acceptedPapers',
  CONTACT: '/contactUs',
  VENUE: '/venue',
  TOPICS: '/topics',
  ABOUT_MEDICAPS: '/aboutMedicaps',
  REGISTER: '/register',
};

export const NAV_LINKS = [
  { name: 'ABOUT CONFERENCE', link: ROUTES.HOME },
  { name: 'ABOUT UNIVERSITY', link: ROUTES.ABOUT_MEDICAPS },
  { name: 'COMMITTEES', link: ROUTES.COMMITTEES },
  { name: 'PAPER GUIDELINES', link: ROUTES.ACCEPTED_PAPERS },
  { name: 'VENUE', link: ROUTES.VENUE },
  { name: 'CONTACT US', link: ROUTES.CONTACT },
  { name: 'TOPICS', link: ROUTES.TOPICS },
];
