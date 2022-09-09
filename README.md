![Haunted](docs/assets/logo.png)

A blog theme for Ghost as headless CMS.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fcoditva%2FHaunted&env=GHOST_URL,CONTENT_KEY,SUBSCRIBE_FORM&project-name=haunted-theme-ghost)

# Features
* Responsive.
* Dark theme based on media query.
* Support for posts and pages from [Ghost CMS][5].
* Pre-fetches pages content using NextJS's `next/link` (even inside posts!).
* Subscription using [Buttondown][1] newsletters.

## Up next
* Support for `next/images` inside posts.
* Tags.
* Author pages.
* Better test coverage.

# Getting Started

This theme is built using **NextJS** and **TailwindCSS**. The whole website is
statically rendered to provide optimal performance. This, along with edge
network provides like [Vercel][3] or [Netlify][4], can be leveraged to provide
the best experience possible for a blog or website.

Additionally, there is provision to provide newsletter subscription using
[Buttondown][1].

## Configuring build environment

To deploy this theme, start by setting up the environment:

- Configure the environment variables defined in the [`config.ts`](config.ts)
file. To get your content key, follow the [Ghost guide][2].
- If you're using a Ghost installation which does not support the content API
v4, you might also need to change the `ghost.apiVersion` to the appropriate
value.

## Configuring images

You might also need to configure [`next.config.js`](next.config.js) for image
domains and such if you have images from domains other than *Unsplash* and your
own ghost installation server.

```javascript
const imageDomains = [
  process.env.GHOST_URL,
  'images.unsplash.com',
  // your domains here
];
```

*If you're using Vercel or Netlify, you don't need to follow the steps below.
They support NextJS out of the box.*

## Build the theme

To create a production build, simply punch in these commands:
```bash
npm install --only production
npm run build
```

## Start the server
Finally, start the server. This would start listening on port `3000`.
```bash
npm start
```

*You might need to configure any reverse proxy or load balancer to forward to
this port.*

# Contributing

Get started by running the server in development mode. This provides hot
reloading of the app with every change. This would start listening on port
`3000`.

```bash
npm run dev
```

## Running tests
The tests are present in the [`tests/`](tests) directory. They are divided into
unit tests and integration tests. The tests follow the similar directory
structure as the `lib/components/` or `lib/stores/` directories.

You can run the whole test suite or only unit or integration tests:
```bash
npm run test
npm run test-unit
npm run test-integration
```

[1]: https://buttondown.email/
[2]: https://ghost.org/integrations/custom-integrations/#copy-api-key
[3]: https://vercel.com/
[4]: https://www.netlify.com/
[5]: https://ghost.org/docs/jamstack/


## License
[MIT](LICENSE)
