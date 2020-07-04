import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { GitHub, LinkedIn, Mail } from '../assets/images/socialIcons'
import Pineapple from '../assets/images/pineapple.png'
import '../assets/css/pages/contact.scss'

const Contact = () => (
  <Layout>
    <SEO title="Contact me" />
    <div className={'contact'} id={'contact'}>
      <div className={'contact-banner'}>
        <aside className={'sidebar-left'} />

        <div className={'container-two-thirds-width'}>
          <h2>GET IN TOUCH</h2>
          <p>Drop me a line if you'd like to start working together</p>
        </div>
      </div>

      <section className="get-in-touch">
        <aside className={'sidebar-left'} />

        <div className={'container-two-thirds-width'}>
          <ul className={'social-icons'}>
            <li className="mailto">
              <a href="mailto:mailtomadi@gmail.com">
                <Mail />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/madhava-vinnakota/"
                target={'_blank'}
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MoppetX"
                target={'_blank'}
                rel="noopener noreferrer"
              >
                <GitHub />
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href="/">*/}
            {/*    <CodePen/>*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </section>

      <div className={'container-two-thirds-width image-container'}>
        <img
          className={'imgPineapple'}
          src={Pineapple}
          alt="Madhava Vinnakota"
          aria-hidden
        />
      </div>
    </div>
  </Layout>
)

export default Contact
