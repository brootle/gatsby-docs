$ npm run deploy

https://brootle.github.io/gatsby-docs/

Links to static remain unprefixed even with --prefix-paths flag enabled (gatsby-image?) 
https://github.com/gatsbyjs/gatsby/issues/8479#issuecomment-576067799

and https://github.com/gatsbyjs/gatsby/issues/21975

Solution to path prefix problem https://github.com/gatsbyjs/gatsby/issues/21975#issuecomment-650573201

I was able to use a Gatsby function withPrefix to solve this without having to incorporate the production/development check.

import { withPrefix } from 'gatsby'
Had to wrap each reference to a static asset in this function call. For example:

<link
  rel="apple-touch-icon"
  sizes="57x57"
  href={withPrefix('/apple-icon-57x57.png')}
/>
This solved the issue, assets load properly with the correct paths in both development and production mode.