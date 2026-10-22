// ============================================================
// src/constants/assets.jsx
// Central image/document asset registry
// Use assets.X instead of repeated local imports
// ============================================================

// --- Navbar & Branding ---
import medicapsLogo from '../assets/images/branding/MedicapsNewLogo.png';
import medicaps25 from '../assets/images/branding/medi25year.jpg';
import medicapsLogo1 from '../assets/images/branding/medicapslogo1.png';
import springerLogo from '../assets/images/branding/springer.png';
import ieeelogo2 from '../assets/images/branding/ieeelogo2.png';
import tarumtLogo from '../assets/images/branding/tarumt-logo.png';
import ieeeMPSection from '../assets/images/branding/ieeeMPSection.png';

// --- IC-AISET-2027 Conference Images ---
import heroAisep2027 from '../assets/images/branding/hero_aisep2027.jpg';
import scopeAisep2027 from '../assets/images/branding/scope_aisep2027.jpg';

// --- Past Conference Images ---
import pastConference1 from '../assets/images/branding/CONFERENCEICANI.jpeg';
import pastConference2 from '../assets/images/branding/pastConference_2.JPG';
import pastConference3 from '../assets/images/branding/pastConference_3.JPG';
import pastConference4 from '../assets/images/branding/pastConference_4.JPG';

// --- Content Images ---
import scopeImageOld from '../assets/images/branding/scope2.jpg';

// --- Payment ---
import paymentQR from '../assets/images/branding/paymentqr.jpg';

// --- Committee Photos ---
import rcMittal from '../assets/images/committee/rcMittal.png';
import gopalAgrawal from '../assets/images/committee/gopalAgrawal.png';
import palashGarg from '../assets/images/committee/palashGarg.png';
import saloniGarg from '../assets/images/committee/saloniGarg.png';
import akshitGarg from '../assets/images/committee/akshitGarg.jpeg';
import ajayKulkarni from '../assets/images/committee/ajayKulkarni.jpeg';
import dkPatnaik from '../assets/images/committee/dkPatnaik.png';
import birajashisPattnaik from '../assets/images/committee/birajashisPattnaik.png';
import ratneshLitoriya from '../assets/images/committee/ratneshLitoriya.png';
import kailashBandhu from '../assets/images/committee/kailashBandhu.png';
import prashantPanse from '../assets/images/committee/prashantPanse.png';
import sonuKumar from '../assets/images/committee/sonuKumar.png';
import rudreshShah from '../assets/images/committee/rudreshShah.png';
import latikaJindal from '../assets/images/committee/latikaJindal.png';
import sanketGupta from '../assets/images/committee/sanketGupta.png';
import gsTomar_mp from '../assets/images/committee/gsTomar_mp.jpeg';
import manishDixit from '../assets/images/committee/manishDixit.jpeg';
import jinendraAgrawal from '../assets/images/committee/jinendraAgrawal.jpeg';
import manmathBadapanda from '../assets/images/committee/manmathBadapanda.jpeg';
import mpSChawla from '../assets/images/committee/mpSChawla.jpeg';
import durgeshMishra from '../assets/images/committee/durgeshMishra.jpeg';
import ashishSharma from '../assets/images/committee/ashishSharma.jpeg';

// --- Documents ---
// PDFs are served from public/ to avoid webpack corrupting binary files.
const brochurePDF = `${process.env.PUBLIC_URL}/documents/ICAISET-2027-Brochure.pdf`;
const paperTemplate = `${process.env.PUBLIC_URL}/documents/Template.docx`;
const copyrightForm = `${process.env.PUBLIC_URL}/documents/AuthorDeclarationForm.pdf`;

// --- Exported Asset Map ---
export const assets = {
  // Branding
  medicapsLogo,
  medicaps25,
  medicapsLogo1,
  springerLogo,
  ieeelogo2,
  tarumtLogo,
  ieeeMPSection,

  // Conference images
  heroAisep2027,
  scopeAisep2027,
  scopeImage: scopeAisep2027,
  scopeImageOld,
  pastConference1,
  pastConference2,
  pastConference3,
  pastConference4,

  // Payment
  paymentQR,

  // Documents
  brochurePDF,
  paperTemplate,
  copyrightForm,
};

// Committee photos exported separately for use in data.js
export const committeePhotos = {
  rcMittal,
  gopalAgrawal,
  palashGarg,
  saloniGarg,
  akshitGarg,
  ajayKulkarni,
  dkPatnaik,
  birajashisPattnaik,
  ratneshLitoriya,
  kailashBandhu,
  prashantPanse,
  sonuKumar,
  rudreshShah,
  latikaJindal,
  sanketGupta,
  gsTomar_mp,
  manishDixit,
  jinendraAgrawal,
  manmathBadapanda,
  mpSChawla,
  durgeshMishra,
  ashishSharma,
};
