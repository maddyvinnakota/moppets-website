import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

import BannerRegion from '../components/bannerRegion'
import Portfolio from '../components/portfolio'
import { HiBubble } from '../assets/images/branding/svgs'
import oranges from '../assets/images/oranges.png'
import '../assets/css/pages/index.scss'

const homeData = {
  img: <HiBubble />,
  text: (
    <>
      <p>
        I'm a Javascript/React developer and graphic designer, who enjoys
        turning complex problems into simple, beautiful and intuitive designs.
      </p>
      <p>
        Currently I enjoy working with the following technologies:
        <br />
        <strong>
          React, JavaScript ES6+, Drupal, HTML5, CSS3, SASS, Node.js, Express,
          MongoDB/Mongoose, Ava, Docker, Heroku, ESLint, Husky, Prettier
        </strong>
      </p>
    </>
  ),
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BannerRegion data={homeData} />
    <Portfolio />
    <div className={'container-two-thirds-width image-container'}>
      <img
        className={'imgOranges'}
        src={oranges}
        alt="cute Oranges"
        aria-hidden
      />
    </div>
  </Layout>
)

export default IndexPage
