import Image from 'next/image';
import Link from 'next/link';
import {Suspense} from 'react';
import {FaGithub, FaXTwitter} from 'react-icons/fa6';
import {SearchField, SearchFieldFallback} from '@/components/SearchField';
import {GITHUB_URL, TWITTER_URL} from '@/helpers/const';
import {getApp} from '@/lib/newt';
import styles from '@/styles/Header.module.css';

export async function Header() {
  const app = await getApp();

  return (
    <header className={styles.Header}>
      <div className={styles.Header_Inner}>
        <Link className={styles.Title} href="/">
          {app.icon?.type === 'emoji' && (
            <span className={styles.Title_Icon}>{app.icon.value}</span>
          )}
          {app.icon?.type === 'image' && (
            <span className={styles.Title_Icon}>
              <Image src={app.icon.value} alt="" width="26" height="26" />
            </span>
          )}
          <div className={styles.Title_Text}>{app.name || app.uid}</div>
        </Link>
        <div className={styles.Link}>
          <a href={GITHUB_URL} rel="noreferrer noopener" target="_blank">
            <FaGithub size={20} />
          </a>
        </div>
        <div className={styles.Link}>
          <a href={TWITTER_URL} rel="noreferrer noopener" target="_blank">
            <FaXTwitter size={20} />
          </a>
        </div>
        <Suspense fallback={<SearchFieldFallback />}>
          <SearchField />
        </Suspense>
      </div>
    </header>
  );
}
