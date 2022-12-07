// ICONS
import mountain from "./mountain-icon.png";
import home from "./home-icon.png";
import personas from "./personas-icon.png";
import wimp from "./wimp-icon.png";
import delight from "./delight-icon.png";
import react from "./react-icon.png";

// IMAGES
import otter from "./ominousotter666.png";
import device from "./personas.png";
import wimp_tab from "./wimp_tab.png";
import logo from "./react.png";
import delight_img from "./delight.png";
import otter_bye from "./otter.png";

export const data = [
  {
    id: 0,
    title: "About me!",
    // link: "https://github.com/OminousOtter666",
    description:
      "Welcome to the trail head! My name is OminousOtter666 and I'll be your guide as you travel along the hike. I am extremely familiar with this trail, so I have compiled all of the most meaningful sites into this guide. Each stop will contain a description as well as a short description of the journey to get there. I have also provided a link to view the site itself!",
    posX: 29,
    posY: 11,
    img: otter,
    icon: home,
    // linkDesc: "More about me"
  },
  {
    id: 1,
    title: "Personas",
    descriptionList: [
      {
        linkTitle: "Site Details",
        content:
          "This landmark serves as an exploration into studying user experience, creating personas, and mapping out storyboards. The site contains a description of an interface, responses from user interviews, personas generated from user feedback, and a storyboard detailing the experience of a specific persona.",
      },
      {
        linkTitle: "The Terrain",
        content:
          "The journey to this site began with choosing an accessible public-facing interface. The chosen interface was a wireless presentation tool found in college classrooms. Next, three key users were asked about their experience using the interface. This data drove the creation of two distinct user personas, one of which was used to create a storyboard of their experience using the interface. ",
      },
      {
        linkTitle: "Conclusion",
        content:
          "The path to this site has a few difficult stretches. To begin, coming up with the user interface turns out to be a more complex task than one might initially think. It's then important to craft interview questions which will generate meaningful responses. It's important to ask open, but not leading questions.",
      },
    ],
    link: "https://ominousotter666.github.io/PersonasAndStoryboarding/",
    posX: 57,
    posY: 23,
    icon: personas,
    img: device,
  },
  {
    id: 2,
    title: "Responsive Redesign",
    link: "https://ominousotter666.github.io/ResponsiveRedesign/",
    descriptionList: [
      {
        linkTitle: "Site Details",
        content:
          "This site was recently restored and redesigned aiming to increase accessibility, fix usability, and have a responsive design. The redesign process allowed me to walk through the workflow of generating a new site from identifying flaws in an existing site, creating prototypes, and building a final product based on those prototypes",
      },
      {
        linkTitle: "The Terrain",
        content:
        "I chose the original site because I thought its concept had potential and I could see areas for growth. The redesign process began with identifying issues in the site such as user learnability, unclear hierarchy, and redundant content. I created a low-fidelity wireframe aiming to address these issues and used these to create a high-fidelity prototype. These served as the basis for engineering the new site itself."
      },
      {
        linkTitle: "Conclusion",
        content:
        "There were many learning opportunities in this project such as coming up with solutions to an existing site's issues and how to make the redesigned site responsive (reusing as many elements as possible). Completing this project also taught the importance of a comprehensive style guide in creating high-fidelity prototypes.",
      },
    ],
    posX: 28,
    posY: 36,
    icon: wimp,
    img: wimp_tab,
  },
  {
    id: 3,
    title: "Iterative Design",
    descriptionList: [
      {
        linkTitle: "Site Details",
        content:
          "This part of the trail was actually first explored in a group of four. The goal was to design an interface for an emerging startup. This particular site chose a startup called \"Delight\" whose idea was for a new type of dating app for people fed-up with casual daters and want to only date one person at a time.",
      },
      {
        linkTitle: "The Terrain",
        content:
        "The process for the iterative design consisted of sketching ideas for an interface, translating them into an interactive high-fidelity prototype, performing user testing, and using user feedback to revise the prototype. User feedback was gathered in a peer critique as well as through a user testing platform.",
      },
      {
        linkTitle: "Conclusion",
        content:
        "Designing a fully interactive high-fidelity prototype was a particularly daunting undertaking and involved a lot of communication between all parties involved in the project. The process of creating an interface to solve a specific issue was particularly interesting since we were able to let the solution drive the design of the interface.",
      },
    ],
    link: "https://bloatedpanda444.github.io/iter/",
    posX: 56,
    posY: 52,
    icon: delight,
    img: delight_img,
  },
  {
    id: 4,
    title: "Development",
    descriptionList: [
      {
        linkTitle: "Site Details",
        content:
        "This site aims to utilize React to develop an interactive user interface through using components to modify an internal data state. This particular site is a productivity app for people who struggle to identify which tasks should get done. The app allows the user to filter the data on key metrics such as priority level and sort by estimated time to completion. Users can select items to be completed and the estimated time to complete all selected tasks are aggregated.",
      },
      {
        linkTitle: "The Terrain",
        content:
        "The site is organized as a basic React App which utilizes three main components: the item list, individual items, and the planner component. This architecture requires state data to be passed between parent and child components in order to be accessible at all levels of the hierarchy.",
      },
      {
        linkTitle: "Conclusion",
        content:
        "Parts of this site were a scramble and provided many opportunities for growth. Developing this site involved the consideration of design principles in the structure of a React App. Architecture of the App's component structure, passing data between components, and good design are all crucial aspects of the project.",
      },
    ],
    link: "https://ominousotter666.github.io/development/",
    posX: 52,
    posY: 70,
    icon: react,
    img: logo,
  },
  {
    id: 5,
    title: "Thank you!",
    description:
      "Congratulations on making it to the southern terminus of the traversal! Thank you for taking the time to explore my guide. I'd like to thank Jeff Huang and the CSCI 1300 TAs for their guidance throughout this process and Stable Diffusion for the wonderful views!",
    // link: "www.peepeepoopoo.com",
    posX: 38,
    posY: 89,
    icon: mountain,
    img: otter_bye,
    link: "https://github.com/OminousOtter666",
    linkDesc: "View more sites!"

  },
];
