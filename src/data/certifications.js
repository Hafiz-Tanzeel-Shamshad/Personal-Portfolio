const certifications = [
 
  {
    id: 4,
    title: "Java Class Library",
    issuer: "Coursera",
    image: "/assets/Java/Java-Class-Library.pdf",
    category: "Java",
    description:
      "Covers core Java class libraries, including collections, I/O, and common utility APIs used in everyday application development.",
  },
  {
    id: 5,
    title: "Create Your First Multithreaded Application in Java",
    issuer: "Coursera",
    image: "/assets/Java/Create-Your-First-Multithreaded Application-in-Java.pdf",
    category: "Java",
    description:
      "Introduces Java concurrency basics, thread creation, synchronization, and safe access to shared resources.",
  },
  {
    id: 6,
    title: "CPP: Advanced Programming in C++",
    issuer: "CISCO",
    image: "/assets/Compiler/Hafiz%20TanzeelShamshad-Compiler%20Constru-certificate.pdf",
    category: "Compiler",
    description:
      "Strengthens advanced C++ concepts, including object-oriented design, memory management, and practical problem-solving patterns.",
  },
  {
    id: 7,
    title: "JavaScript Essentials 1 (JSE)",
    issuer: "CISCO",
    image: "/assets/Compiler/Hafiz%20TanzeelShamshad-Object%20Oriented%20-certificate.pdf",
    category: "Compiler",
    description:
      "Covers core JavaScript syntax, control flow, functions, and fundamentals needed for web programming.",
  },
  {
    id: 8,
    title: "Embedded Software and Hardware Architecture",
    issuer: "Coursera",
    image: "/assets/Assembly/Coursera%20Embedded%20Software%20and%20Hardware%20Architecture.pdf",
    category: "Assembly",
    description:
      "Explores embedded systems design, hardware-software interaction, and architecture fundamentals for constrained devices.",
  },
  {
    id: 9,
    title: "Create a Python Application using PyMongo and MongoDB Database",
    issuer: "Coursera",
    image: "/assets/Database/Create%20a%20Python%20Application%20using%20MongoDB%20Database.pdf",
    category: "Database",
    description:
      "Builds a Python app that connects to MongoDB with PyMongo, focusing on CRUD workflows and data handling.",
  },
  {
    id: 10,
    title: "CRUD Operations using MongoDB NoSQL",
    issuer: "Coursera",
    image: "/assets/Database/CRUD%20Operations%20using%20MongoDB%20NoSQL.pdf",
    category: "Database",
    description:
      "Covers creating, reading, updating, and deleting documents in MongoDB using NoSQL best practices.",
  },
  {
    id: 11,
    title: "Create Your First NoSQL Database with MongoDB and Compass",
    issuer: "Coursera",
    image: "/assets/Database/Database%20with%20MongoDB%20and%20Compass.pdf",
    category: "Database",
    description:
      "Introduces MongoDB databases and Compass for schema exploration, imports, and basic data management.",
  },
  {
    id: 12,
    title: "Introduction to Relational Database and SQL",
    issuer: "Coursera",
    image: "/assets/Database/Introduction%20to%20Relational%20Database%20and%20SQL.pdf",
    category: "Database",
    description:
      "Explains relational concepts, tables, keys, and core SQL querying fundamentals.",
  },
  {
    id: 13,
    title: "Performing Data Definition and Manipulation in SQL",
    issuer: "Coursera",
    image: "/assets/Database/Performing%20Data%20Definition%20and%20Manipulation%20in.pdf",
    category: "Database",
    description:
      "Practices SQL DDL and DML commands for creating schemas, inserting records, and updating data safely.",
  },
  {
    id: 14,
    title: "IoT Fundamentals: Connecting Things",
    issuer: "CISCO",
    image: "/assets/Digital%20Logic%20Design/Hafiz%20TanzeelShamshad-Internet%20of%20Thin-certificate_2.pdf",
    category: "Digital Logic Design",
    description:
      "Introduces IoT basics, device connectivity, and the core concepts behind connecting physical things to networks.",
  },
  {
    id: 15,
    title: "Mobile Application Development",
    issuer: "",
    image: "/assets/Flutter%20application%20develpment/Mobile%20Application%20Development.pdf",
    category: "Flutter application develpment",
    description:
      "Covers mobile app fundamentals with Flutter, including UI composition, navigation, and app lifecycle basics.",
  },
  {
    id: 16,
    title: "NDG LINUX ESSENTIALS",
    issuer: "CISCO",
    image: "/assets/Operating%20System/CISCO%20-%20Operating%20System-certificate.pdf",
    category: "Operating System",
    description:
      "Validates core Linux skills, command-line navigation, file management, and basic system administration concepts.",
  },
  {
    id: 17,
    title: "CPA: Programming Essentials in C++",
    issuer: "CISCO",
    image: "/assets/C%2B%2B%20Programming/CISCO-Programming%20fund-certificate.pdf",
    category: "C++ Programming",
    description:
      "Covers C++ fundamentals, data types, control flow, and basic problem-solving with the language.",
  },
  {
    id: 18,
    title: "Building simple Pong Game using C++",
    issuer: "Coursera",
    image: "/assets/C%2B%2B%20Programming/Coursera%20Building%20simple%20Pong%20Game%20using%20C%2B%2B.pdf",
    category: "C++ Programming",
    description:
      "Builds a basic Pong game to practice rendering, game loops, and C++ program structure.",
  },
  {
    id: 19,
    title: "C++ Basics: Selection and Iteration",
    issuer: "Coursera",
    image: "/assets/C%2B%2B%20Programming/Coursera%20C%2B%2B%20Basics%20Selection%20and%20Iteration.pdf",
    category: "C++ Programming",
    description:
      "Focuses on conditionals, loops, and foundational control structures in C++.",
  },
  {
    id: 20,
    title: "Project: Creating Your First C++ Application",
    issuer: "Coursera",
    image: "/assets/C%2B%2B%20Programming/Coursera%20Project%20Creating%20Your%20First%20C%2B%2B%20Application.pdf",
    category: "C++ Programming",
    description:
      "Guides a first C++ application project with compilation, input/output, and program organization.",
  },
  {
    id: 21,
    title: "Build Your Portfolio Website with HTML and CSS",
    issuer: "Coursera",
    image: "/assets/Web%20Development/Build%20Your%20Portfolio%20Website%20with%20HTML%20and%20CSS.pdf",
    category: "Web Development",
    description:
      "Covers building a responsive portfolio site using semantic HTML and modern CSS layout techniques.",
  },
  {
    id: 22,
    title: "Introduction to CSS in Web Development",
    issuer: "Coursera",
    image: "/assets/Web%20Development/Coursera%20Introduction%20to%20CSS%20in%20Web%20Development.pdf",
    category: "Web Development",
    description:
      "Introduces styling fundamentals, selectors, box model, and layout concepts for web pages.",
  },
  {
    id: 23,
    title: "Introduction to HTML5",
    issuer: "Coursera",
    image: "/assets/Web%20Development/Coursera%20Introduction%20to%20HTML5.pdf",
    category: "Web Development",
    description:
      "Explains HTML5 structure, semantic elements, forms, and accessibility basics.",
  },
  {
    id: 24,
    title: "CCNA: Introduction to Networks",
    issuer: "CISCO",
    image: "/assets/Computer%20Networks/_certificate_40654-students-riphah-edu-pk_4e0acf5e-e1b2-48a7-b5ed-cb83847df8b1.pdf",
    category: "Computer Networks",
    description:
      "Covers networking fundamentals, IP addressing, routing basics, and network device roles.",
  },
  {
    id: 25,
    title: "Partner: NDG Linux Essentials",
    issuer: "CISCO",
    image: "/assets/Computer%20Networks/Partner-_NDG_Linux_Essentials_certificate_40654-students-riphah-edu-pk_ab12ef52-33d2-4dcb-ad9b-95acd9c4e906.pdf",
    category: "Computer Networks",
    description:
      "Introduces Linux fundamentals, command-line usage, and basic system concepts for networking learners.",
  },
  {
    id: 26,
    title: "Partner: NDG Linux Unhatched",
    issuer: "CISCO",
    image: "/assets/Computer%20Networks/Partner-_NDG_Linux_Unhatched_certificate_40654-students-riphah-edu-pk_fcc46668-2bfd-44bb-8e50-16d402a800f4.pdf",
    category: "Computer Networks",
    description:
      "Builds Linux starter skills, terminal navigation, file operations, and basic command usage.",
  },
  {
    id: 27,
    title: "Partner: CPA - Programming Essentials in C++",
    issuer: "CISCO",
    image: "/assets/C%2B%2B%20Programming/Partner-_CPA_-_Programming_Essentials_in_C--_certificate_40654-students-riphah-edu-pk_73757118-5214-48de-9ad6-782f763a6d7a.pdf",
    category: "C++ Programming",
    description:
      "Confirms C++ essentials with emphasis on syntax, control structures, and foundational programming skills.",
  },
  {
    id: 28,
    title: "Partner: CPP - Advanced Programming in C++",
    issuer: "CISCO",
    image: "/assets/C%2B%2B%20Programming/Partner-_CPP_-_Advanced_Programming_in_C--_certificate_40654-students-riphah-edu-pk_3bdf7dbf-cb7a-43e7-a73a-7942b7c3ed83.pdf",
    category: "C++ Programming",
    description:
      "Highlights advanced C++ topics, including OOP design, memory management, and best practices.",
  },
  {
    id: 29,
    title: "Python Essentials 1",
    issuer: "CISCO",
    image: "/assets/Artificial%20Intelligence/Python_Essentials_1.pdf",
    category: "Artificial Intelligence",
    description:
      "Introduces Python fundamentals, data types, control flow, and basic scripting skills.",
  },
  {
    id: 30,
    title: "Python Essentials 2",
    issuer: "CISCO",
    image: "/assets/Artificial%20Intelligence/Python%20Essentials%202%20.pdf",
    category: "Artificial Intelligence",
    description:
      "Builds on Python basics with functions, modules, and structured program design.",
  },
  {
    id: 31,
    title: "Artificial Intelligence Fundamentals",
    issuer: "CISCO",
    image: "/assets/Artificial%20Intelligence/Artificial%20Intelligence%20Fundamentals.pdf",
    category: "Artificial Intelligence",
    description:
      "Covers AI foundations including problem-solving, intelligent agents, and basic ML concepts.",
  },
  {
    id: 32,
    title: "Introduction to Machine Learning",
    issuer: "Coursera",
    image: "/assets/Artificial%20Intelligence/Introduction%20to%20Machine%20learning.pdf",
    category: "Artificial Intelligence",
    description:
      "Surveys core ML ideas such as supervised learning, model evaluation, and feature engineering basics.",
  },
];

export default certifications;
