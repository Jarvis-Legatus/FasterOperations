import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2, // New ID for How It Works
    title: "Services",
    path: "/services", // Link to the services page
    newTab: false,
  },
  {
    id: 3, // Updated ID for About
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Pricing",
  //   path: "/pricing",
  //   newTab: false,
  // },
  {
    id: 4, // Updated ID for Contact
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5, // Updated ID for Blog
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
  // {
  //   id: 6,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 61,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     // {
  //     //   id: 62,
  //     //   title: "Pricing Page",
  //     //   path: "/pricing",
  //     //   newTab: false,
  //     // },
  //     {
  //       id: 63,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 64,
  //       title: "Blog Grid Page",
  //       path: "/blogs",
  //       newTab: false,
  //     },
  //     {
  //       id: 66,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 67,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 68,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
