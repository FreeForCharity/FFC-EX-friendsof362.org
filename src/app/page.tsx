import type { Metadata } from 'next'
import HomePage from '@/components/home-page'

export const metadata: Metadata = {
  title: 'Friends of Pack 362 Inc. | Supporting Youth Scouting in East Meadow',
  description:
    'Friends of Pack 362 Inc. is a 501(c)(3) charitable organization supporting Cub Scout Pack 362 and youth scouting programs in East Meadow, New York.',
  openGraph: {
    title: 'Friends of Pack 362 Inc. | Supporting Youth Scouting in East Meadow',
    description:
      'A 501(c)(3) charitable organization supporting Cub Scout Pack 362 and youth scouting in East Meadow, New York.',
  },
}

export default function Page() {
  return <HomePage />
}
