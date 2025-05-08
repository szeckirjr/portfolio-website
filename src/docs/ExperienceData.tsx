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

export const devExperienceData: Experience[] = [
  {
    title: 'Software Developer',
    subtitle: 'Duplex - Redbrick',
    range: 'May 2024 - Present',
    description: [],
    color: '#22242D',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 80"
        width="80"
        height="80"
        preserveAspectRatio="xMidYMid meet"
        transform="scale(1.8)"
      >
        <g>
          <g
            transform="matrix(0.11100000143051147,0,0,0.11100000143051147,-173.1199951171875,-79.8800048828125)"
            opacity="1"
          >
            <g transform="matrix(1,0,0,1,1664,824)" opacity="1">
              <g opacity="1" transform="matrix(1,0,0,1,303.5,253.5)">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill-opacity="0"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="15"
                  d=" M42.5,242.5 C42.5,242.5 142.5,197.5 142.5,197.5 C142.5,197.5 -142.5,52.5 -142.5,52.5 C-142.5,52.5 142.5,-92.5 142.5,-92.5 C142.5,-92.5 -142.5,-242.5 -142.5,-242.5"
                />
              </g>
            </g>
            <g transform="matrix(1,0,0,1,1664,824)" opacity="1">
              <g opacity="1" transform="matrix(1,0,0,1,253.5,303.5)">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill-opacity="0"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="15"
                  d=" M92.5,192.5 C92.5,192.5 -192.5,47.5 -192.5,47.5 C-192.5,47.5 -192.5,152.5 -192.5,152.5 C-192.5,152.5 192.5,-42.5 192.5,-42.5 C192.5,-42.5 -92.5,-192.5 -92.5,-192.5"
                />
              </g>
            </g>
            <g transform="matrix(1,0,0,1,1664,824)" opacity="1">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="10"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="15"
                  d=" M161,11 C161,11 161,111 161,111"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="10"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="15"
                  d=" M446,161 C446,161 446,261 446,261"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  },
  {
    title: 'Full Stack Developer',
    subtitle: 'Assembly Digital - SJC',
    range: 'May 2022 - April 2024',
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
        transform="scale(1.6)"
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
    icon: <FaCanadianMapleLeaf transform="scale(1.3)" />
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
    icon: <RiMentalHealthLine transform="scale(1.3)" />
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
    icon: <RiGuideLine transform="scale(1.5)" />
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
    icon: <GiOpenBook transform="scale(1.3)" />
  },
  {
    title: 'Student Painter',
    subtitle: 'Scholars Edge Painting',
    range: 'May. 2019 - Sep. 2019',
    description: [
      'Working as a student painter over the summer. Worked with clients (i.e. answering questions and handling any concerns they might have had) and worked outdoors. Also learned to be extremely flexible, since our time/location was usually given 30min before the job started.'
    ],
    color: '#ff6600',
    icon: <RiPaintBrushFill transform="scale(1.3)" />
  }
];
