import projects from './projects'
// return array of objects of employer
const getProjects = employer => projects.filter(project => project.employer === employer)
const experience = [
  {
    name: 'Automation Anywhere',
    location: 'San Jose, CA',
    address: '633 River Oaks Pkwy, San Jose, CA 95134',
    description: 'Robotic Process Automation (RPA) Provider',
    startDate: 'Apr 2019',
    fullStartDate: '2019-04-03',
    endDate: 'Current',
    // lengthOfEmployment: '',
    position: [
      {
        title: 'UI Architect',
        meta: 'Dec 2020 - Current',
        info:
          'UI Architect, Automation 360 Platform'
      },
      {
        title: 'Lead UI Engineer',
        meta: 'July 2019 - Dec 2020',
        info:
          'Lead UI / Front-End Engineer on Bot Store, Private Bot Store, and Developer Portal'
      },
      {
        title: 'Senior UI Engineer',
        meta: 'Apr 2019 - July 2019',
        info:
          'Senior UI / Front-End Engineer on Bot Store and Private Bot Store'
      },
    ],
    projects: getProjects('Automation Anywhere'),
   /*  initiatives: [
      {
        title: 'Front-end Gatherings',
        info: 'Weekly meetings to teach Front-end best practices'
      },
    ] */
  },
  {
    name: 'Insureon',
    location: 'Campbell, CA',
    address: '300 Orchard City Dr, Suite 132, Campbell, CA 95008',
    description: 'Online Business Insurance Broker',
    startDate: 'Jan 2018',
    fullStartDate: '2018-01-24',
    endDate: 'Apr 2019',
    fullEndDate: '2019-04-02',
    lengthOfEmployment: '1 year, 2 months, 10 days',
    position: [
      {
        title: 'Senior UI & Front-End Engineer',
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
        info: 'cascading rule-based validation with minimally intrusive user errors'
      },
      {
        title: 'Features Higher-Order-Component',
        info: 'control UI features in the console including HMR'
      },
      {
        title: 'Create-Menu',
        info: 'build responsive HTML menus from JSON objects'
      },
      {
        title: 'Progressive Web App',
        info: 'PWA implementation including Manifest and smart-caching using Service Workers'
      },
      {
        title: 'Global CSS variables in JS',
        info: 'CSS variables accessible in both JS and CSS with hot-module-replacement'
      },
      {
        title: 'withAnalytics Higher-Order-Component',
        info: 'Google Analytics wrapper for intelligently triggering analytic events'
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
    startDate: 'Apr 2017',
    fullStartDate: '2017-04-24',
    endDate: 'Jan 2018',
    fullEndDate: '2018-01-23',
    lengthOfEmployment: '9 months',
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
    address: '101 Church St #40, Los Gatos, CA 95030',
    startDate: 'Sep 2015',
    fullStartDate: '2015-09-21',
    endDate: 'Jan 2017',
    fullEndDate: '2017-01-24',
    lengthOfEmployment: '1 year, 4 months, 4 days',
    position: [
      {
        title: 'Lead Front-end Developer',
        disabled_meta: 'Sep 2015 - Jan 2017',
        info: `Lead Front-end Developer for Eversport's themes and modules using JavaScript, SCSS / CSS, Drupal and PHP. Designed and developed the site and the user-interface for the Single Page App media player that ran on 3rd party sites.`
      }
    ],
    skillsUsed: '',
    projects: getProjects('EverSport Media')
  },
  {
    name: 'Flickerbox, Inc.',
    description: 'Digital Design Agency',
    location: 'San Francisco, CA',
    address: '246 Shipley St, San Francisco, CA 94107',
    phoneNumber: '(415) 436-9383',
    startDate: 'Jan 2012',
    fullStartDate: '2012-01-30',
    endDate: 'Jun 2015',
    fullEndDate: '2015-06-22',
    lengthOfEmployment: '3 years, 4 months, 24 days',
    position: [
      {
        title: 'Senior Web Developer',
        meta: 'Jan 2014 - June 2015',
        info: `Orchestrated the weekly developer meetings; drafted timelines and estimates for future projects; composed technical briefs for client-side contracts; lead web development projects.`
      },
      {
        title: 'Web Developer',
        meta: 'Jan 2012 - Jan 2014',
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
        title: 'Full MERN Stack Web-App Developer. Previously, Full LAMP Stack Developer'
      }
    ],
    projects: getProjects('Eric Constantinides')
  }
]

export default experience
