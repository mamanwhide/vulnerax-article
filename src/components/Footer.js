'use client'; 

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-5 footer-about d-flex justify-content-center">
            <Link href="/" className="logo d-flex align-items-center">
              <Image
                src="/img/logo.png"
                alt="VulneraX Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link href="https://vulnerax.com">Home</Link>
              </li>
              <li>
                <Link href="https://vulnerax.com/#about">About</Link>
              </li>
              <li>
                <Link href="https://vulnerax.com/#our-team">Team</Link>
              </li>
              <li>
                <Link href="https://vulnerax.com/#services">Services</Link>
              </li>
              <li>
                <Link href="/">Resources</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href="https://vulnerax.com/service/PenetrationTesting">Penetration Testing</Link>
              </li>
              <li>
                <Link href="https://vulnerax.com/service/SystemHardening">System Hardening</Link>
              </li>
              <li>
                <Link href="https://vulnerax.com/service/VulnerabilityAssessment">Vulnerability Assessment</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>&nbsp;</h4> {/* Spacer untuk alignment */}
            <ul>
              <li>
                <Link href="https://vulnerax.com/service/ProfessionalRedTeaming">Professional Red Teaming</Link>
              </li>
              <li>
                <Link href="https://vulnerax.com/service/ThreatHunting&IR">
                  Threat Hunting & Incident Response
                </Link>
              </li>
              <li>
                <Link href="https://vulnerax.com/service/RansomwareReadinessAssessment">
                  Ransomware Readiness Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Connect with Us</h4>
            <div className="social-links d-flex mt-4">
              <a href="https://x.com/vulneraxdotcom" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.youtube.com/@vulneraxdotcom" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://www.instagram.com/vulneraxdotcom" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/vulnerax/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          <span>Copyright © 2024-2025</span>{' '}
          <strong className="px-1 sitename">PT. Sentra Keamanan Digital</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}