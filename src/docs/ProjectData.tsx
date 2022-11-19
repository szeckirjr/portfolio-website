/* eslint-disable max-lines */
import Icon from '@chakra-ui/icon';
import { DiCss3, DiCode, DiReact, DiHtml5 } from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiSpotify,
  SiPython,
  SiNodedotjs,
  SiJavascript,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiDjango,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiChakraui
} from 'react-icons/si';
import { FaRobot, FaFileImport, FaPalette } from 'react-icons/fa';
import { RiSensorFill } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';
import { GiElectricalResistance } from 'react-icons/gi';
import { MdMemory, MdWeb } from 'react-icons/md';
import {} from 'react-icons/io';

export const ToolTags = {
  React: {
    icon: <Icon as={DiReact} />,
    color: '#05a0c7'
  },
  'React Native': {
    icon: <Icon as={DiReact} />,
    color: '#05a0c7'
  },
  CSS: {
    icon: <Icon as={DiCss3} />,
    color: '#2965f1'
  },
  C: {
    icon: <Icon as={DiCode} />,
    color: '#2b358d'
  },
  TypeScript: {
    icon: <Icon as={SiTypescript} />,
    color: '#007acc'
  },
  RobotC: {
    icon: <Icon as={FaRobot} />,
    color: '#3c48a5'
  },
  HTML: {
    icon: <Icon as={DiHtml5} />,
    color: '#f06529'
  },
  Redux: {
    icon: <Icon as={SiRedux} />,
    color: '#764abc'
  },
  'File input': {
    icon: <Icon as={FaFileImport} />,
    color: '#43AA8B'
  },
  Firebase: {
    icon: <Icon as={SiFirebase} />,
    color: '#FFA611'
  },
  Design: {
    icon: <Icon as={FaPalette} />,
    color: '#F94144'
  },
  MongoDB: {
    icon: <Icon as={SiMongodb} />,
    color: '#4DB33D'
  },
  'Chakra UI': {
    icon: <Icon as={SiChakraui} />,
    color: '#5ebcb3'
  },
  'Spotify API': {
    icon: <Icon as={SiSpotify} />,
    color: '#1DB954'
  },
  'Express.js': {
    icon: <Icon as={SiExpress} />,
    color: '#cdb70e'
  },
  Sensors: {
    icon: <Icon as={RiSensorFill} />,
    color: '#90BE6D'
  },
  Python: {
    icon: <Icon as={SiPython} />,
    color: '#306998'
  },
  Scraper: {
    icon: <Icon as={CgWebsite} />,
    color: '#577590'
  },
  'Node.js': {
    icon: <Icon as={SiNodedotjs} />,
    color: '#3c873a'
  },
  'Electrical board': {
    icon: <Icon as={GiElectricalResistance} />,
    color: '#577590'
  },
  valgrind: {
    icon: <Icon as={MdMemory} />,
    color: '#577590'
  },
  JavaScript: {
    icon: <Icon as={SiJavascript} />,
    color: '#cab112'
  },
  Git: {
    icon: <Icon as={SiGithub} />,
    color: '#F1502F'
  },
  'GitHub Actions': {
    icon: <Icon as={SiGithubactions} />,
    color: '#2088FF'
  },
  GraphQL: {
    icon: <Icon as={SiGraphql} />,
    color: '#e535ab'
  },
  'GitHub Pages': {
    icon: <Icon as={MdWeb} />,
    color: '#D8B863'
  },
  Django: {
    icon: <Icon as={SiDjango} />,
    color: '#092E20'
  },
  Prisma: {
    icon: <Icon as={SiPrisma} />,
    color: '#2D3748'
  },
  PostgreSQL: {
    icon: <Icon as={SiPostgresql} />,
    color: '#336791'
  }
};

type PossibleTags = keyof typeof ToolTags;

export type Project = {
  title: string;
  short_description: string;
  description: string[];
  github_url?: string;
  url?: string;
  tags: PossibleTags[];
  image?: string;
  scribble?: string;
  scribbleFilter?: string;
};

