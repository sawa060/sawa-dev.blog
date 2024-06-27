import Link from 'next/link';
import {FaRegCopyright} from 'react-icons/fa6';
import {getApp} from '@/lib/newt';
import styles from '@/styles/Footer.module.css';

export async function Footer() {
  const app = await getApp();

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_Inner}>
        <Link className={styles.SiteName} href="/privacy">
          免責事項・プライバシーポリシー
        </Link>
        <span className={styles.CopyRight}>
          <FaRegCopyright />
          {app.name} {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
