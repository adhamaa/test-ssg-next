import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./posts.module.css";

const posts = ({ data }) => {
  const { locale } = useRouter();
  console.log("locale:", locale);
  return (
    <>
      <ol>
        {data.map((post, i) => (
          <li key={i} className={styles.link}>
            <Link
              href={`/posts/${encodeURIComponent(post.id)}`}
              locale={locale}
            >
              <a className={styles.link}>{post.title}</a>
            </Link>
          </li>
        ))}
        <br />
      </ol>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default posts;
