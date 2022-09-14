export type Project = {
  title: string;
  short_description: string;
  description: string[];
  github_url?: string;
  tags: string[];
  image?: string;
  scribble?: string;
  scribbleFilter?: string;
};

export const TagColors: {[key: string]: string} = {
  React: '#F94144',
  'React Native': '#F94144',
  CSS: '#F94144',
  C: '#F94144',
  TypeScript: '#F8961E',
  RobotC: '#F8961E',
  HTML: '#F8961E',
  Redux: '#F9C74F',
  'File input': '#F9C74F',
  Firebase: '#90BE6D',
  Design: '#90BE6D',
  MongoDB: '#90BE6D',
  'Chakra UI': '#90BE6D',
  'Spotify API': '#43AA8B',
  'Express.js': '#43AA8B',
  Sensors: '#43AA8B',
  Python: '#43AA8B',
  Scraper: '#577590',
  'Node.js': '#577590',
  'Electrical board': '#577590',
  valgrind: '#577590',
  JavaScript: '#F3722C',
};

export const projectData: Project[] = [
  {
    title: 'Spotific',
    short_description:
      'A React Native app that uses the Spotify API and scrapes the Metacritic website to get you reviews and scores on your top artists and albums.',
    description: [],
    tags: [
      'React Native',
      'TypeScript',
      'Redux',
      'Firebase',
      'Spotify API',
      'Scraper',
    ],
    image: '/projects/spotific.png',
    scribble: '/scribbles/24.svg',
  },
  {
    title: 'Care Plan Builder',
    short_description:
      'Drag-and-drop web application for the creation of care plans, which can then be converted into FHIR, a health-care specific data type that is suitable for analysis.',
    description: [],
    tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express.js', 'Node.js'],
    image: '/projects/careplan_builder.png',
    scribble: '/scribbles/67.svg',
  },
  {
    title: 'Keyword-Out-Of-Context (KWOC)',
    short_description:
      'Generate an alphabetical list of the key words used in a text file, listing every instance of each word with its immediate context (line and line number).',
    description: [
      'This project was an assignment for my Software Development Methods class - SENG265.',
      'The goal of this project was to code a program that can generate a concordance from a text file, which is an alphabetical list of the principal words used in a text file, listing every instance of each word with its immediate context (line and line number).',
      'The hardest part about this project was resolving memory leak problems with C, but by using valgrind I was able to restore all bits of memory.',
    ],
    github_url: 'https://github.com/szeckirjr/KWOCinC',
    tags: ['C', 'Python', 'File input', 'valgrind'],
    scribble: '/scribbles/18.svg',
    scribbleFilter:
      'invert(65%) sepia(86%) saturate(6762%) hue-rotate(338deg) brightness(81%) contrast(110%)',
    image: '/projects/kwoc_c.png',
  },
  // {
  //   title: 'CourseUp',
  //   short_description:
  //     'CourseUp is a web application that allows students to find, schedule, and register for courses at UVic',
  //   description: [
  //     'CourseUp is a web application that allows users to search for courses and build timetbales for easier term scheduling and registration. It is built using React, TypeScript, and the Chakra UI library, as well as Firebase for the backend.',
  //     'It was built by students at VikeLabs, a programming club at UVic, which I joined at the end of 2021.',
  //     "I worked with tools I hadn't used before, and I learned a lot from my team!",
  //     'I was able to implement to CourseUp features such as timetable sharing, which allows users to share their timetable with others.',
  //   ],
  //   github_url: 'https://github.com/VikeLabs/courseup',
  //   tags: ['React', 'TypeScript', 'Express', 'Chakra UI', 'CSS', 'JavaScript'],
  //   image: '/projects/courseup.png',
  //   scribble: '/scribbles/25.svg',
  // },
  {
    title: 'Portfolio Website',
    short_description: 'Portfolio website made from scratch',
    description: [
      'I have been meaning to code a website from scratch for a long time, so when I started applying for Co-Op jobs I thought it would be a great idea to make a portfolio one.',
      'The first version of the website (still accessible here: https://szeckirjr.github.io/PortfolioWebsite/) was coded entirely in HTML, CSS and JavaScript.',
      'The second version (what you are seeing right now) is coded in React using TypeScript and the Chakra UI library.',
      'The hardest part about this website was making it responsive for different sized screens, especially with the first version. I had first coded all my pages without thinking about it, and would only later find out how bad it looked on my phone, but I was able to recode every page to make it responsive to all screen sizes.',
    ],
    github_url: 'https://github.com/szeckirjr/portfolio-website',
    tags: ['React', 'TypeScript', 'Chakra UI', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/portfolio_site.png',
    scribble: '/scribbles/28.svg',
    scribbleFilter:
      'invert(87%) sepia(39%) saturate(5335%) hue-rotate(352deg) brightness(102%) contrast(109%)',
  },
  {
    title: 'VEX Robot',
    short_description:
      'Program for a VEX Robot to navigate an arena using sensors and connect cable to beacon emitting infrared light.',
    description: [
      'This project was a team project for my second Design and Communication class - ENGR120.',
      'The goal of this project was to design, build, and program a robot using a VEX Robotics Kit provided by the university. The robot would have to navigate within an arena, avoid its walls, and find a beacon emitting infrared light. When the beacon is found, the robot would approach it, connect a cable to it in some way, and then back away without getting the cable tangled.',
      'As the programmer for my team, I had to learn/use RobotC to get values from sensors and make the robot move in the required way. The hardest part of the project was reading the values received by the infrared receptor, since sometimes the infrared signal would bounce off the walls of the arena.',
    ],
    github_url: 'https://github.com/szeckirjr/VEXKitRobot',
    tags: ['C', 'RobotC', 'Design', 'Sensors', 'Electrical board'],
    image: 'projects/vex_robot.png',
    scribble: '/scribbles/62.svg',
  },
];