export const projectData: Project[] = [
  {
    title: 'Care Plan Builder',
    short_description:
      'Drag-and-drop web application for the creation of care plans, which can then be converted into FHIR, a health-care specific data type that is suitable for analysis.',
    description: [],
    tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express.js', 'Node.js'],
    image: '/projects/careplan_builder.png',
    scribble: '/scribbles/67.svg'
  },
  {
    title: 'DMIA Portfolio',
    short_description:
      "A React app that displays the DMIA's projects and tools to help other government branches understand what is possible",
    description: [],
    tags: ['React', 'TypeScript', 'Chakra UI', 'Git', 'GitHub Pages'],
    image: '/projects/dmia_portfolio.png',
    scribble: '/scribbles/2.svg',
    github_url: 'https://github.com/PHACDataHub/datahub_portfolio',
    url: 'https://phacdatahub.github.io/datahub_portfolio/'
  },
  {
    title: 'Health of Canadians Automation',
    short_description:
      'A Django web app to automate the process of data collection, cleaning, and dissemination for the yearly Health of Canadians report, dealing with 70+ indicators and hundreds of data points.',
    description: [],
    tags: [
      'Python',
      'Django',
      'React',
      'TypeScript',
      'GraphQL',
      'Git',
      'GitHub Actions'
    ],
    image: '',
    scribble: ''
  },
  {
    title: 'CourseUp',
    short_description:
      'CourseUp is a web application that allows students to find, schedule, and register for courses at UVic',
    description: [
      'CourseUp is a web application that allows users to search for courses and build timetbales for easier term scheduling and registration.',
      'It is built using React, TypeScript, and the Chakra UI library, as well as Firebase for the backend.',
      'It was built by students at VikeLabs, a programming club at UVic, which I joined at the end of 2021.',
      'I was able to implement to CourseUp features such as timetable sharing, which allows users to share their timetable with others.'
    ],
    github_url: 'https://github.com/VikeLabs/courseup',
    url: 'https://courseup.vikelabs.ca',
    tags: [
      'React',
      'TypeScript',
      'Express.js',
      'Chakra UI',
      'CSS',
      'JavaScript'
    ],
    image: '/projects/courseup.png',
    scribble: '/scribbles/25.svg'
  },
  {
    title: 'UVic Scheduler API',
    short_description:
      'A GraphQL API that provides UVic course, professor, and room data to the UVic Scheduler application as part of the Software Engineering Capstone course.',
    description: [],
    tags: ['TypeScript', 'GraphQL', 'Prisma', 'PostgreSQL', 'Node.js'],
    github_url: 'https://github.com/SENG499-Company-4/Backend',
    image: '/projects/uvic_scheduler.png',
    scribble: '/scribbles/39.svg'
  },
  {
    title: 'Keyword-Out-Of-Context (KWOC)',
    short_description:
      'Generate an alphabetical list of the key words used in a text file, listing every instance of each word with its immediate context (line and line number).',
    description: [
      'This project was an assignment for my Software Development Methods class - SENG265.',
      'The goal of this project was to code a program that can generate a concordance from a text file, which is an alphabetical list of the principal words used in a text file, listing every instance of each word with its immediate context (line and line number).',
      'The hardest part about this project was resolving memory leak problems with C, but by using valgrind I was able to restore all bits of memory.'
    ],
    github_url: 'https://github.com/szeckirjr/KWOCinC',
    tags: ['C', 'Python', 'File input', 'valgrind'],
    scribble: '/scribbles/18.svg',
    scribbleFilter:
      'invert(65%) sepia(86%) saturate(6762%) hue-rotate(338deg) brightness(81%) contrast(110%)',
    image: '/projects/kwoc_c.png'
  },
  {
    title: 'Portfolio Website',
    short_description: 'Portfolio website made from scratch',
    description: [
      'I have been meaning to code a website from scratch for a long time, so when I started applying for Co-Op jobs I thought it would be a great idea to make a portfolio one.',
      'The first version of the website (still accessible here: https://szeckirjr.github.io/PortfolioWebsite/) was coded entirely in HTML, CSS and JavaScript.',
      'The second version (what you are seeing right now) is coded in React using TypeScript and the Chakra UI library.',
      'The hardest part about this website was making it responsive for different sized screens, especially with the first version. I had first coded all my pages without thinking about it, and would only later find out how bad it looked on my phone, but I was able to recode every page to make it responsive to all screen sizes.'
    ],
    github_url: 'https://github.com/szeckirjr/portfolio-website',
    url: 'https://wardo.dev/',
    tags: ['React', 'TypeScript', 'Chakra UI', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/portfolio_site.png',
    scribble: '/scribbles/28.svg',
    scribbleFilter:
      'invert(87%) sepia(39%) saturate(5335%) hue-rotate(352deg) brightness(102%) contrast(109%)'
  },
  {
    title: 'VEX Robot',
    short_description:
      'Program for a VEX Robot to navigate an arena using sensors and connect cable to beacon emitting infrared light.',
    description: [
      'This project was a team project for my second Design and Communication class - ENGR120.',
      'The goal of this project was to design, build, and program a robot using a VEX Robotics Kit provided by the university. The robot would have to navigate within an arena, avoid its walls, and find a beacon emitting infrared light. When the beacon is found, the robot would approach it, connect a cable to it in some way, and then back away without getting the cable tangled.',
      'As the programmer for my team, I had to learn/use RobotC to get values from sensors and make the robot move in the required way. The hardest part of the project was reading the values received by the infrared receptor, since sometimes the infrared signal would bounce off the walls of the arena.'
    ],
    github_url: 'https://github.com/szeckirjr/VEXKitRobot',
    tags: ['C', 'RobotC', 'Design', 'Sensors', 'Electrical board'],
    image: 'projects/vex_robot.png',
    scribble: '/scribbles/62.svg'
  },
  {
    title: 'Critify',
    short_description:
      'A React Native app that uses the Spotify API and scrapes the Metacritic website to get you reviews and scores on your top artists and albums.',
    description: [],
    tags: [
      'React Native',
      'TypeScript',
      'Redux',
      'Firebase',
      'Spotify API',
      'Scraper'
    ],
    image: '/projects/spotific.png',
    scribble: '/scribbles/24.svg'
  }
];
