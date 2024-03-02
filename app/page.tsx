"use client";
import Image from 'next/image';
import Link from 'next/link';
import { 
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTwitter,
  SiGithub,
  SiLinkedin,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiSupabase,
  SiDocker,
  SiVercel,
  SiGraphql
} from 'react-icons/si';


const my_skills: any = {
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  css: SiCss3,
  html: SiHtml5,
  javascript: SiJavascript,
  supabase: SiSupabase,
  docker: SiDocker,
  vercel: SiVercel,
  graphql: SiGraphql,
} as const;


import cn from 'classnames';
import Container from "./components/nav";
import Card from "./components/blog";
import ExternalLink from "./components/link";


export default function Home(){
  const career = [
    {
      title: "Egniol Services",
      description: `Working as a frontend developer at Egniol Services. I work on building web applications using React, Next.js, Tailwind CSS and other modern web technologies.`,
      time: "11 months",
      type: "Content Lead",
      url: "https://egniol.co.in/"
    },

    {
      title: "neoG Camp.",
      description: `Managed the frontend of the main website. I also was a part of building internal tools and LMS and dashboard that benefitted neoG Camp.
         Mockman was one of the internal tool I made which is used by over 1000+ times.`,
      time: "6 months",
      type: "SDE Intern",
      url: "https://neog.camp/",
      logo: "https://neog-lms.vercel.app/favicon.png",
    },
  ];

  const redGradient =
    "bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-transparent bg-clip-text";



    
}