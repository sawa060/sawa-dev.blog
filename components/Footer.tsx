import Image from 'next/image';
import Link from 'next/link';
import {FaGithub, FaXTwitter} from 'react-icons/fa6';
import {GITHUB_URL, TWITTER_URL} from '@/helpers/const';
import {getApp} from '@/lib/newt';
import styles from '@/styles/Footer.module.css';

export async function Footer() {
  const app = await getApp();

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_Inner}>
        <Link className={styles.SiteName} href="/">
          {app.icon?.type === 'emoji' && (
            <span className={styles.SiteName_Icon}>{app.icon.value}</span>
          )}
          {app.icon?.type === 'image' && (
            <span className={styles.SiteName_Icon}>
              <Image src={app.icon.value} alt="" width="23" height="23" />
            </span>
          )}
          <div className={styles.SiteName_Text}>{app.name || app.uid}</div>
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
      </div>
    </footer>
  );
}
