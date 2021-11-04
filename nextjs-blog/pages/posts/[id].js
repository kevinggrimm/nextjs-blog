import Head from 'next/head'
import Layout from "../../components/layout";
import Date from '../../components/dates';
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from '../../styles/utils.module.css'

/*
ROUTING
- To access, import `useRouter` from `next/router`

*/


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

/*
getStaticPaths can fetch data from any data source:
- API
- Database

Dev -- runs on every request
Prod -- runs at build time

`fallback`
- false: any paths not returned by getStaticPaths will result in a 404
- true: nextjs will statically generate the path in the background
- blocking: new paths are server-side rendered w/ getStaticProps and cached
- https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
*/
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return { 
        props: {
            postData
        }
    }
}