import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should display Endorsements section', () => {
    render(<Footer />)
    expect(screen.getByText('Endorsements')).toBeInTheDocument()
  })

  it('should not display Quick Links section', () => {
    render(<Footer />)
    expect(screen.queryByText('Quick Links')).not.toBeInTheDocument()
  })

  it('should display Contact Us section with contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('should not display social media icons', () => {
    render(<Footer />)
    expect(screen.queryByLabelText('Facebook')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('X (Twitter)')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('LinkedIn')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('GitHub')).not.toBeInTheDocument()
  })

  it('should display the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('should have Candid profile link', () => {
    render(<Footer />)
    const candidLink = screen.getByText(/Candid Profile/i)
    expect(candidLink).toBeInTheDocument()
    expect(candidLink.closest('a')).toHaveAttribute(
      'href',
      'https://app.candid.org/profile/15928934/friends-of-pack-362-inc-92-3233855'
    )
  })

  it('should have email contact link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const emailLink = links.find((link) => link.getAttribute('href')?.includes('mailto:'))
    expect(emailLink).toBeDefined()
  })

  it('should display the EIN number', () => {
    render(<Footer />)
    expect(screen.getByText(/92-3233855/)).toBeInTheDocument()
  })

  it('should not have a phone contact link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const phoneLink = links.find((link) => link.getAttribute('href')?.includes('tel:'))
    expect(phoneLink).toBeUndefined()
  })

  it('should display the Free For Charity Policy section', () => {
    render(<Footer />)
    expect(screen.getByText('Free For Charity Policy')).toBeInTheDocument()
  })

  it('should have policy links with correct hrefs', () => {
    render(<Footer />)
    const policyLinks = [
      { text: 'Free For Charity Privacy Policy', href: '/privacy-policy' },
      { text: 'Free For Charity Cookie Policy', href: '/cookie-policy' },
      { text: 'Free For Charity Terms of Service', href: '/terms-of-service' },
      { text: 'Free For Charity Donation Policy', href: '/free-for-charity-donation-policy' },
    ]

    for (const { text, href } of policyLinks) {
      const link = screen.getByText(text).closest('a')
      expect(link).toHaveAttribute('href', href)
    }
  })

  it('should have Candid seal image with alt text', () => {
    render(<Footer />)
    const seal = screen.getByAltText('Candid Gold Seal of Transparency')
    expect(seal).toBeInTheDocument()
    expect(seal).toHaveAttribute(
      'src',
      'https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/15928934/svg'
    )
  })

  it('should have Google Maps link for main address', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Open main address in Google Maps')).toBeInTheDocument()
    expect(screen.queryByLabelText('Open PA office address in Google Maps')).not.toBeInTheDocument()
  })

  it('should display freeforcharity.org link in copyright bar', () => {
    render(<Footer />)
    const link = screen.getByText('https://freeforcharity.org')
    expect(link.closest('a')).toHaveAttribute('href', 'https://freeforcharity.org')
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
