import Link from 'next/link'
import { CANDID_PROFILE_URL, ORGANIZATION_EIN } from '@/lib/organization'

const programAreas = [
  {
    title: 'Youth Scouting Programs',
    description:
      'Supporting Cub Scout Pack 362 with resources that help deliver age-appropriate scouting experiences for youth in kindergarten through fifth grade.',
  },
  {
    title: 'Character & Leadership',
    description:
      'Promoting citizenship, teamwork, responsibility, and confidence through structured scouting activities and community-minded values.',
  },
  {
    title: 'Outdoor & Hands-On Learning',
    description:
      'Helping fund opportunities for outdoor adventure, skill-building, and practical learning experiences that complement the scouting program.',
  },
  {
    title: 'Community Service',
    description:
      'Encouraging service to others and strengthening connections between young scouts, families, and the broader community.',
  },
]

const faqItems = [
  {
    question: 'What is Friends of Pack 362 Inc.?',
    answer:
      'Friends of Pack 362 Inc. is a nonprofit organization formed to support Cub Scout Pack 362. The organization helps steward charitable resources that benefit local youth scouting activities in East Meadow, New York.',
  },
  {
    question: 'Is the organization tax-exempt?',
    answer:
      'Friends of Pack 362 Inc. is recognized as a 501(c)(3) charitable organization. Contributions may be tax-deductible to the extent allowed by law.',
  },
  {
    question: 'Where can I verify nonprofit information?',
    answer:
      'Public nonprofit profile information is available through Candid, including registration details and transparency resources for donors and community partners.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section
        id="hero"
        className="bg-primary text-paper px-4 py-16 md:py-24"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto max-w-[var(--ffc-container)] text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow md:text-base">
            501(c)(3) Charitable Organization
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            Friends of Pack 362 Inc.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-paper/90 md:text-xl">
            Supporting youth scouting in East Meadow, New York through charitable stewardship,
            community partnership, and resources that help Cub Scout Pack 362 deliver meaningful
            programs for local families.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#mission"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent/90"
            >
              Our Mission
            </Link>
            <Link
              href={CANDID_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-paper px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              View Candid Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="px-4 py-16 md:py-20" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-[var(--ffc-container)]">
          <h2 id="mission-heading" className="text-3xl font-bold text-primary md:text-4xl">
            Our Mission
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-ink/80">
              Friends of Pack 362 Inc. exists to support Cub Scout Pack 362 and the youth scouting
              experience in Nassau County. As a charitable organization affiliated with the Boy
              Scouts of America program, we help ensure scouting remains accessible, well-supported,
              and focused on positive youth development.
            </p>
            <p className="text-lg leading-relaxed text-ink/80">
              Our work centers on responsible stewardship of charitable resources—raising and
              directing support toward scouting activities that build character, encourage service,
              and create opportunities for young people to learn, lead, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section
        id="programs"
        className="bg-primary/5 px-4 py-16 md:py-20"
        aria-labelledby="programs-heading"
      >
        <div className="mx-auto max-w-[var(--ffc-container)]">
          <h2 id="programs-heading" className="text-3xl font-bold text-primary md:text-4xl">
            What We Support
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80">
            Scouting organizations like Friends of Pack 362 Inc. play a vital role in helping local
            packs deliver programs that reach beyond the meeting room—from skill-building and
            outdoor adventure to service projects that benefit the community.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {programAreas.map((area) => (
              <li
                key={area.title}
                className="rounded-xl border border-primary/10 bg-paper p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-primary">{area.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{area.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Events placeholder */}
      <section id="events" className="px-4 py-16 md:py-20" aria-labelledby="events-heading">
        <div className="mx-auto max-w-[var(--ffc-container)] text-center">
          <h2 id="events-heading" className="text-3xl font-bold text-primary md:text-4xl">
            Community Events
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
            Pack activities, family events, and community gatherings are coordinated through Cub
            Scout Pack 362. Check with your local pack leadership for upcoming meetings,
            fundraisers, and scouting events in the East Meadow area.
          </p>
        </div>
      </section>

      {/* Donate & Volunteer */}
      <section
        id="donate"
        className="bg-primary px-4 py-16 text-paper md:py-20"
        aria-labelledby="donate-heading"
      >
        <div className="mx-auto max-w-[var(--ffc-container)]">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 id="donate-heading" className="text-3xl font-bold md:text-4xl">
                Support Our Work
              </h2>
              <p className="mt-4 leading-relaxed text-paper/90">
                Charitable gifts to Friends of Pack 362 Inc. help sustain scouting programs for
                local youth. As a 501(c)(3) organization, contributions may be tax-deductible to the
                extent permitted by law.
              </p>
              <p className="mt-4 text-sm text-paper/75">EIN: {ORGANIZATION_EIN}</p>
            </div>
            <div id="volunteer">
              <h2 className="text-3xl font-bold md:text-4xl">Get Involved</h2>
              <p className="mt-4 leading-relaxed text-paper/90">
                Scouting thrives when families and community members volunteer their time and
                talents. Whether through pack activities, fundraising support, or organizational
                stewardship, there are many ways to help youth scouting succeed in East Meadow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="px-4 py-16 md:py-20"
        aria-labelledby="faq-heading"
        aria-describedby="faq-description"
      >
        <div className="mx-auto max-w-[var(--ffc-container)]">
          <h2 id="faq-heading" className="text-3xl font-bold text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p id="faq-description" className="mt-4 max-w-3xl text-lg text-ink/80">
            Key information about Friends of Pack 362 Inc. and how the organization supports local
            scouting.
          </p>
          <dl className="mt-10 space-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <dt className="text-xl font-semibold text-primary">{item.question}</dt>
                <dd className="mt-2 leading-relaxed text-ink/75">{item.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10">
            <Link
              href={CANDID_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              View the full nonprofit profile on Candid
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
