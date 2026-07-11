import Image from 'next/image';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import styles from './InstagramFeed.module.css';

const INSTAGRAM_URL = 'https://instagram.com/charms_andd_chapters';

const FEED_IMAGES = [
  { src: '/images/collections/diaries.jpeg', alt: 'Diaries collection' },
  { src: '/images/collections/bookmarks.jpeg', alt: 'Bookmarks collection' },
  { src: '/images/collections/bag-charms.jpeg', alt: 'Bag charms collection' },
  { src: '/images/collections/waist-chains.jpeg', alt: 'Waist chains collection' },
  { src: '/images/brand-story.png', alt: 'Writing in a journal' },
  { src: '/images/gift-curation.png', alt: 'Gift curation scene' },
  { src: '/images/collection-stationery.png', alt: 'Stationery flat lay' },
  { src: '/images/collection-accessories.png', alt: 'Accessories on marble' },
];

export default function InstagramFeed() {
  return (
    <section className={styles.section} id="instagram-feed" aria-label="Instagram feed">
      <div className={styles.inner}>
        <ScrollReveal>
          <div className="text-center">
            <p className="section-label">Follow the Story</p>
            <h2 className="section-title">@charms_andd_chapters</h2>
            <p className="section-subtitle mx-auto">
              A glimpse into the Charms & Chapters world. Follow along for new drops, inspiration, and behind-the-scenes.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {FEED_IMAGES.map((img, i) => (
            <ScrollReveal key={img.src} delay={Math.min(i + 1, 4)}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
                aria-label={`View on Instagram: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={styles.itemImage}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  quality={75}
                />
                <div className={styles.itemOverlay}>
                  <svg className={styles.itemIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.handle}
          >
            <svg className={styles.handleIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Follow @charms_andd_chapters
          </a>
        </div>
      </div>
    </section>
  );
}
