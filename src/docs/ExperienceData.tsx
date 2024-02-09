import {
  RiGuideLine,
  RiMentalHealthLine,
  RiPaintBrushFill
} from 'react-icons/ri';
import { GiOpenBook } from 'react-icons/gi';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import React from 'react';

export type Experience = {
  title: string;
  subtitle: string;
  range: string;
  description: string[];
  color: string;
  icon: JSX.Element;
};

export const coopExperienceData: Experience[] = [
  {
    title: 'Full Stack Developer',
    subtitle: 'Assembly Digital - SJC',
    range: 'May 2022 - Present',
    description: [
      'For my fifth co-op, I am working at Assembly Digital - SJC. I am working completely remotely as Assembly is a fully remote company. There, I am working with a team of developers to build and maintain web applications for clients and our own portfolio.',
      'My main focus is on Statera, one of their key products. I am working with React and TypeScript, and I am also learning about AWS and working here and there with Python and Go scripts.'
    ],
    color: '#4A09FF',
    icon: (
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            d="M100 51c0 27.614-22.384 50-50 50S0 78.614 0 51 22.384 1 50 1s50 22.386 50 50"
            fill="#4A09FF"
          ></path>
          <path fill="#FF1651" d="m65 19.333-15 .013L57.835 33.5z"></path>
          <path
            fill="#FFF"
            d="M82.5 76.833 50.421 19.347v-.014l-.003.008-.006-.008v.014L18.333 76.833h18.103l13.982-27.415 13.98 27.415z"
          ></path>
        </g>
      </svg>
    )
  },
  {
    title: 'Junior Data Analyst',
    subtitle: 'Public Health Agency of Canada (PHAC)',
    range: 'May 2021 - April 2022',
    description: [
      'For my second, third, and fourth co-ops, I am working for the Public Health Agency of Canada (PHAC). I am working completely remotely due to the on-going pandemic. There, I worked with data engineering and data analysis of COVID-19 related data.',
      'Worked with data models and diagramming, SQL, web development, pipelines, data cleaning, and Docker.'
    ],
    color: '#b53d35',
    icon: <FaCanadianMapleLeaf />
  },
  {
    title: 'Software Engineering Intern',
    subtitle: 'Centre for Addiction and Mental Health (CAMH)',
    range: 'Sep. 2020 - Dec. 2020',
    description: [
      'For my first co-op, I worked at Centre for Addiction and Mental Health (CAMH), the largest mental health hospital in Canada. I worked entirely remotely due to the COVID-19 pandemic. There, I worked on developing an interactive web based application from scratch to better support the creation of health care plans in a health-specific data standard.',
      'Worked with Python and Dash for the generation of interactive interfaces. The second version was made using HTML, CSS, and JavaScript. The application runs on a Node.js/Express.js server and it has a MongoDB database for care plan storage.'
    ],
    color: '#97266D',
    icon: <RiMentalHealthLine />
  }
];

export const otherExperienceData: Experience[] = [
  {
    title: 'Campus Tour Guide',
    subtitle: 'University of Victoria',
    range: 'Nov. 2019 - Present',
    description: [
      'Representing UVic as a Campus Tour Guide by showing the campus to prospective students and their families.',
      'Acquired skills such as public speaking and interpersonal relations.'
    ],
    color: '#ffaf00',
    icon: <RiGuideLine />
  },
  {
    title: 'Digitization Assistant',
    subtitle: 'University of Victoria - Libraries',
    range: 'Sep. 2019 - Apr. 2020',
    description: [
      'Scanning old BC Gazettes with the intent of uploading them into the Internet Archive.',
      'Learned how to use new equipament/software very fast, while learning how to work on an office environment for hours a day.'
    ],
    color: 'gray',
    icon: <GiOpenBook />
  },
  {
    title: 'Student Painter',
    subtitle: 'Scholars Edge Painting',
    range: 'May. 2019 - Sep. 2019',
    description: [
      'Working as a student painter over the summer. Worked with clients (i.e. answering questions and handling any concerns they might have had) and worked outdoors. Also learned to be extremely flexible, since our time/location was usually given 30min before the job started.'
    ],
    color: '#ff6600',
    icon: <RiPaintBrushFill />
  }
];
