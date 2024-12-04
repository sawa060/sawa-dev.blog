import Link from 'next/link';
import {notFound} from 'next/navigation';
import {htmlToText} from 'html-to-text';
import {FacebookShareButton} from '@/components/FacebookShareButton';
import {TwitterShareButton} from '@/components/TwitterShareButton';
import {formatDate} from '@/lib/date';
import {getArticles, getArticle, getPreviousArticle, getNextArticle} from '@/lib/newt';
import styles from '@/styles/Article.module.css';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const {articles} = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
export const dynamicParams = false;

export async function generateMetadata({params}: Props) {
  const {slug} = params;
  const article = await getArticle(slug);

  const title = article?.meta?.title || article?.title;
  const bodyDescription = htmlToText(article?.body || '', {
    selectors: [{selector: 'img', format: 'skip'}],
  }).slice(0, 200);
  const description = article?.meta?.description || bodyDescription;
  const ogImage = article?.meta?.ogImage?.src;

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      images: ogImage,
    },
  };
}

export default async function Page({params}: Props) {
  const {slug} = params;
  const article = await getArticle(slug);
  if (!article) {
    notFound();
  }

  const prevArticle = await getPreviousArticle(article);
  const nextArticle = await getNextArticle(article);

  return (
    <main className={styles.Container}>
      <article className={styles.Article}>
        <div className={styles.Article_Header}>
          <h1 className={styles.Article_Title}>{article.title}</h1>
          <p>{formatDate(article._sys.createdAt)}</p>
          <ul className={styles.Article_Tags}>
            {(article.tags || []).map((tag) => (
              <li key={tag._id}>
                <Link href={`/tags/${tag.slug}`}>#{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.Article_Body} dangerouslySetInnerHTML={{__html: article.body}}></div>
        <div className={styles.SnsShare}>
          <p className={styles.SnsShare_Label}>Share this post</p>
          <ul className={styles.SnsShare_List}>
            <li>
              <TwitterShareButton title={article.title} />
            </li>
            <li>
              <FacebookShareButton />
            </li>
          </ul>
        </div>
        <nav className={styles.Links}>
          {prevArticle && (
            <Link className={styles.Links_Previous} href={`/articles/${prevArticle.slug}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="#333333"
              >
                <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
              </svg>
              Previous post
            </Link>
          )}
          {nextArticle && (
            <Link className={styles.Links_Next} href={`/articles/${nextArticle.slug}`}>
              Next post
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="#333333"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                </g>
              </svg>
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}
