const projects = [
  {
    id: 'ec_2018_insureon',
    title: 'Insureon Customer Portal',
    alt_title: 'Customer Portal',
    employer: 'Insureon',
    date: '2018-Current',
    website: 'up.insureon.com',
    active: false,
    role: 'Javascript / React Engineer',
    description: 'A React-based customer portal web-app for Insureon.com.',
    screenshot: 'portfolio--insureon-customer-portal--md.png',
    primary_tech: ['React', 'Webpack', 'CSS Modules', 'Post CSS', 'JS', 'CSS']
  },
  {
    id: 'ec_2017_bottomlessbrunch',
    title: 'Bottomless Brunch',
    alt_title: 'BottomlessBrunch.com',
    employer: 'Bottomless Brunch but not showing this part in the resume',
    date: '2017',
    website: 'www.bottomlessbrunch.com',
    active: true,
    role: 'Developer / Designer',
    description:
      'A React-based web-app that graphically displays "bottomless" brunch spots around the country. Google Maps, Google Places, and YELP API integration. Automatic venue creation allows new venues to be created in seconds. Built with a complete Node/Express server API.',
    screenshot: 'portfolio--bottomlessbrunch--md.jpg',
    primary_tech: [
      'React',
      'Redux',
      'MongoDB',
      'Node',
      'Express',
      'JS',
      'CSS',
      'Google Maps API',
      'AWS'
    ]
  },
  {
    id: 'ec_2017_minesweeper',
    title: 'MineSweeper',
    alt_title: 'MineSweeper',
    employer: 'Eric Constantinides',
    date: '2017',
    website: 'eric-minesweeper.surge.sh',
    active: true,
    role: 'Developer / Designer',
    description: 'A React and Redux minesweeper clone.',
    screenshot: 'portfolio--minesweeper.png',
    primary_tech: ['React', 'Redux', 'JS', 'CSS']
  },
  {
    id: 'ec_2017_muddling-through-code',
    title: 'Muddling Through Code',
    alt_title: 'MuddlingThroughCode.com',
    employer: 'Eric Constantinides',
    date: '2017',
    website: 'www.muddlingthroughcode.com',
    active: true,
    role: 'Developer / Designer',
    description:
      'This site is my journey to learn and grow, and to occasionally muddle through code.',
    screenshot: 'portfolio--muddlingthroughcode--md.jpg',
    primary_tech: ['Node', 'Express', 'JS', 'CSS']
  },
  {
    id: 'ec_2017_eric-constantinides',
    title: 'Eric Constantinides <dot> com',
    alt_title: 'EricConstantinides.com',
    employer: 'Eric Constantinides',
    date: '2017',
    website: 'www.ericconstantinides.com',
    active: true,
    role: 'Developer / Designer',
    description:
      'Created in React which makes it snappy and work well with JSON data. All data is saved in js config files making it quickly expandable.',
    screenshot: 'portfolio--ericconstantinides--md.jpg',
    primary_tech: ['React', 'JSON']
  },
  {
    id: 'ec_2017_constantly-being',
    title: 'Constantly Being',
    alt_title: 'ConstantlyBeing.com',
    employer: 'Eric Constantinides',
    date: '2017',
    website: 'www.constantlybeing.com',
    active: true,
    role: 'Lead Developer, Designer',
    description:
      'Constantly Being is a life & style blog promoting global awareness. The site is built on Drupal 7.',
    screenshot: 'portfolio--constantlybeing--md.jpg',
    primary_tech: ['Drupal', 'JS', 'CSS']
  },
  {
    id: 'evr_2016_eversport',
    title: 'EverSport',
    alt_title: 'EverSport.tv',
    employer: 'EverSport Media',
    date: '2015-2017',
    website: 'eversport.tv',
    active: false,
    role: 'Lead Front-End Developer, Co-Designer',
    description:
      'EverSport is the live streaming sports destination and media platform built for fans and content rights holders.',
    screenshot: 'portfolio--eversport--md.jpg',
    primary_tech: ['Drupal', 'PHP', 'JS', 'CSS']
  },
  {
    id: 'evr_2017_embed',
    title: "EverSport's Single Page App",
    alt_title: 'Single Page App',
    employer: 'EverSport Media',
    date: '2015-2017',
    website: 'www.ericconstantinides.com/embed',
    active: false,
    role: 'Lead Front-End Developer, Co-Designer',
    description:
      "Eversport's Single Page App is a responsive and embeddable JavaScript player for distributing EverSport's content on third-party websites.",
    screenshot: 'portfolio--eversport-embed--md.jpg',
    primary_tech: ['JS', 'CSS', 'JSON', 'AJAX']
  },
  {
    id: 'evr_2016_crms',
    title: "EverSport's Administration Theme",
    alt_title: 'EverSport.tv Admin Theme',
    employer: 'XXXXX EverSport Media',
    date: '2015-2017',
    website: 'eversport.tv/admin',
    active: false,
    role: 'Lead Theme Developer, Co-Designer',
    description:
      'EverSport\'s custom "Content Rights Management System (CRMS)" for managing rights and distrubution.',
    screenshot: 'portfolio--eversport-crms--md.jpg',
    primary_tech: ['Drupal', 'PHP', 'JS', 'CSS']
  },
  {
    id: 'ec_2016_annachich',
    title: 'Annachich Jewelry',
    alt_title: 'Annachich.com',
    employer: 'Eric Constantinides',
    date: '2016',
    website: 'www.annachich.com',
    active: true,
    role: 'Lead Developer, Co-Designer',
    description:
      'Annachich is a luxury designer jewelry line inspired by architecture. The site is built on Drupal 7 and Drupal Commerce.',
    screenshot: 'portfolio--annachich--md.jpg',
    primary_tech: ['Drupal', 'Drupal Commerce', 'JS', 'CSS']
  },
  {
    id: 'ec_2015_paoloshoes',
    title: 'Paolo Shoes',
    alt_title: 'PaoloShoes.com',
    employer: 'Eric Constantinides',
    date: '2015',
    website: 'www.paoloshoes.com',
    active: true,
    role: 'Lead Developer, Co-Designer',
    description:
      'Paolo Shoes is a Shoe Brand out of San Francisco, CA. The site is built on Drupal 6 and Ubercart.',
    screenshot: 'portfolio--paoloshoes3--md.jpg',
    primary_tech: ['Drupal', 'UberCart', 'JS', 'CSS']
  },
  {
    id: 'fb_2015_pure-storage',
    title: 'Pure Storage',
    alt_title: 'PureStorage.com',
    employer: 'Flickerbox, Inc',
    date: '2015',
    website: 'purestorage.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Pure Storage is a Mountain View, California-based enterprise data flash storage company.',
    screenshot: 'portfolio--purestorage--md.jpg',
    primary_tech: ['WordPress', 'JS', 'CSS']
  },
  {
    id: 'fb_2015_adallom',
    title: 'Adallom',
    alt_title: 'Adallom.com',
    employer: 'Flickerbox, Inc',
    date: '2015',
    website: 'adallom.com',
    active: false,
    role: 'Lead Developer',
    description: 'Adallom is a cloud security company acquired by MicroSoft.',
    screenshot: 'portfolio--adallom--md.jpg',
    primary_tech: ['WordPress', 'JS', 'CSS']
  },
  {
    id: 'fb_2014_okta-omm',
    title: 'Responsive Animation',
    alt_title: 'Responsive Animation',
    employer: 'XXXXX Flickerbox, Inc',
    date: '2014',
    website: 'ericconstantinides.github.io/scrolling-story',
    active: true,
    role: 'Lead Animation Developer',
    description:
      'An 11-page animated story to help visually explain a product.',
    screenshot: 'portfolio--okta-scrolling-story--md.jpg',
    primary_tech: ['JS', 'CSS']
  },
  {
    id: 'fb_2014_platfora',
    title: 'Platfora',
    alt_title: 'Platfora.com',
    employer: 'Flickerbox, Inc',
    date: '2014',
    website: 'platfora.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Platfora, Inc. is a big data analytics company based in San Mateo, California.',
    screenshot: 'portfolio--platfora--md.jpg',
    primary_tech: ['WordPress', 'JS', 'CSS']
  },
  {
    id: 'fb_2014_alteryx',
    title: 'Alteryx',
    alt_title: 'Alteryx.com',
    employer: 'Flickerbox, Inc',
    date: '2014',
    website: 'www.alteryx.com',
    active: true,
    role: 'Lead Developer',
    description:
      'Alteryx is a data blending and advanced data analytics software company based out of Irvine, California.',
    screenshot: 'portfolio--alteryx--md.jpg',
    primary_tech: ['Drupal', 'JS', 'CSS']
  },
  {
    id: 'fb_2014_okta',
    title: 'Okta',
    alt_title: 'Okta.com',
    employer: 'Flickerbox, Inc',
    date: '2014',
    website: 'okta.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Okta is an enterprise-grade, identity management service based out of San Francisco, California.',
    screenshot: 'portfolio--okta--md.jpg',
    primary_tech: ['WordPress', 'PHP', 'JS', 'CSS']
  },
  {
    id: 'fb_2013_abaxis-veterinary',
    title: 'Abaxis Veterinary',
    alt_title: 'Abaxis.com/veterinary',
    employer: 'Flickerbox, Inc',
    date: '2013',
    website: 'abaxis.com/veterinary/',
    active: false,
    role: 'Lead Developer',
    description:
      'Abaxis provides leading edge veterinary technology, tools and services.',
    screenshot: 'portfolio--abaxis-veterinary--md.jpg',
    primary_tech: ['WordPress', 'JS', 'CSS']
  },
  {
    id: 'fb_2013_socialchorus',
    title: 'SocialChorus',
    alt_title: 'SocialChorus.com',
    employer: 'Flickerbox, Inc',
    date: '2013',
    website: 'socialchorus.com',
    active: false,
    role: 'Lead Developer',
    description:
      'SocialChorus, Inc. provides advocate marketing solutions for brands.',
    screenshot: 'portfolio--socialchorus--md.jpg',
    primary_tech: ['WordPress', 'JS', 'CSS']
  },
  {
    id: 'fb_2013_pentaho',
    title: 'Pentaho',
    alt_title: 'Pentaho.com',
    employer: 'Flickerbox, Inc',
    date: '2013',
    website: 'pentaho.com',
    active: false,
    role: 'Lead Developer',
    description: 'Pentaho is a Business Intelligence (BI) software company.',
    screenshot: 'portfolio--pentaho--md.jpg',
    primary_tech: ['Drupal', 'JS', 'CSS']
  },
  {
    id: 'fb_2012_liveops',
    title: 'LiveOps',
    alt_title: 'LiveOps.com',
    employer: 'Flickerbox, Inc',
    date: '2012',
    website: 'liveops.com',
    active: false,
    role: 'Lead Developer',
    description:
      'LiveOps is a cloud call center company based in Scottsdale, Arizona.',
    screenshot: 'portfolio--liveops--md.jpg',
    primary_tech: ['Drupal', 'JS', 'CSS']
  },
  {
    id: 'fb_2012_island',
    title: 'Island Resort & Casino',
    alt_title: 'IslandResortAndCasino.com',
    employer: 'Flickerbox, Inc',
    date: '2012',
    website: 'www.islandresortandcasino.com',
    active: true,
    role: 'Lead Developer',
    description:
      'Island Resort and Casino is an Indian Casino based in Harris, Michigan.',
    screenshot: 'portfolio--islandresortandcasino--md.jpg',
    primary_tech: ['Drupal', 'JS', 'CSS']
  },
  {
    id: 'ec_2016_cameron-vail',
    title: 'Cameron Vail Design',
    alt_title: 'CameronVailDesign.com',
    employer: 'Eric Constantinides',
    date: '2016',
    website: 'www.cameronvaildesign.com',
    active: true,
    role: 'Lead Developer',
    description:
      'Cameron Vail Design is a single page portfolio website built on Drupal 7.',
    screenshot: 'portfolio--cameronvaildesign--md.jpg',
    primary_tech: ['Drupal', 'JS', 'CSS']
  },
  /*   {
    id: 'ec_2012_annachich',
    title: 'Annachich Jewelry',
    alt_title: 'Annachich.com',
    employer: 'Eric Constantinides',
    date: '2012',
    website: 'annachich.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Annachich is a luxury designer jewelry line inspired by architecture. The site is built on Drupal 6 and Ubercart.',
    screenshot: 'portfolio--annachich-v1--md.jpg',
    primary_tech: ['Drupal', 'Ubercart']
  }, */
  {
    id: 'ec_2011_dukeduchess',
    title: 'Duke et Duchess',
    alt_title: 'DukeDuchess.com',
    employer: 'Eric Constantinides',
    date: '2011',
    website: 'dukeduchess.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Duke et Duchess is a clothing store based in San Francisco, California. The site is built on Drupal 6 and Ubercart.',
    screenshot: 'portfolio--dukeduchess--md.jpg',
    primary_tech: ['Drupal', 'Ubercart', 'JS', 'CSS']
  },
  {
    id: 'ec_2011_btwd',
    title: 'Bike to Work Day',
    alt_title: 'Bike To Work Day: YouCanBikeThere.com',
    employer: 'Eric Constantinides',
    date: '2008, 2009, 2010, 2011',
    website: 'youcanbikethere.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Bike to Work Day is an annual event held on various days in the Spring across the United States and Canada that promotes the bicycle as an option for commuting to work.',
    screenshot: 'portfolio--youcanbikethere--md.jpg',
    primary_tech: ['Drupal']
  },
  {
    id: 'ec_2011_bottomlessbrunch',
    title: 'Bottomless Brunch',
    alt_title: 'BottomlessBrunch.com',
    employer: 'Eric Constantinides',
    date: '2011',
    website: 'bottomlessbrunch.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Bottomless Brunch is THE go to place to find out exactly where to get bottomless mimosas for not a lot of money.',
    screenshot: 'portfolio--bottomlessbrunch-drupal--md.jpg',
    primary_tech: ['Drupal', 'CSS']
  },
  {
    id: 'ec_2010_chicfashionweek',
    title: 'Chic Fashion Week SF',
    alt_title: 'ChicFashionWeekSF.com',
    employer: 'Eric Constantinides',
    date: '2010',
    website: 'chicfashionweeksf.com',
    active: false,
    role: 'Lead Developer',
    description: 'Awarded best technical website in 2010 by eFashionBlog SF.',
    screenshot: 'portfolio--chicfashionweeksf--md.jpg',
    primary_tech: ['Drupal', 'CSS']
  },
  {
    id: 'ec_2008_babc',
    title: 'Bay Area Bicycle Coalition',
    alt_title: 'BayAreaBikes.org',
    employer: 'Eric Constantinides',
    date: '2008',
    website: 'bayareabikes.org',
    active: false,
    role: 'Lead Developer | Lead Designer',
    description:
      'The Bay Area Bicycle Coalition promotes safe and enjoyable bicycling for everyday transportation in the San Francisco Bay Area.',
    screenshot: 'portfolio--bayareabikes--md.jpg',
    primary_tech: ['Drupal', 'CSS']
  }
  /*   {
    id: 'ec_2005_sfima',
    title: 'SFIMA',
    alt_title: 'SFIMA.org',
    employer: 'Eric Constantinides',
    date: '2005',
    website: 'sfima.org',
    active: false,
    role: 'Lead Developer | Lead Designer',
    description:
      'SFIMA is the San Francisco Institute of Management Accountants.',
    screenshot: 'portfolio--sfima--md.jpg',
    primary_tech: ['Static HTML']
  } */
]
export default projects
