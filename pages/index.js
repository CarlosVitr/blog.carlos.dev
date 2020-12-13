import Link from "next/link";

import { Layout, Bio, SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio className="my-14" />
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug} className="mb-10">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between">
            <Link href={"/post/[slug]"} as={`/post/${slug}`}>
              <a className="text-lg font-bold text-primary font-display">
                {title}
              </a>
            </Link>
            <span className="flex-1 hidden mx-5 border-b-2 border-black border-dashed md:flex dark:border-gray-300"></span>
            <span className="my-2 text-sm md:my-0 ">{date}</span>
          </header>
          <section>
            <p className="mb-8 text-lg">{description}</p>
          </section>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
