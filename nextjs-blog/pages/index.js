import Head from "next/head";
import Link from "next/link"
import Date from '../components/dates'
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul classname={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}


// `getStaticProps` can only be exported from a page
// You can't export it from non-page files
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { 
    props: {
      allPostsData
    }
  }
}


// Server-side rendering - need to export `getServerSideProps`
// export async function getServerSideProps(context) {
  // return {
    // props: {
      // Props for your component
    // }
  // }
// }

/*
Client-side Rendering
- Statically generate (pre-render) parts of the page that do not require external data.
- When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

SWR
- It handles caching, revalidation, focus tracking, refetching on interval, and more. We won’t cover the details here, but here’s an example usage:

https://swr.vercel.app/
*/
// import useSWR from 'swr'
// function Profile() {
  // const { data, error } = useSWR('/api/user', fetch)
// 
  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>
  // return <div>hello {data.name}</div>
// }

