import Image from 'next/image';
import styles from './ProductCard.module.css';

const INSTAGRAM_URL = 'https://instagram.com/charms_andd_chapters';

const BADGE_STYLES = {
  'Bestseller': styles.badgeBestseller,
  'New': styles.badgeNew,
  'Trending': styles.badgeTrending,
  'Limited': styles.badgeLimited,
  'Popular': styles.badgePopular,
};

export default function ProductCard({ product }) {
  return (
    <div className={styles.card} id={`product-${product.id}`}>
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={styles.image}
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
          quality={80}
        />
        {product.badge && (
          <span className={`${styles.badge} ${BADGE_STYLES[product.badge] || styles.badgeBestseller}`}>
            {product.badge}
          </span>
        )}

      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewBtn}
        >
          DM to Order
        </a>
      </div>
    </div>
  );
}

export function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
