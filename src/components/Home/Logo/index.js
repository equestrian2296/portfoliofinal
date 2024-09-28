import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import LogoS from '../../../assets/images/logo-s.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    // Animate background
    gsap.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    });

    // Animate solid logo
    gsap.fromTo(
      solidLogoRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 1, duration: 2 }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      {/* Solid Logo */}
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="Slobodan Gajić - Developer"
      />
    </div>
  );
};

export default Logo;
