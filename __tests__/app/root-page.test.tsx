import React from 'react'
import { render, screen } from '@testing-library/react'

import RootPage from '../../src/app/page'
import { CANDID_PROFILE_URL } from '../../src/lib/organization'

describe('Root page (app/page.tsx)', () => {
  it('should render without crashing', () => {
    const { container } = render(<RootPage />)
    expect(container).toBeTruthy()
  })

  it('should render the main content area', () => {
    render(<RootPage />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('should display the organization name', () => {
    render(<RootPage />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Friends of Pack 362 Inc.' })
    ).toBeInTheDocument()
  })

  it('should link to the Candid nonprofit profile', () => {
    render(<RootPage />)
    const candidLinks = screen.getAllByRole('link', { name: /candid profile/i })
    expect(candidLinks.length).toBeGreaterThan(0)
    expect(candidLinks[0]).toHaveAttribute('href', CANDID_PROFILE_URL)
  })
})
