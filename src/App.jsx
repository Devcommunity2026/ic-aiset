import { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import RegistrationDisabledModal from './components/common/RegistrationDisabledModal';

// Lazy-load all pages — each page loads only when navigated to
const HomePage        = lazy(() => import('./pages/Home/Home'));
const PaperSubmission = lazy(() => import('./pages/PaperSubmission/PaperSubmission'));
const ProgrameComitte = lazy(() => import('./pages/Committee/Committee'));
const AcceptedPapers  = lazy(() => import('./pages/AcceptedPapers/AcceptedPapers'));
const ContactUs       = lazy(() => import('./pages/Contact/Contact'));
const Venue           = lazy(() => import('./pages/Venue/Venue'));
const Topics          = lazy(() => import('./pages/Topics/Topics'));
const AboutMedicaps   = lazy(() => import('./pages/AboutMedicaps/AboutMedicaps'));
const Register        = lazy(() => import('./pages/Registration/Registration'));

const PageLoader = () => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    minHeight: '100vh', background: '#E3F0FB',
    fontFamily: 'Poppins, sans-serif', color: '#293985',
    fontWeight: 700, fontSize: '1.2rem',
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RegistrationDisabledModal />
      <Routes>
        <Route path={ROUTES.HOME}             element={<HomePage />} />
        <Route path={ROUTES.PAPER_SUBMISSION} element={<PaperSubmission />} />
        <Route path={ROUTES.COMMITTEES}       element={<ProgrameComitte />} />
        <Route path={ROUTES.ACCEPTED_PAPERS}  element={<AcceptedPapers />} />
        <Route path={ROUTES.CONTACT}          element={<ContactUs />} />
        <Route path={ROUTES.VENUE}            element={<Venue />} />
        <Route path={ROUTES.TOPICS}           element={<Topics />} />
        <Route path={ROUTES.ABOUT_MEDICAPS}   element={<AboutMedicaps />} />
        <Route path={ROUTES.REGISTER}         element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default App;
