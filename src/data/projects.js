// src/data/projects.js
const projects = [
  {
    id: 1,
    title: "Airbnb Booking App",
    description:
      "This is a rental booking web app inspired by Airbnb, developed using MERN stack with EJS as the templating engine for server-side rendering. It provides a seamless experience for browsing, listing, and managing rental properties with authentication, CRUD operations and a responsive design.",
    image: "/img1.jpg",
    demo: "https://www.hafiztanzeel.me/",
    repo: "https://github.com/Hafiz-Tanzeel-Shamshad/Airbnb-Mern-Project.git",
    tags: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport", "Bootstrap"],
  },
  {
    id: 2,
    title: "KINZOO ENERGY",
    description:
      "KINZOO ENERGY is a crypto mining platform built with the MERN stack, offering secure OKX Wallet authentication, real-time mining analytics, and a built-in referral system. It enables users to monitor performance, track earnings, and manage all crypto assets seamlessly right from one powerful dashboard.",
    image: "/img2.jpg",
    demo: "#",
    repo: "https://github.com/Hafiz-Tanzeel-Shamshad/crypto-mining-app.git",
    tags: ["React", "Redux", "Tailwind", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Parallel Image Processing",
    description:
      "This application demonstrating the performance comparison between sequential, multithreaded, and multiprocessing approaches for basic image processing tasks like edge detection, Gaussian blur, and histogram equalization.",
    image: "/img3.jpg",
    demo: "https://parallel-image-processing.streamlit.app/",
    repo: "https://github.com/Hafiz-Tanzeel-Shamshad/parallel-image-processing.git",
    tags: ["Streamlit", "NumPy", "Pandas", "Pillow", "Matplotlib"],
  },
  {
  id: 4,
  title: "Dental Disease Detection System",
  description:
    "A comprehensive dental disease detection system developed as both a mobile and web application. The mobile app is built in Flutter, while the web UI is implemented in React, with a FastAPI backend. The system processes intraoral and panoramic images to detect dental issues using advanced computer vision and deep learning techniques.",
  image: "/dental-project.jpg",
  demo: "https://your-demo-link.com", // replace with actual demo link if available
  repo: "https://github.com/Hafiz-Tanzeel-Shamshad/dental-disease-detection.git",
  tags: ["Flutter", "React", "FastAPI", "Computer Vision", "Deep Learning", "YOLOv8", "YOLOv9"],
}

  //   {
  //   id: 4,
  //   title: "New Cool Project",
  //   description: "Something awesome with Next.js and Tailwind.",
  //   image: "/projects/new.png",
  //   demo: "https://demo-link.com",
  //   repo: "https://github.com/yourrepo",
  //   tags: ["Next.js", "Tailwind", "JavaScript","Python","Django","ScikitLearn","PyTorch","TensorFlow"],
  // }
];

export default projects;
