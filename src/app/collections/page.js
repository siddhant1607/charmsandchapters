'use client';

import { Suspense, useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductGrid } from '@/components/ProductCard/ProductCard';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { products, collections } from '@/data/products';
import styles from './page.module.css';

const TABS = [
  { slug: 'all', label: 'All' },
  ...collections.map((c) => ({ slug: c.slug, label: c.name })),
];

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeTab, setActiveTab] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('default');

  // Sync tab when URL search params change
  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveTab(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = activeTab === 'all'
      ? [...products]
      : products.filter((p) => p.collection === activeTab);

    if (sortBy === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [activeTab, sortBy]);

  return (
    <>
      {/* Page Header */}
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <ScrollReveal>
            <p className="section-label">✦ Charms & Chapters ✦</p>
            <h1 className={styles.pageTitle}>Our Collections</h1>
            <p className={styles.pageSubtitle}>
              Pretty covers, quality pages, and delicate accessories made to inspire. 
              Minimal yet meaningful designs.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className={styles.filters}>
        <div className={styles.filtersInner} role="tablist" aria-label="Filter by collection">
          {TABS.map((tab) => (
            <button
              key={tab.slug}
              className={`${styles.filterTab} ${activeTab === tab.slug ? styles.filterTabActive : ''}`}
              onClick={() => setActiveTab(tab.slug)}
              role="tab"
              aria-selected={activeTab === tab.slug}
              id={`filter-${tab.slug}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <section className={styles.productsSection} aria-label="Products">
        <div className={styles.productsInner}>
          <div className={styles.resultsInfo}>
            <span className={styles.resultsCount}>
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products"
              id="sort-products"
            >
              <option value="default">Default Sort</option>
              <option value="name-asc">Alphabetically: A-Z</option>
              <option value="name-desc">Alphabetically: Z-A</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>✨</div>
              <h3 className={styles.emptyTitle}>Coming Soon</h3>
              <p className={styles.emptyDesc}>
                New pieces are being curated for this collection. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={
      <div style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', textAlign: 'center' }}>
        <p>Loading collections...</p>
      </div>
    }>
      <CollectionsContent />
    </Suspense>
  );
}
