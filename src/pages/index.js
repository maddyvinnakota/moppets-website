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
        I'm a Java developer.
      </p>
      <p>
        Currently I enjoy working with the following technologies/frameworks/tools/methodologies:
        <br />
        <strong>
          ava8, Spring, Hibernate, Oracle, MongoDB, Javascript, Swagger, Puppet,
          Spring boot, Angular, Bamboo, JIRA, Weblogic 12c, Linux RHEL, Apache Camel, Agile, Scrum
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
