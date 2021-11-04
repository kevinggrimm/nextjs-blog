// req = HTTP incoming, res = HTTP server response
// https://nextjs.org/docs/api-routes/introduction


/*
    API ROUTES
    1. Do not Fetch an API route from `getStaticProps` or `getStaticPaths`
    - Write server-side code directly in `getStaticProps` or `getStaticPaths`
    - Or, call a helper function

    2. Use Case: Handling Form Input
    - Create a form on your page and have it send a POST req to your API route
    - Can then write code to directly save it to your DB

    export default function handler(req, res) {
        const email = req.body.email
        // Save to db etc
    }

    Other use cases:
    - Securely communicate w/ a 3rd party API (e.g., Stripe)
        - TODO --> Review whether Stripe backend can be integrated into Next app
    - Previewing draft content from your CMS

    3. Preview Mode
    - Uses API routes to render pages at request time when fetching data from a
    headless CMS (e.g., Sanity)
    - https://nextjs.org/docs/basic-features/pages#static-generation-recommended
    - NOTE --> Not sure how this would be used at the moment
    - TODO --> Review Headless CMS use cases; see if there is a need 

    4. Dynamic API Routes
    - https://nextjs.org/docs/api-routes/dynamic-api-routes
    - Follow the same naming rules used for `pages`

    // `pages/api/post/[pid].js`
    export default function handler(req, res) {
        const { pid } = req.query
        res.end(`Post: ${pid}`)
    }
    ==> Request to `/api/post/abc ==> `Post: abc`

    - NOTE --> Use for dynamic calls to key pages
    - TODO --> Review whether there is any crossover between this and the serverless stack backend / Amplify frontend

    Related ==> Dynamic Routes
    - https://nextjs.org/docs/routing/dynamic-routes

*/
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
}
