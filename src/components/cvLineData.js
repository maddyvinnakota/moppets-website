import React from 'react'


export const cvData = [
  {
    id: 'CVLine-01',
    time: {
      range: 'Oct - Dec 2019',
      place: 'Berlin',
    },
    title: 'Javascript Crash Course',
    description: (
      <>
        <h4>
          Course Project:{' '}
          <a href={'http://tem-frontend.herokuapp.com'}>The Eternal Menu</a>
        </h4>
        <p>
          The course by <a href={'http://wtmberlin.com'}>WTM Berlin</a> is
          designed for introducing JavaScript and Node.js as a platform for
          backend applications. In its current stage my project is a Node.js
          application using the following technologies:
        </p>
        <ul>
          <li>implements RESTful APIs with Express.js</li>
          <li>
            data is stored in a MongoDB Datastore, the object modeling is done
            in Mongoose
          </li>
          <li>unit testing is done using the test runner Ava</li>
          <li>
            the frontend is built in React.js, the App is deployed with Docker
            on Heroku
          </li>
        </ul>
        <h4>Tech Stack:</h4>React, JavaScript, CSS, SASS, Parcel, Nodejs, Express, MongoDB, Axios, REST APIs, Ava
        (testing), Docker, Heroku, ESLint, Husky, Prettier
      </>
    ),
  },
  {
    id: 'CVLine-1',
    time: {
      range: '2018 - now',
      place: 'Berlin',
    },
    title: 'Freelance Front End Developer and Graphic Designer',
    description: (
      <>
        <h4>Kunstmatrix Technologies GmbH</h4>
        <p>
          <a href={'https://www.kunstmatrix.com/en'}>Kunstmatrix Tech</a>{' '}
          specialises in providing online 3D art galleries but develops web
          pages and apps as well.
        </p>
        <ul>
          <li>
            carried web projects from beginning to end: from defining
            requirements, handling feedback, and CMS set up to the build and
            deployment of a site
          </li>
          <li>
            wireframes and layouts for app and web projects as well as
            prototyping websites & apps with click dummies built in AdobeXD
          </li>
          <li>screen & user interface design, illustrations and icons</li>
        </ul>
        <h4>Tech Stack:</h4>React, JS, HTML5, CSS & SASS, Drupal, Husky, ESLint,
        Prettier
      </>
    ),
  },
  {
    id: 'CVLine-2',
    time: {
      range: '2014 - 2017',
      place: 'Berlin',
    },
    title: 'Infographic Designer',
    description: (
      <>
        <h4>German Press Agency, dpa infografik GmbH</h4>
        <p>(previously infographic intern in 2011)</p>
        <p>
          <a href="https://www.dpa.com/de/unternehmen/dpa-gruppe/dpa-infografik-gmbh/">
            Dpa-infografik GmbH
          </a>{' '}
          is the biggest infographics agency in the German-speaking part of
          Europe.
        </p>
        <ul>
          <li>
            daily news graphics, diagrams, maps, edugraphics, and icons for
            print newspapers and school book publishers
          </li>
          <li>
            creation of new style guides for both dpa-Grafik and dpa
            Kindergrafik to improve user experience
          </li>
          <li>
            coordination of tasks related to the dpa children’s news products,
            which included the development of time-saving design templates
          </li>
          <li>
            online interactive edugraphics and games as well as print
            illustrations, infographics, and games for 6 to 13 year old children
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'CVLine-3',
    time: {
      range: '2009 - 2014',
      place: 'Augsburg',
    },
    title: 'Freelance Graphic Designer',
    description: (
      <>
        <h4>print & online media</h4>
        <p>customers included German and US companies</p>
        <ul>
          <li>graphic design, illustrations, infographics</li>
          <li>
            corporate identity & branding: from logo, letter and form design, to
            website layouts and business cards
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'CVLine-4',
    time: {
      range: '2008 - 2013',
      place: 'Augsburg',
    },
    title: 'University of Applied Sciences Augsburg',
    description: (
      <p>BA in Communications Design with a focus on infographic design</p>
    ),
  },
  {
    id: 'CVLine-5',
    time: {
      range: '2007',
      place: 'Washington, DC, USA',
    },
    title: 'Language gap year',
    description: <p>Worked for a year as an au pair in the United States</p>,
  },
]
