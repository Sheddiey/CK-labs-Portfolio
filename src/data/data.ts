//bg-green_3
//bg-green_3
//bg-green_3
//bg-green_3
//bg-green_3
//bg-green_3
//bg-green_3

import k from "../../public/1.jpg";
import genesis from "@/../public/genesis.png";
import restapi from "@/../public/restapi.png";
import inventory from '@/../public/inventorymanagement.png'
import techops from '@/../public/techops.png'

export const projects = [
  {
    title: "TechOps",
    link: "https://techops-v-1-0-0.vercel.app/",
    tags: ["React", "redux", "tailwindCSS"],
    image: techops,
    description:
      "Tech-Hub is a dynamic platform that inspires and motivates individuals to enhance their tech skills by contributing to TechOps open-source projects. It fosters a collaborative environment where users can engage with real-world challenges, share knowledge, and develop expertise, all while making meaningful contributions to the tech community.",
    accent: "green_3",
  },
  {
    title: "Inventory Management Dashboard",
    link: "https://main.d1wzy4x9ymgmru.amplifyapp.com/",
    tags: ["Nextjs", "redux", "tailwindCSS", "Node", "postgresQl"],
    image: inventory,
    description:
      "The Inventory Management Dashboard is a web-based application with a frontend built using Next.js and a backend developed with Node.js and PostgreSQL. Both the frontend and backend are deployed on AWS, providing a scalable and reliable environment for managing inventory data. The dashboard allows users to track, manage, and analyze inventory levels, making it a crucial tool for efficient supply chain management.",
    accent: "green_3",
  },
  {
    title: "Genesis Company",
    link: "https://fintech-cumb.vercel.app/",
    tags: ["React", "redux", "tailwindCSS"],
    image: genesis,
    description:
      "Genesis is a modern eCommerce platform offering a range of integrated features and functionalities designed to enhance the experience for both vendors and customers. Vendors can register and post their products in the marketplace, while customers can sign in to explore and purchase these products. The platform also provides shipping services across East Africa and from East Africa to the USA, on-demand printing services, and a 'Buy Now, Pay Later' feature that allows less fortunate households to acquire products and pay later. Genesis aims to create a comprehensive and user-friendly eCommerce environment that caters to diverse needs.",
    accent: "green_3",
  },
  {
    title: "Rest-Countries-Api",
    link: "https://rest-countries-api-zeta-six.vercel.app/",
    tags: ["React", "redux", "tailwindCSS"],
    image: restapi,
    description:
      "Discover countries worldwide with a React-powered frontend showcasing filter by region and search functionalities, offering a seamless exploration experience of the REST Countries API.",
    accent: "green_3",
  },
];
