'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

import {
  CANDID_PROFILE_URL,
  CANDID_SEAL_URL,
  CONTACT_EMAIL,
  MAILING_ADDRESS,
  MAILING_ADDRESS_LINES,
  ORGANIZATION_EIN,
  ORGANIZATION_NAME,
} from '@/lib/organization'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-4 md:px-6 lg:px-8">
        {/* Column 1: Endorsements */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Endorsements</h3>

          <div className="space-y-4">
            <a
              href={CANDID_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${ORGANIZATION_NAME} Candid Profile`}
            >
              <img src={CANDID_SEAL_URL} alt="Candid Gold Seal of Transparency" />
            </a>
            <Link
              href={CANDID_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative my-4 flex w-full max-w-[230px] items-center justify-between
                border-2 border-[#2ea3f2] bg-black px-5 py-2.5 text-[#2ea3f2]
                transition-all duration-300 hover:border-transparent"
              id="aria-font"
            >
              <span className="text-[17px] font-medium leading-tight sm:text-[18px] md:text-[20px] transition-transform duration-300 group-hover:-translate-x-1">
                Direct Candid Profile Link
              </span>

              <ArrowRight
                className="h-8 w-8 translate-x-2 opacity-0 text-[#2ea3f2] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                strokeWidth={2}
              />
            </Link>

            <p>
              <span className="font-[500] text-[22px]">
                {ORGANIZATION_NAME}
                <br />
                EIN: {ORGANIZATION_EIN}
              </span>
            </p>
          </div>
        </div>

        {/* Column 2: Policy */}
        <div className="space-y-6 px-4 sm:px-0">
          <div className="space-y-3">
            <h4 className="text-[28px] text-white">Free For Charity Policy</h4>
            <ul className="space-y-1 text-sm" id="lato-font">
              {[
                {
                  name: 'Free For Charity Donation Policy',
                  href: '/free-for-charity-donation-policy',
                },
                {
                  name: 'Free For Charity Privacy Policy',
                  href: '/privacy-policy',
                },
                {
                  name: 'Free For Charity Cookie Policy',
                  href: '/cookie-policy',
                },
                {
                  name: 'Free For Charity Terms of Service',
                  href: '/terms-of-service',
                },
                {
                  name: 'Free For Charity Vulnerability Disclosure Policy',
                  href: '/vulnerability-disclosure-policy',
                },
                {
                  name: 'Free For Charity Security Acknowledgement',
                  href: '/security-acknowledgements',
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Us */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Contact Us</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">E-mail</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-[500] text-[15px] hover:text-cyan-400 transition-colors break-all"
                  id="aria-font"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAILING_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open mailing address in Google Maps"
              className="flex items-start gap-3 hover:opacity-80 transition-opacity"
            >
              <MapPin className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Mailing Address</p>
                <p className="font-[500] text-[16px]" id="aria-font">
                  {MAILING_ADDRESS_LINES[0]}
                  <br />
                  {MAILING_ADDRESS_LINES[1]}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-12 py-6 px-4 border-t border-gray-800 text-center text-[18px] font-[500] w-full"
        id="aria-font"
      >
        <p>
          © {currentYear} All Rights Are Reserved by Free For Charity a US 501c3 Non Profit | A
          project of{' '}
          <Link
            href="https://freeforcharity.org"
            className="underline text-[#2EA3F2] hover:text-[#2EA3F2] transition-colors"
          >
            https://freeforcharity.org
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
