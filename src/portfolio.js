/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shrey Srivastava",
  // title: "Hi all, I'm Shrey Srivastava",
  title: "Hello, I'm Shrey",
  subTitle: emoji(
    "A Software Development Engineer (SDE) ⛱ and Full-Stack WebApp Developer 🚀 having experience of building great Website applications with JavaScript / Reactjs / Nodejs / and its libraries and frameworks."
    // "As a Software Development Engineer and Full-Stack WebApp Developer, I excel in creating visually impressive websites and apps with efficient, standout code. With a keen eye for detail, I seamlessly collaborate in team environments, focusing on enhancing digital experiences for a competitive edge. Proficient in problem-solving, I navigate challenges with composure under pressure. Whether crafting remarkable online experiences or contributing to innovative software solutions and built great websites."
    // "As a Software Development Engineer and Full-Stack WebApp Developer, I excel in creating visually impressive websites and apps with efficient, standout code. With a keen eye for detail, I seamlessly collaborate in team environments, focusing on enhancing digital experiences for a competitive edge. Proficient in problem-solving, I navigate challenges with composure under pressure. Whether crafting remarkable online experiences or contributing to innovative software solutions and built great websites."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1BItjWkDxLipkwcDPMHgZRYXOfQwxvZzP/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};



// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shrey-Srivastava21",
  linkedin: "https://www.linkedin.com/in/shrey-srivastava21/",
  gmail: "shrey.srivastava2101@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  instagram: "https://www.instagram.com/layman_brother/",
  twitter: "https://twitter.com/ashutosh_1919/",
  facebook: "https://www.facebook.com/saad.pasta7",
  kaggle: "https://www.youtube.com/@shreysrivastava1434",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      // "⚡⛩1️⃣2️⃣3️⃣ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
      "1️⃣ Proficient in developing highly interactive website and mobile user interfaces using technologies like ReactJS and Typescript etc."
    ),
    emoji(
      // "⚡🌈 Progressive Web Applications ( PWA ) in normal and SPA Stacks"
      "2️⃣ Skilled in creating robust backend applications with Node, Express, and Flask, and integrating third-party services such as Firebase, AWS and MongoDB etc. along with various tech stacks."
    ),
    emoji(
      // "⚡❄ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      "3️⃣ Extensive experience in machine learning and deep learning models, hosting and developing models, and working with various hosting platforms, expertise in continuous integration."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: 'Numpy',
      fontAwesomeClassname: "fab fa-bootstrap",
      style: {
        color: '#4CACD1'
      }
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish" // You may customize this class if needed
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fab fa-java',
      style: {
        color: '#4CACD1'
      }
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
      style: {
        color: "#4CACD1" // You can customize the color if needed
      }
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vitb.png"),
      subHeader: "Bachelor of Technology",
      duration: "September 2020 - October 2024",
      desc: "Computer Science and Engineering",
      descBullets: [
        "I am currently pursuing my bachelor degree in Computer Science & Engineering Course.",
        "Main Coursework: Data Structures, Computer Networks, Design & Analysis of Algorithms, Computer Architecture, Database Systems, Operating System and Software Engineering.",
        "I have also completed various online courses for Frontend, Backend along with Database, Website and Mobile App Development, etc.",
        "I have implemented several projects based upon what I've leart under my CS graduation."
      ]
    },
    {
      schoolName: "FIITJEE Education Centre",
      logo: require("./assets/images/fiitjee.png"),
      subHeader: "PCM with Computer Science",
      duration: "July 2018 - April 2020",
      desc: "JEE Preparation, 10th and 12th in PCM with CSE",
      descBullets: [
        "I have completed my JEE preparation after High school and Intermediate from this Institute.",
        "I have participated many inter school olympiad, sports etc. based on science and knowledge.",
        "I'm ranked among the top 1% in my batch & taken courses in the PCM with CS fundamentals.",
        "I have successfully cleared various engineering-level exams and secured positions among top percentile score in India.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Database",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming/DSA",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer Intern",
    //   company: "Whirlpool",
    //   companylogo: require("./assets/images/whirlpool.jpg"),
    //   date: "January 2024 – Present",
    //   desc: "Skills: Devops, CI/CD, GitHub",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    // {
    //   role: "Web Development Internship",
    //   company: "Ethnus",
    //   companylogo: require("./assets/images/ethnus12.png"),
    //   date: "May 2023 - Jul 2023",
    //   desc: "Skills: MERN Stack ▪ NextJs ▪ Figma ▪ Vercel ▪ GitHub",
    //   descBullets: [
    //     "Implemented cutting-edge design in website with leveraged AI trends through advanced web frameworks using responsive techniques.",
    //     "Optimized the visual aesthetics of web pages, resulting in a 15% reduction in website server load and improved performance."
    //   ]
    // },
    {
      role: "Open Source Contributor",
      company: "Hacktoberfest",
      companylogo: require("./assets/images/hacktoberfest.png"),
      date: "Oct 2023 - Nov 2023",
      desc: "Skills: MERN Stack ▪ NextJS ▪ AWS ▪ Figma ▪ Git Bash",
      descBullets: [
        "Enhanced 'scala' an open source automation project using MERN Stack, NextJS, and AWS.",
        "Showcased collaborative development skills, contributed developer community through innovative contributions through successful commits."
        // "Enhanced visual aesthetics of web pages, contributing to a notable 15% decrease in website server load.",
        // "Strategically navigated the intersection of modern design principles and emerging AI trends.",
        // "Successfully optimized performance, ensuring a seamless and visually appealing online presence."
      ]
    },
    {
      role: "PwC Salesforce Trainee",
      company: "PwC India",
      companylogo: require("./assets/images/pwc.jpg"),
      date: "Jun 2023 - Sep 2023",
      desc: "Skills: Trailhead ▪ Modules ▪ Salesforce",
      descBullets: [
        "Trained in Salesforce fundamentals, specializing in Sales & Service Cloud for effective customer management & sales processes.",
        "Skilled in executing marketing campaigns, managing Salesforce configuration, security, data using declarative tools & Apex code."
      ]
    },
    {
      role: "Web Development Internship",
      company: "Ethnus",
      companylogo: require("./assets/images/ethnus12.png"),
      date: "May 2023 - Jul 2023",
      desc: "Skills: MERN Stack ▪ NextJs ▪ Figma ▪ Vercel ▪ GitHub",
      descBullets: [
        "Implemented cutting-edge design in website with leveraged AI trends through advanced web frameworks using responsive techniques.",
        "Optimized the visual aesthetics of web pages, resulting in a 15% reduction in website server load and improved performance."
      ]
    },
    {
      role: "Campus Super Hero & Team Lead",
      company: "Coding Blocks",
      companylogo: require("./assets/images/cb.jpg"),
      date: "Jul 2022 - Jul 2023",
      desc: "Skills: Team Management ▪ Leadership ▪ Event Speaker",
      descBullets: [
        "Selected as a Campus Ambassador for Coding Blocks, contributing to the identification of energetic, smart and passionate college students.",
        "Engaged with brilliant minded individuals, fostering a community of superheroes, collectively in education and technology space."
        // "Enhanced visual aesthetics of web pages, contributing to a notable 15% decrease in website server load.",
        // "Strategically navigated the intersection of modern design principles and emerging AI trends.",
        // "Successfully optimized performance, ensuring a seamless and visually appealing online presence."
      ]
    },
    {
      role: "Co-founder & Technical Lead",
      company: "Insights Club",
      companylogo: require("./assets/images/insights.png"),
      date: "Aug 2022 – Feb 2023",
      desc: "Skills: MERN Stack ▪ Onrender ▪ Vercel ▪ GitHub ▪ Team Lead",
      descBullets: [
        "Served as Technical Lead, contributed to the backend and database team by dynamically deploying server-side codebase.",
        "Significantly reduced time and human effort by 200 times, automating the process of cache load and encryption of data efficiently."
        // "I was served as Technical Lead, contributed to the backend and database team by deploying the server side codebase dynamically.",
        // "Technical operations, monitoring and evaluating core member progress, assist with training and assistance, set goals, and ensure overall user satisfaction through our website.",
        // "Reduced time and human effort 200 times by automating the process of cache load and encryption of data."
      ]
    },
    // {
    //   role: "Amazon ML Summer School",
    //   company: "Amazon",
    //   companylogo: require("./assets/images/amazonml.png"),
    //   date: "Jun 2022 – Jul 2022",
    //   desc: "Skills: Python ▪ Jupyter Notebook ▪ ML Models",
    //   descBullets: [
    //     "Gained hands-on experience and in-depth knowledge in cutting-edge machine learning technologies and applications.",
    //     "Demonstrated and solve complex problems and deliver tangible results through the trained ML application with datasets."
    //   ]
    // },
    // {
    //   role: "PwC Salesforce Trainee",
    //   company: "PwC India",
    //   companylogo: require("./assets/images/pwc.jpg"),
    //   date: "Jun 2023 - Sep 2023",
    //   desc: "Skills: Trailhead ▪ Modules ▪ Salesforce",
    //   descBullets: [
    //     "Trained in Salesforce fundamentals, specializing in Sales & Service Cloud for effective customer management & sales processes.",
    //     "Skilled in executing marketing campaigns, managing Salesforce configuration, security, data using declarative tools & Apex code."
    //   ]
    // },
    {
      role: "Microsoft Engage Internship & Mentee",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoft.png"),
      date: "May 2022 - Aug 2022",
      desc: "Skills: MERN Stack ▪ Python ▪ Jupyter Notebook ▪ MongoDB ▪ Heroku",
      descBullets: [
        "Successfully completed the Microsoft Engage internship, developed a movie prototype recommendation system using ML algorithm, MERN stack and cloud database.",
        "Wrote over 100,000 lines of code during the development of the codebase, achieved accurate model."
        // "Enhanced visual aesthetics of web pages, contributing to a notable 15% decrease in website server load.",
        // "Strategically navigated the intersection of modern design principles and emerging AI trends.",
        // "Successfully optimized performance, ensuring a seamless and visually appealing online presence."
      ]
    },
    {
      role: "Amazon ML Summer School",
      company: "Amazon",
      companylogo: require("./assets/images/amazonml.png"),
      date: "Jun 2022 – Jul 2022",
      desc: "Skills: Python ▪ Jupyter Notebook ▪ ML Models ▪ HTML ▪ CSS",
      descBullets: [
        "Gained hands-on experience and in-depth knowledge in cutting-edge machine learning technologies and applications.",
        "Demonstrated and solve complex problems and deliver tangible results through the trained ML application with datasets."
      ]
    }
    // {
    //   role: "Open Source Contributor",
    //   company: "Hacktoberfest",
    //   companylogo: require("./assets/images/hacktoberfest.png"),
    //   date: "Oct 2023 - Nov 2023",
    //   desc: "Skills: MERN Stack ▪ NextJS ▪ AWS ▪ Figma ▪ Git Bash ▪ Vercel",
    //   descBullets: [
    //     "Enhanced 'scala' an open source automation project using MERN Stack, NextJS, and AWS.",
    //     "Showcased collaborative development skills, contributed developer community through innovative contributions through successful commits."
    //     // "Enhanced visual aesthetics of web pages, contributing to a notable 15% decrease in website server load.",
    //     // "Strategically navigated the intersection of modern design principles and emerging AI trends.",
    //     // "Successfully optimized performance, ensuring a seamless and visually appealing online presence."
    //   ]
    // },
    // {
    //   role: "Campus Super Hero & Team Lead",
    //   company: "Coding Blocks",
    //   companylogo: require("./assets/images/cb.jpg"),
    //   date: "Jul 2022 - Jul 2023",
    //   desc: "Skills: MERN Stack, Python, GitHub and Team Management",
    //   descBullets: [
    //     "Selected as a Campus Ambassador for Coding Blocks, contributing to the identification of energetic, smart and passionate college students.",
    //     "Engaged with brilliant minded individuals, fostering a community of superheroes, collectively in education and technology space."
    //     // "Enhanced visual aesthetics of web pages, contributing to a notable 15% decrease in website server load.",
    //     // "Strategically navigated the intersection of modern design principles and emerging AI trends.",
    //     // "Successfully optimized performance, ensuring a seamless and visually appealing online presence."
    //   ]
    // },
    // {
    //   role: "Co-founder & Technical Lead",
    //   company: "Insights Club",
    //   companylogo: require("./assets/images/insights.png"),
    //   date: "Aug 2022 – Feb 2023",
    //   desc: "Skills: MERN Stack ▪ Onrender ▪ Vercel ▪ GitHub ▪ Team Lead",
    //   descBullets: [
    //     "Served as Technical Lead, contributed to the backend and database team by dynamically deploying server-side codebase.",
    //     "Significantly reduced time and human effort by 200 times, automating the process of cache load and encryption of data efficiently."
    //     // "I was served as Technical Lead, contributed to the backend and database team by deploying the server side codebase dynamically.",
    //     // "Technical operations, monitoring and evaluating core member progress, assist with training and assistance, set goals, and ensure overall user satisfaction through our website.",
    //     // "Reduced time and human effort 200 times by automating the process of cache load and encryption of data."
    //   ]
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  // display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects💻",
  subtitle: "SOME BIG PROJECTS FOR INTERNSHIP AND COMPANY HACKATHONS, THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ms1.png"),
      projectName: "HyperTube",
      projectDesc: "Developed a movie platform with browsing, watchlist etc. by collaborated on onboarding redesign, reducing customer support inquiries by 30%.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Shrey-Srivastava21/HyperTube"
        }
      ]
    },
    {
      image: require("./assets/images/iconnect24.png"),
      projectName: "i-Connect",
      projectDesc: "Built a user-friendly website for seamless cross-generational knowledge exchange, uniting user to promote mentorship and community interaction etc.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Shrey-Srivastava21/i-Connect"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/JanSewa24.jpg"),
      projectName: "JanSewa",
      projectDesc: "Designed a unique e-job portal designed to connect skilled laborers (plumbers, electricians, carpenters, etc.) with job employers directly.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Shrey-Srivastava21/JanSewa"
        }
      ]
    },
    {
      image: require("./assets/images/BitChain24.jpg"),
      projectName: "BitChain",
      projectDesc: "Total Stake Counter application that allows users to track the total stake for three different blockchain networks: Cardano, Polkadot, and Kusama.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Shrey-Srivastava21/BitChain"
        }
      ]
    },
    {
      image: require("./assets/images/docfraud1.png"),
      projectName: "DocAuth",
      projectDesc: "Implemented to detect forgeries in documents, including signature fraud, copy & paste forgery, identification document forgery etc.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Shrey-Srivastava21/DocAuth"
        }
      ]
    },
    // {
    //   image: require("./assets/images/ms1.png"),
    //   projectName: "HyperTube",
    //   projectDesc: "Developed a movie platform with browsing, watchlist etc. by collaborated on onboarding redesign, reducing customer support inquiries by 30%.",
    //   footerLink: [
    //     {
    //       name: "My GitHub Account",
    //       url: "https://github.com/Shrey-Srivastava21"
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/quizi1.png"),
      projectName: "Quizi",
      projectDesc: "An online quiz app includes features with various game modes and topics, using NextJS, ReactJS, Vercel, Tailwind CSS & utilized cohere.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/Shrey-Srivastava21/Quizi"
        }
      ]
    },
    {
      image: require("./assets/images/github24.jpg"),
      projectName: "My GitHub",
      projectDesc: "I have successfully completed solo, group, and open-source projects, with some currently in the development phase using various tech stacks.",
      footerLink: [
        {
          name: "My GitHub Account",
          url: "https://github.com/Shrey-Srivastava21"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Internship",
      subtitle:
        "Completed Full Stack internship, applied agile methodologies, collaborated with cross-functional teams with problem-solving abilities.",
      image: require("./assets/images/ethnus12.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1uJ0cMcTMSrdtVZlV8xddokindqor2tFp/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Insights Club",
      subtitle:
        "I was the technical lead of one of the top clubs in VITB, severed as head in charge of the technical department in Webapp teams.",
      image: require("./assets/images/insights.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          // name: "View Google Assistant Action",
          name: "View Certificate",
          url: "https://certificate.givemycertificate.com/c/866d08c2-ccf2-417f-88f5-44a494dee18e"
        },
        {
          name: "Verify Certification",
          url: "https://verification.givemycertificate.com/v/866d08c2-ccf2-417f-88f5-44a494dee18e"
        },
      ]
    },

    {
      title: "Coding Portals",
      subtitle: "Solved over 1500+ questions on competitive coding websites. Expert, Guardian & 5⭐coder in worldwide among different portals.",
      // image: require("./assets/images/pwaLogo.webp"),
      image: require("./assets/images/allportal.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
    {
      title: "All Certifications",
      subtitle: "Acquired certifications on MERN Stack, Data Analytics, Data Science, Leadership, and participation in hackathons and coding challenges.",
      // image: require("./assets/images/pwaLogo.webp"),
      image: require("./assets/images/cert1.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "Certificates Link",
          url: "https://www.linkedin.com/in/shrey-srivastava21/details/certifications/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs📂",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS🔊",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Lead / Winner / Dev / Hackathons...",
      subtitle: "Participated in hackathons organized by Amazon, Bajaj, Accenture, etc.",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://unstop.com/competitions/hackon-with-amazon-season-3-amazon-729950"

    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv111/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me☎️"),
  subtitle:
    "Discuss a project📜with Me. My Inbox📧is open for all.",
  // number: "+𝟗𝟏-𝟔𝟑𝟗𝟐𝟎𝟗𝟖𝟏𝟑𝟑",
  // number: "+𝟫𝟣-𝟨𝟥𝟫𝟤𝟢𝟫𝟪𝟣𝟥𝟥",
  number: "+𝟿𝟷-𝟼𝟹𝟿𝟸𝟶𝟿𝟾𝟷𝟹𝟹",
  // email_address: "𝐬𝐡𝐫𝐞𝐲.𝐬𝐫𝐢𝐯𝐚𝐬𝐭𝐚𝐯𝐚𝟐𝟏𝟎𝟏@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦"
  // email_address: "𝚜𝚑𝚛𝚎𝚢.𝚜𝚛𝚒𝚟𝚊𝚜𝚝𝚊𝚟𝚊𝟸𝟷𝟶𝟷@𝚐𝚖𝚊𝚒𝚕.𝚌𝚘𝚖"
  email_address: "𝚜𝚑𝚛𝚎𝚢.𝚜𝚛𝚒𝚟𝚊𝚜𝚝𝚊𝚟𝚊𝟸𝟷𝟶𝟷@𝚐𝚖𝚊𝚒𝚕.𝚌𝚘𝚖"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
