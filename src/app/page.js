import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import { CollectionGrid } from '@/components/CollectionCard/CollectionCard';
import { ProductGrid } from '@/components/ProductCard/ProductCard';
import BrandValues from '@/components/BrandValues/BrandValues';
import InstagramFeed from '@/components/InstagramFeed/InstagramFeed';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { collections, getFeaturedProducts } from '@/data/products';
import styles from './page.module.css';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Decorative Divider */}
      <div className={styles.sectionDivider} aria-hidden="true">
        <span className={styles.dividerStar}>✦</span>
      </div>

      {/* Section 2: Brand Introduction */}
      <section className={styles.brandIntro} id="brand-intro" aria-label="About the brand">
        <div className={styles.brandIntroInner}>
          <ScrollReveal className={styles.brandIntroText}>
            <p className={styles.brandIntroLabel}>Charms & Chapters</p>
            <h2 className={styles.brandIntroTitle} style={{ fontFamily: 'var(--font-display), serif' }}>
              Unwind. Write. Repeat.
            </h2>
            <p className={styles.brandIntroDesc}>
              A touch of gold that speaks elegance, and little quotes that bring big motivation. 
              Our collection features diaries with pretty covers, quality pages, and endless ideas.
            </p>
            <p className={styles.brandIntroDesc}>
              Make a subtle, stylish statement with delicate gold waist chains, or add a touch of charm 
              to every bag with our trending bag charms — little details, big impact!
            </p>
            <blockquote className={styles.brandIntroQuote} style={{ fontFamily: 'var(--font-accent), serif' }}>
              &ldquo;Minimal yet meaningful. Beautiful marks for every chapter.&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className={styles.brandIntroImage}>
              <Image
                src="/images/brand-story.png"
                alt="Hands writing in a beautiful leather journal at a sunlit desk with dried flowers and bookmarks"
                fill
                className={styles.brandIntroImg}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Collections */}
      <section className={styles.collectionsSection} id="collections">
        <div className={styles.collectionsInner}>
          <ScrollReveal>
            <div className={styles.collectionsHeader}>
              <p className="section-label">✦ Don&apos;t miss it! ✦</p>
              <h2 className="section-title" style={{ fontFamily: 'var(--font-display), serif' }}>Our Collections</h2>
              <p className="section-subtitle mx-auto">
                Diaries, bookmarks, waist chains, and bag charms made to add a little magic to your everyday.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <CollectionGrid collections={collections} />
          </ScrollReveal>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className={styles.sectionDivider} aria-hidden="true">
        <span className={styles.dividerStar}>✦</span>
      </div>

      {/* Section 4: Featured Products */}
      <section className={styles.featuredSection} id="featured-products" aria-label="Featured products">
        <div className={styles.featuredInner}>
          <ScrollReveal>
            <div className={styles.featuredHeader}>
              <div className={styles.featuredHeaderText}>
                <p className="section-label">✦ Trending ✦</p>
                <h2 className={styles.featuredTitle || 'section-title'} style={{ fontFamily: 'var(--font-display), serif' }}>Grace Your Style</h2>
                <p className="section-subtitle">Aesthetic designs and premium quality details for you or someone special.</p>
              </div>
              <Link href="/collections" className="btn btn-secondary">
                View All
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ProductGrid products={featuredProducts} />
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Brand Values */}
      <BrandValues />

      {/* Section 6: Instagram Feed */}
      <InstagramFeed />
    </>
  );
}
