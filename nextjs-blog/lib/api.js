// Next polyfills 'fetch()' on both the client and server

export async function getSortedPostsData() {
    const res = await fetch('..')
    return res.json()
}

// Can also query DynamoDB
import somedatabaseSDK from 'somedatabaseSDK'

const databaseClient = somedatabaseSDK.createClient("...")

export async function getDatabasePosts() {
    return databaseClient.query('SELECT...')
}