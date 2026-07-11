import ScrollReveal from '../ScrollReveal/ScrollReveal';
import styles from './BrandValues.module.css';

const VALUES = [
  {
    title: 'Premium Quality',
    description: 'Pretty covers, quality pages, and delicate accessories made to inspire.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: 'Perfect for Gifts',
    description: 'For you or someone special, find a touch of charm for every mood and place.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 12 20 22 4 22 4 12"></polyline>
        <rect x="2" y="7" width="20" height="5"></rect>
        <line x1="12" y1="22" x2="12" y2="7"></line>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
      </svg>
    ),
  },
  {
    title: 'Elevate Every Look',
    description: 'Make a subtle, stylish statement. Minimal yet meaningful designs to grace your style.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
];

export default function BrandValues() {
  return (
    <section className={styles.section} id="brand-values" aria-label="Our values">
      <div className={styles.inner}>
        <ScrollReveal>
          <div className="text-center">
            <p className="section-label">✦ Charms & Chapters ✦</p>
            <h2 className="section-title">LIMITED COLLECTION</h2>
          </div>
        </ScrollReveal>
        <div className={styles.grid}>
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.title} delay={i + 1}>
              <div className={styles.value}>
                <div className={styles.iconWrap}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
