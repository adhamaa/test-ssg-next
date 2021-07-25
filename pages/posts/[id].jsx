import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./posts.module.css";

const post = ({ post }) => {
  const { locale } = useRouter();
  return (
    <>
      <div className={styles.card}>
        <h2 style={{ textTransform: "capitalize" }}>{post.title}</h2>
        <hr />
        <p>{post.body}</p>
        <br />
        <Link className={styles.btn} href={"/posts"} locale={locale}>
          BACK
        </Link>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return {
    paths: paths || [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export default post;
