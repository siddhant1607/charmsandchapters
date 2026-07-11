import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Welcome to Charms & Chapters">
      {/* Background Image */}
      <div className={styles.heroBg}>
        <Image
          src="/images/hero-lifestyle.png"
          alt="Curated lifestyle flat lay with leather journal, watercolor bookmarks, gold waist chain, and bag charms on warm linen"
          fill
          priority
          quality={90}
          className={styles.heroBgImage}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
      </div>

      {/* Floating Decorative Elements */}
      <div className={`${styles.heroDecor} ${styles.decorTopLeft}`}>
        <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
          <path d="M20 0l4.47 13.53L38 18l-13.53 4.47L20 36l-4.47-13.53L2 18l13.53-4.47z" opacity="0.6"/>
        </svg>
      </div>
      <div className={`${styles.heroDecor} ${styles.decorTopRight}`}>
        <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
          <path d="M20 0l4.47 13.53L38 18l-13.53 4.47L20 36l-4.47-13.53L2 18l13.53-4.47z" opacity="0.6"/>
        </svg>
      </div>
      <div className={`${styles.heroDecor} ${styles.decorBottomLeft}`}>
        <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
          <path d="M20 0l4.47 13.53L38 18l-13.53 4.47L20 36l-4.47-13.53L2 18l13.53-4.47z" opacity="0.6"/>
        </svg>
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <p className={styles.heroLabel}>✦ LIMITED COLLECTION ✦</p>
        <h1 className={styles.heroTitle}>
          Charms <span className={styles.heroTitleAccent}>&</span> Chapters
        </h1>
        <p className={styles.heroSubtitle}>
          Unwind. Write. Repeat. Little quotes, big motivation. Subtle, stylish waist chains, and little bag charms with big impact.
        </p>
        <div className={styles.heroCta}>
          <Link href="/collections" className="btn btn-primary">
            Explore the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <svg className={styles.scrollChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
}
