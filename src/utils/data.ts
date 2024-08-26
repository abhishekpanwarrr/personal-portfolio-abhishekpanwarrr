import personal from "@/assets/react.avif";
import netflix from "@/assets/netflix.avif";
import task from "@/assets/task.avif";
import vragency from "@/assets/vragency.avif";
import filterMovie from "@/assets/movie-filter-apps.netlify.app.avif";
import kanban from "@/assets/kanban.avif"
import foodyApp from "@/assets/foodyApp.avif"
import amazonClone from "@/assets/amazonClone.avif"
import hotel from "@/assets/hotel.avif";

export const projectData = [
  {
    image: hotel,
    title: "Hotel Booking App",
    link: "https://hotel-booking-frontend-gilt.vercel.app/",
    github: "https://github.com/abhishekpanwarrr/mern-hotel-bookin",
    description: "This is a clone of the Hotel Booking website built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes user authentication, user profile, booking hotels in liked list and cart functionality",
  },
  {
    image: amazonClone,
    title: "Amazon MERN App",
    link: "https://amzone-clone-frontend.vercel.app/",
    github: "https://github.com/abhishekpanwarrr/amzone-clone-mern",
    description: "This is a clone of the Amazon website built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes user authentication, user profile, adding items in liked list and shopping cart functionality",
  },
  // {
  //   image: foodyApp,
  //   title: "Foody React Native App",
  //   link: "",
  //   github: "https://github.com/abhishekpanwarrr/react-native-foody-app",
  //   description: "The Foody app is developed using React Native, allowing users to explore recipes, manage cooking sessions, and create shopping lists seamlessly."
  // },
  {
    image: personal,
    title: "Personal Theme",
    link: "https://react-website-1.netlify.app/",
    github: "https://github.com/abhishekpanwarrr/react-website-1",
    description: "A personal website theme built with React, featuring a clean and modern design. It showcases various sections like About Me, Projects, and Contact, customizable to suit individual preferences."
  },
  // {
  //   image: netflix,
  //   title: "Netflix Clone App",
  //   link: "https://abhishek-netflix-clonee.netlify.app/",
  //   github: "https://github.com/abhishekpanwarrr/netflix-react",
  //   description: "A clone of the Netflix interface developed using React. It replicates the key features of Netflix, including browsing movies and TV shows, user authentication, and responsive design."
  // },
  // {
  //   image: task,
  //   title: "Task Manager App",
  //   link: "https://todos-app-react-firebase.netlify.app/",
  //   github: "https://github.com/abhishekpanwarrr/task-manager-app",
  //   description: "A task management application built with React and Firebase. Users can create, update, and delete tasks, with real-time synchronization across devices."
  // },
  {
    image: vragency,
    title: "VR Agency App",
    link: "https://tailwind-react-website.vercel.app/",
    github: "https://github.com/abhishekpanwarrr/tailwind-react-website",
    description: "A website template designed for virtual reality (VR) agencies, implemented with React and Tailwind CSS. It features sections for showcasing VR projects, team members, and client testimonials."
  },
  {
    image: filterMovie,
    title: "Movie Filter App",
    link: "https://movie-filter-apps.netlify.app/",
    github: "https://github.com/abhishekpanwarrr/movie-search",
    description: "This app allows users to search for movies based on various filters such as genre, release year, and rating. It is developed using React and utilizes the OMDB API for fetching movie data"
  },
  {
    image: kanban,
    title: "Kanban Board",
    link: "https://kanban-boardd.netlify.app/",
    github: "https://github.com/abhishekpanwarrr/kanban-board",
    description: "A Kanban board application built with React, enabling users to manage tasks using the Kanban method. It supports creating tasks, moving them across different stages, and marking them as completed."
  }
];