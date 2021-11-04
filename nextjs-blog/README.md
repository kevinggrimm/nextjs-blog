This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### Assets
- The `public` directory is also useful for `robots.txt`, Google Site Verification, and any other static assets. Check out the documentation for Static File Serving to learn more.


#### Using the Image Component
- Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.

### Metadata
- If you want to customize the `<html>` tag, for example to add the `lang` attribute, you can do so by creating a `pages/_document.js` file. Learn more in the custom `Document` documentation.
    - https://nextjs.org/docs/advanced-features/custom-document

### CSS
- Furthermore, Next.js’s code splitting feature works on CSS Modules as well. It ensures the minimal amount of CSS is loaded for each page. This results in smaller bundle sizes.

- CSS Modules are extracted from the JavaScript bundles at build time and generate `.css` files that are loaded automatically by Next.js.

### Pre-rendering and Data Fetching
- Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called **hydration**.)

- If your app is a plain React.js app (without Next.js), there’s no pre-rendering, so you won’t be able to see the app if you disable JavaScript.

#### Per-page Basis
Iportantly, Next.js lets you choose which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.


#### Static Generation
- The pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
- Can be done with and without data

**Without data:** 
- 

**With data:** 
- for some pages, you might not be able to render the HTML without first fetching some external data. Maybe you need to access the file system, fetch external API, or query your database at build time.


#### Server-side Rendering
- the pre-rendering method that generates the HTML on each request.
- In development mode (when you run npm run dev or yarn dev), every page is pre-rendered on each request — even for pages that use Static Generation.

### Fetching data
- https://nextjs.org/docs/basic-features/data-fetching
- When you export a page component, you can also export an `async` function called `getStaticProps`
- `getStaticProps` runs at build time in production, and...
- Inside the function, you can fetch external data and send it as props to the page
- In development mode, `getStaticProps` runs on each request instead

**NOTE:** You might have noticed that each markdown file has a metadata section at the top containing title and date. This is called YAML Front Matter, which can be parsed using a library called gray-matter.
- Markdown files can be used to render static content (i.e., landing page info / features / pricing info) on pages
- Can likely use a similar concept for mapping files


### Dynamic Routes
- Each **page path** can depend on external data
- You can statically generate pages with paths that depend on external data
- Async function `getStaticPaths`
    - Returns a list of possible `id` values
- Also call `getStaticProps` to fetch data for that given `id`
    - Passed `params`, which contains `id`

**NOTE:** Would want these for each key

#### Render Markdown
`npm install remark@13 remark-html@13` <!-- convert markdown to html>
`npm install date-fns` <!-- format dates>
- https://date-fns.org/v2.16.1/docs/format


[More examples of dynamic routs](https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details)

### API Routes
- Can create API endpoints as serverless functions
- Create functions inside the `pages/api` directory


### Deployment Options
- Vercel is pitched as suggested option
- **TODO:** Review deployment options/tradeoffs of using AWS