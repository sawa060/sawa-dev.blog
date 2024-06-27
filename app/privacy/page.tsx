import {SITE_NAME, SITE_URL} from '@/helpers/const';
import styles from '@/styles/Privacy.module.css';

export default function Page() {
  return (
    <div className={styles.Container}>
      <div className={styles.Container_Inner}>
        <div>
          <h1>免責事項・プライバシーポリシー</h1>
          <p className={styles.Text}>
            {SITE_NAME}({SITE_URL}
            )(以下「当ブログ」)における免責事項・プライバシーポリシーを以下の通り記載します。
          </p>

          <h2 className={styles.SubTitle}>個人情報の利用目的</h2>
          <p className={styles.Text}>
            当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
            <br />
            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
          </p>

          <h2 className={styles.SubTitle}>免責事項</h2>
          <p className={styles.Text}>
            当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            <br />
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            <br />
            また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
          </p>

          <h2 className={styles.SubTitle}>Cookieの使用について</h2>
          <p className={styles.Text}>
            当ブログでは、広告配信やアクセス解析のためにCookieを使用しています。
            <br />
            Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。
            <br />
            Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。
          </p>

          <h2 className={styles.SubTitle}>アクセス解析ツール</h2>
          <p className={styles.Text}>
            当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>

          <h2 className={styles.SubTitle}>著作権について</h2>
          <p className={styles.Text}>
            当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。
            <br />
            当ブログは著作権や肖像権の侵害を目的としたものではありません
          </p>
        </div>
      </div>
    </div>
  );
}
