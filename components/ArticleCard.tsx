import Link from 'next/link';
import {formatDate} from '@/lib/date';
import styles from '@/styles/ArticleCard.module.css';
import type {Article} from '@/types/article';

export function ArticleCard({article}: {article: Article}) {
  return (
    <Link className={styles.Article} href={`/articles/${article.slug}`}>
      <div className={styles.Article_Data}>
        <p>{formatDate(article._sys.createdAt)}</p>
        <h3 className={styles.Article_Title}>{article.title}</h3>
        <ul className={styles.Article_Tags}>
          {(article.tags || []).map((tag) => (
            <li key={tag._id}>#{tag.name}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
