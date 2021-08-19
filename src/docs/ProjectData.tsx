export type Project = {
    title: string;
    short_description: string;
    description: string[];
    github_url?: string;
    tags: string[];
}

export const projectData: Project[] = [
    {
        title:"Keyword-Out-Of-Context (KWOC)",
        short_description:"Generate an alphabetical list of the key words used in a text file, listing every instance of each word with its immediate context (line and line number).",
        description:[
            "This project was an assignment for my Software Development Methods class - SENG265.",
            "The goal of this project was to code a program that can generate a concordance from a text file, which is an alphabetical list of the principal words used in a text file, listing every instance of each word with its immediate context (line and line number).",
            "The hardest part about this project was resolving memory leak problems with C, but by using valgrind I was able to restore all bits of memory."
        ],
        github_url:"https://github.com/szeckirjr/KWOCinC",
        tags:[
            "C",
            "File input",
            "valgrind"
        ]
    },
    {
        title:"VEX Robot",
        short_description:"Program for a VEX Robot to navigate an arena using sensors and connect cable to beacon emitting infrared light.",
        description:[
            "This project was a team project for my second Design and Communication class - ENGR120.",
            "The goal of this project was to design, build, and program a robot using a VEX Robotics Kit provided by the university. The robot would have to navigate within an arena, avoid its walls, and find a beacon emitting infrared light. When the beacon is found, the robot would approach it, connect a cable to it in some way, and then back away without getting the cable tangled.",
            "As the programmer for my team, I had to learn/use RobotC to get values from sensors and make the robot move in the required way. The hardest part of the project was reading the values received by the infrared receptor, since sometimes the infrared signal would bounce off the walls of the arena."
        ],
        github_url:"https://github.com/szeckirjr/VEXKitRobot",
        tags:[
            "C",
            "RobotC",
            "Design",
            "Sensors",
            "Electrical board"
        ]
    },
    {
        title: "HTML Portfolio Website",
        short_description: "Portfolio website made from scratch using HTML, CSS, and JavaScript.",
        description: [
            "I have been meaning to code a website from scratch for a long time, so when I started applying for Co-Op jobs I thought it would be a great idea to make a portfolio one.",
            "The website was coded entirely in HTML, CSS and JavaScript. The hardest part about this website was making it responsive for different sized screens. I had first coded all my pages without thinking about it, and would only later find out how bad it looked on my phone, but I was able to recode every page to make it responsive to all screen sizes."
        ],
        github_url: "https://github.com/szeckirjr/PortfolioWebsite",
        tags:[
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive"
        ]
    }
]