import Image from 'next/image';
import Link from 'next/link';
import styles from './CollectionCard.module.css';

export default function CollectionCard({ collection }) {
  return (
    <Link
      href={`/collections?category=${collection.slug}`}
      className={styles.card}
      id={`collection-${collection.id}`}
    >
      <div className={styles.cardImageWrap}>
        <Image
          src={collection.image}
          alt={`${collection.name} collection`}
          fill
          className={styles.cardImage}
          sizes="(max-width: 640px) 100vw, 50vw"
          quality={85}
        />
      </div>
      <div className={styles.cardOverlay} />
      <div className={styles.cardContent}>
        <p className={styles.cardTagline}>{collection.tagline}</p>
        <h3 className={styles.cardTitle}>{collection.name}</h3>
        <p className={styles.cardDesc}>{collection.description}</p>
        <span className={styles.cardLink}>
          Explore
          <svg className={styles.cardLinkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function CollectionGrid({ collections }) {
  return (
    <div className={styles.grid}>
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
}
