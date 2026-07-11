import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Story',
  description: 'Learn about Charms & Chapters. Diaries, bookmarks, bag charms, and waist chains. Sourced and curated with love.',
};

const VALUES = [
  {
    number: '01',
    title: 'Premium Quality',
    description: 'Pretty covers, quality pages, and beautiful marks for every chapter, crafted to last.',
  },
  {
    number: '02',
    title: 'Perfect for Gifts',
    description: 'For you or someone special, find a touch of gold that speaks elegance and brings joy.',
  },
  {
    number: '03',
    title: 'Elevate Every Look',
    description: 'Make a subtle, stylish statement. Minimal yet meaningful designs to grace your style.',
  },
  {
    number: '04',
    title: 'Made to Inspire',
    description: 'Unwind. Write. Repeat. Bookmarks with little quotes and big motivation for your days.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <ScrollReveal>
            <p className="section-label">✦ Charms & Chapters ✦</p>
            <h1 className={styles.pageTitle}>Diaries & Charms</h1>
            <p className={styles.pageSubtitle}>
              &ldquo;Minimal Yet Meaningful&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Brand Story */}
      <section className={styles.story} aria-label="Our story">
        <div className={styles.storyInner}>
          <ScrollReveal>
            <div className={styles.storyImage}>
              <Image
                src="/images/brand-story.png"
                alt="A warm scene of hands writing in a leather journal at a sunlit desk"
                fill
                className={styles.storyImg}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className={styles.storyText}>
              <h2>Perfect For Every Mood</h2>
              <p>
                Charms & Chapters brings you a curated collection of beautiful everyday objects: 
                diaries, bookmarks, bag charms, and waist chains. Sourced and selected with care, 
                these are little details designed to add a touch of charm and elegance to your everyday life.
              </p>
              <p>
                Whether you want to unwind, write, and repeat in our diaries with pretty covers and 
                quality pages, or make a subtle, stylish statement with gold waist chains that speak 
                elegance, we have the perfect collection for you or someone special.
              </p>
              <p>
                Add a touch of charm to every bag with our trending bag charms (little details, big impact!), 
                and mark your place in style with bookmarks featuring little quotes and big motivation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection} aria-label="Our values">
        <div className={styles.valuesInner}>
          <ScrollReveal>
            <div className="text-center">
              <p className="section-label">What We Stand For</p>
              <h2 className="section-title" style={{ fontFamily: 'var(--font-display), serif' }}>Our Values</h2>
            </div>
          </ScrollReveal>
          <div className={styles.valuesGrid}>
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.number} delay={Math.min(i + 1, 4)}>
                <div className={styles.valueCard}>
                  <div className={styles.valueNumber}>{value.number}</div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} aria-label="Start exploring">
        <div className={styles.ctaInner}>
          <ScrollReveal>
            <p className="section-label">✦ Don&apos;t miss it! ✦</p>
            <h2 className={styles.ctaTitle}>GRACE YOUR STYLE</h2>
            <p className={styles.ctaDesc}>
              Explore our collections for diaries, bookmarks, bag charms, and waist chains.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/collections" className="btn btn-primary">
                Shop the Collection
              </Link>
              <a
                href="https://instagram.com/charms_andd_chapters"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Follow on Instagram
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
