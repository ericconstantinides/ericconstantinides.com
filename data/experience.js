import projects from './projects'
// return array of objects of employer
const getProjects = employer =>
  projects.filter(project => project.employer === employer)
const experience = [
  {
    name: 'Insureon',
    location: 'Campbell, CA',
    description: 'Online Business Insurance Broker',
    startDate: 'January, 2018',
    endDate: 'Current',
    position: [
      {
        title: 'Front-end UI Engineer',
        info:
          'Co-engineer for building the Customer Portal for Insureon. Customer Portal is built using React, Webpack, CSS Modules, Post-CSS, Babel, React Router, etc. Responsible for building out app pages using CSS and JS. In addition, my authored initiatives include:'
      }
    ],
    // projects: getProjects('Insureon'),
    initiatives: [
      {
        title: 'JSON Forms',
        info: 'framework for Object-based form prototyping'
      },
      {
        title: 'Intelligent Form Validation',
        info:
          'cascading rule-based validation with minimally intrusive user errors'
      },
      {
        title: 'Console Features',
        info: 'implement dormant UI features via console'
      },
      {
        title: 'Create-Menu',
        info: 'build responsive HTML menus from JSON objects'
      },
      {
        title: 'Progressive Web App',
        info:
          'PWA implementation including Manifest and smart-caching using Service Workers'
      },
      {
        title: 'Global CSS variables in JS',
        info:
          'CSS variables accessible in both JS and CSS with hot-module-replacement'
      },
      {
        title: 'withAnalytics Higher-Order-Component',
        info:
          'Google Analytics wrapper for intelligently triggering analytic events'
      },
      {
        title: 'withAnimation Higher-Order-Component',
        info: 'tiny wrapper to add CSS animation props to any component'
      },
      {
        title: 'Tiny Datepicker Component',
        info: '90% smaller DatePicker with no dependencies on Moment.js'
      }
    ]
  },
  {
    name: 'BottomlessBrunch.com',
    location: 'San Jose, CA',
    startDate: 'April, 2017',
    endDate: 'January, 2018',
    position: [
      {
        title: 'Full-Stack UI Engineer',
        info: `Developed bottomlessbrunch.com, a React and Redux responsive web-app which graphically renders "bottomless" brunch locations in the United States. Integrated Google Maps, Google Places, and YELP APIs. Created administration back-end which combines multiple APIs to create new locations in seconds. Served on an AWS Server through an NGINX proxy with a Node/Express API.`
      }
    ],
    projects: getProjects('Bottomless Brunch')
  },
  {
    name: 'EverSport Media',
    description: 'Online Video Provider',
    location: 'Los Gatos, CA',
    startDate: 'Sep, 2015',
    endDate: 'Jan, 2017',
    position: [
      {
        title: 'Lead Front-end Developer',
        disabled_meta: 'Sep, 2015 - Jan, 2017',
        info: `Lead Front-end Developer for Eversport's themes and modules using JavaScript, SCSS / CSS, Drupal and PHP. Designed and developed the site and the user-interface for the Single Page App media player that ran on 3rd party sites.`
      }
    ],
    skillsUsed: '',
    projects: getProjects('EverSport Media')
  },
  {
    name: 'Flickerbox, Inc.',
    description: 'Agency',
    location: 'San Francisco, CA',
    startDate: 'Jan, 2012',
    endDate: 'June, 2015',
    position: [
      {
        title: 'Senior Web Developer',
        meta: 'Jan, 2014 - June, 2015',
        info: `Orchestrated the weekly developer meetings; drafted timelines and estimates for future projects; composed technical briefs for client-side contracts; lead web development projects.`
      },
      {
        title: 'Web Developer',
        meta: 'Jan, 2012 - Jan, 2014',
        info: `Architected content structure for websites. Hand-coded HTML, SCSS (CSS), and JS from designs into responsive and interactive pages. Implemented JavaScript libraries and wrote custom JavaScript/jQuery code.`
      }
    ],
    projects: getProjects('Flickerbox, Inc')
  },
  {
    name: 'Independent Web Developer',
    location: 'San Jose, CA',
    startDate: '2005',
    endDate: 'Current',
    position: [
      // {
      //   title: 'Full Stack React Developer',
      //   meta: 'Jan 2017 - Current)'
      // },
      {
        title:
          'Full MERN Stack Web-App Developer. Previously, Full LAMP Stack Developer'
      }
    ],
    projects: getProjects('Eric Constantinides')
  }
]

export default experience
