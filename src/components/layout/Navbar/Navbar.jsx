


import React, { useState, useEffect, memo } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import hamburger from './hamburger.svg';
import close from './close.svg';
import { heroContent, navLinks } from '../../../data/data';
import { assets } from '../../../constants/assets';
import { ROUTES } from '../../../constants/routes';
import { CONFIG } from '../../../constants/config';
import { useRegistration } from '../../../context';

const Nav = memo((props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { setIsBrochureModalOpen } = useRegistration();

  const handleRegisterClick = (e) => {
    setOpen(false);
  };

  const handleBrochureClick = (e) => {
    if (!CONFIG.BROCHURE_DOWNLOAD_ENABLED) {
      e.preventDefault();
      setIsBrochureModalOpen(true);
      setOpen(false);
    }
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      {/* ── TOP LOGO BAR ── */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="w-full flex items-center justify-between px-4 md:px-10 lg:px-16 py-3 md:py-4">

          {/* Left: Medicaps Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to={ROUTES.HOME}>
              <img
                src={assets.medicapsLogo}
                alt="Medicaps University"
                className="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[170px]"
              />
            </Link>
          </div>

          {/* Center: Conference Title */}
          <div className="flex-1 text-center px-2 md:px-8">
            <p className="text-[0.78rem] sm:text-[1rem] md:text-[1.3rem] lg:text-[1.6rem] headingMain font-extrabold tracking-tight leading-tight">
              {heroContent.heading} ({heroContent.shortName})
            </p>
            <p className="text-[0.62rem] sm:text-[0.75rem] md:text-[0.85rem] font-bold text-gray-600 tracking-wide mt-1">
              {heroContent.dates}
            </p>
          </div>

          {/* Right: Medi-Caps 25 Years Celebration Logo */}
          <div className="flex-shrink-0">
            <img
              src={assets.medicaps25}
              alt="Medi-Caps University 25 Years of Excellence"
              className="w-[45px] sm:w-[65px] md:w-[85px] lg:w-[105px] object-contain rounded-md"
            />
          </div>

        </div>
      </nav>

      {/* ── STICKY NAVBAR ── */}
      <div className="w-full sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-10 xl:px-16 py-2.5 relative">

          {/* ── DESKTOP BRAND LOGO (Sticky only) ── */}
          <div className="hidden lg:flex items-center flex-shrink-0 mr-4">
            <Link to={ROUTES.HOME}>
              <img
                src={assets.medicapsLogo}
                alt="Medicaps University"
                className="h-8 w-auto md:h-9 object-contain transition-transform duration-250 hover:scale-103"
              />
            </Link>
          </div>

          {/* ── MOBILE: Short name + Register + Hamburger ── */}
          <div className="flex lg:hidden items-center w-full justify-between">
            <span className="font-black text-[#1a1f5e] text-sm tracking-widest">
              {heroContent.shortName}
            </span>
            <div className="flex items-center gap-2">
              <Link to={ROUTES.REGISTER} onClick={handleRegisterClick}>
                <button className="px-3.5 py-1.5 bg-[#c0392b] text-white text-[0.68rem] font-bold uppercase rounded-md shadow active:scale-97 transition-all duration-150">
                  Register
                </button>
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="focus:outline-none p-1.5 ml-1 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-150"
                aria-label="Toggle menu"
              >
                {!open
                  ? <img src={hamburger} alt="Menu" width={22} height={22} />
                  : <img src={close} alt="Close" width={22} height={22} />
                }
              </button>
            </div>
          </div>

          {/* ── MOBILE FULLSCREEN MENU ── */}
          {open && (
            <div className="lg:hidden fixed inset-0 w-full h-full bg-[#1a1f5e] z-[9999] flex flex-col overflow-y-auto">

              {/* Overlay Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/20 flex-shrink-0">
                <Link to={ROUTES.HOME} onClick={() => setOpen(false)}>
                  <img src={assets.medicapsLogo} alt="Medicaps" className="w-[100px] brightness-0 invert" />
                </Link>
                <button onClick={() => setOpen(false)} className="focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors">
                  <img src={close} alt="Close" width={24} height={24} className="brightness-0 invert" />
                </button>
              </div>

              {/* Nav Links */}
              <ul className="flex flex-col px-6 py-4 flex-1 gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      onClick={() => setOpen(false)}
                      className={`flex items-center py-3 text-[1rem] font-bold uppercase tracking-wider border-b border-white/10 transition-colors duration-200
                        ${location.pathname === link.link
                          ? 'text-yellow-300'
                          : 'text-white hover:text-yellow-200'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3 px-6 py-6 flex-shrink-0 border-t border-white/10">
                <Link to={ROUTES.REGISTER} onClick={handleRegisterClick}>
                  <button className="w-full py-3 bg-[#c0392b] text-white text-sm font-bold uppercase rounded-lg hover:bg-[#a93226] active:scale-99 transition duration-150 tracking-wider shadow">
                    Register Now
                  </button>
                </Link>
                <Link to={ROUTES.PAPER_SUBMISSION} onClick={() => setOpen(false)}>
                  <button className="w-full py-3 bg-transparent text-white text-sm font-bold uppercase rounded-lg border border-white/40 hover:bg-white/10 active:scale-99 transition duration-150 tracking-wider">
                    Paper Submission
                  </button>
                </Link>
                <a
                  href={assets.brochurePDF}
                  download="conferenceBrochure"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBrochureClick}
                >
                  <button className="w-full py-3 bg-transparent text-white/70 text-sm font-bold uppercase rounded-lg border border-white/20 hover:bg-white/10 active:scale-99 transition duration-150 flex items-center justify-center gap-2 tracking-wider">
                    <i className="fa-solid fa-circle-down text-sm"></i> Brochure
                  </button>
                </a>
              </div>

            </div>
          )}

          {/* ── DESKTOP NAV LINKS ── */}
          <ul className="hidden lg:flex items-center justify-center flex-1 gap-4 xl:gap-6 2xl:gap-8 mx-auto">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className={`conf-nav-link font-bold text-[0.7rem] lg:text-[0.74rem] xl:text-[0.8rem] 2xl:text-[0.85rem] uppercase tracking-wider transition-colors duration-200 pb-1 whitespace-nowrap
                    ${location.pathname === link.link
                      ? 'text-[#a21d2e] conf-nav-active'
                      : 'text-[#293985] hover:text-[#a21d2e]'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── DESKTOP ACTION BUTTONS ── */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Link to={ROUTES.PAPER_SUBMISSION}>
              <button className="nav-btn nav-btn--outline whitespace-nowrap">
                Paper Submission
              </button>
            </Link>
            <Link to={ROUTES.REGISTER} onClick={handleRegisterClick}>
              <button className="nav-btn nav-btn--primary whitespace-nowrap">
                Register
              </button>
            </Link>
            <a href={assets.brochurePDF} download="conferenceBrochure" target="_blank" rel="noopener noreferrer" onClick={handleBrochureClick}>
              <button className="nav-btn nav-btn--ghost whitespace-nowrap">
                <i className="fa-solid fa-circle-down"></i> Brochure
              </button>
            </a>
          </div>

        </div>
      </div>
    </>
  );
});

Nav.displayName = 'Nav';
export default Nav;