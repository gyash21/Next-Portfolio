"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SiChakraui,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiTwitter,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
  SiOpenai,
  SiNotion,
  SiStackoverflow,
} from "react-icons/si";

const STACK_TO_ICON: any = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  posgresql: SiPostgresql,
  chakraui: SiChakraui,
  html: SiHtml5,
  css: SiCss3,
  js: SiJavascript,
  supabase: SiSupabase,
  prisma: SiPrisma,
} as const;

import cn from "classnames";

import Container from "./components/nav";
import BlogPostCard from "./components/blog";
import ExternalLink from "./components/link";
export default function Home() {
  const career = [
    {
      title: "Google Inc",
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      time: "9 months",
      type: "Fullstack Engineer",
      url: "https://vercel.com/",
      logo: "data:image/jpeg;base64,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",
    },
    {
      title: "neoG Camp.",
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      time: "6 months",
      type: "SDE Intern",
      url: "https://vercel.com/",
      logo: "https://neog-lms.vercel.app/favicon.png",
    },
  ];
  const redGradient =
    "bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-transparent bg-clip-text";

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="w-full justify-between flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
              Yash Gupta
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-md mt-4 pr-8">
              I am a 25 yo
              <span
                className={cn(
                  redGradient,
                  "transition-transform duration-500 ease-in-out hover:duration-300"
                )}
              >
                {" "}
                Fullstack Engineer{" "}
              </span>
              having built many projects in past 1 year. Currently building
              internal tools for companies and simplified their workflow with AI
            </p>
            <span className="h-8" />
            <div className="mt-3 text-gray-600 dark:text-gray-400 mb-16 ">
              <h2 className="text-gray-700 dark:text-gray-300 text-md mb-4">
                My tech stack includes but not limited to:
              </h2>
              <div className="mt-2 flex flex-wrap gap-4">
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiTypescript color={"#61DBFB"} />
                  <p>Typescript</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiNextdotjs className="text-black dark:text-white" />
                  <p>NextJS</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiSupabase color={"#61DBFB"} />
                  <p>Supabase</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiPrisma color={"#61DBFB"} />
                  <p>Prisma</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiPostgresql color={"#61DBFB"} />
                  <p>PostgreSQL</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiOpenai color={"#61DBFB"} />
                  <p>OpenAI</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiTailwindcss color={"#4fd1c5"} />
                  <p>Tailwind</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:w-[176px] relative mb-8 sm:mb-0">
            <Image
              alt="Yash Gupta"
              height={180}
              width={180}
              src="/avatar.png"
              sizes="30vw"
              priority
              className="rounded-full filter grayscale ml-auto"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Work Experience
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            My work experience so far.
          </p>
          <ul className="w-full ">
            {career.map((c, index) => (
              <CareerCard
                key={index}
                last={index === career.length - 1}
                career={c}
              />
            ))}
          </ul>
        </div>
        <span className="h-8" />

        <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Projects
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I created a few projects to learn more about the technologies I use.
          You can check them out here. Let me know what you think!
        </p>
        <div className="w-full">
          <ProjectCard
            href="https://vercel.com/"
            title="Q-Overflow"
            brandColor={"#ffffff"}
            projectLogo={SiStackoverflow}
            stack={["nextjs", "typescript", "prisma",]}
            description="An AI assistant that could answer questions, contextualize your bookmarks, sync with notion tables, drive files, pocket articles, & much more. 💁‍♂️✨"
            footerNote="Was responsible for the whole frontend side of it"
            link={false}
          />

          <ProjectCard
            href="https://vercel.com/"
            title="Notion+"
            brandColor={"#1DA1F2"}
            projectLogo={SiNotion}
            stack={["nextjs", "react", "supabase"]}
            footerNote="Has over 250+ users"
            description="A social bookmarking experience for people who like to share knowledge."
            link={false}
          />

        </div>

        <span className="h-16" />
        <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-2 flex-col md:flex-row">
          <BlogPostCard
            title="Introduction to Typescript"
            slug=""
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="A detailed guide to start with Web Development"
            slug=""
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="Some Lesser Known HTML Tags Worth Knowing"
            slug=""
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>
        <p className="mt-10 text-gray-700 inline-flex items-center">
          Original Portfolio by Lee Robinson.
        </p>
      </div>
    </Container>
  );
}
const CareerCard = ({ career, last }: { career: any; last: any }) => {
  const { title, description, time, type, url, logo } = career;
  return (
    <li className=" transform hover:scale-[1.01] transition-all border my-5 dark:border-gray-700 p-4 rounded-lg animate-scale">
      <div className="relative">
        {!last && (
          <span
            className="hidden md:block absolute top-4 left-3 md:left-5 h-full w-0.5 bg-accent"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start md:space-x-3">
          <img
            className="items-center justify-center hidden w-6 h-6 rounded-full md:flex md:w-10 md:h-10"
            src={logo}
            alt="career"
          />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <ExternalLink
                href={url}
                className="flex flex-col md:flex-row space-y-1 md:space-y-0"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-200">
                  {type}
                </span>
              </ExternalLink>
              <p className="text-sm text-secondary text-gray-500">{time}</p>
            </div>
            <p className="text-gray-500 text-sm mt-1 md:mt-0">{title}</p>
            <p className="mb-1.5 mt-2 prose text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>

    </li>
  );
};

function ProjectCard({
  title,
  link,
  description,
  href,
  projectLogo,
  stack,
  brandColor,
  footerNote = "",
}: {
  title: string;
  link: boolean;
  description: string;
  href: string;
  projectLogo: any;
  stack: (string | undefined)[];
  brandColor: string;
  footerNote: string;
}) {
  const Logo = projectLogo;
  return (
    <Link href={href} passHref aria-label={title}>
      <div className=" my-6 transform hover:scale-[1.01] transition-all bg-white dark:bg-gray-900 w-full flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded p-4">
        <div className="flex flex-col gap-4">
          <div className="min-w-[5%] h-full flex flex-col mr-auto">
            <span className="sr-only">{title}</span>
            {title == "QueueOverflow" ? (
              <Image
                src={Logo}
                style={{ color: brandColor }}
                className="min-w-sm text-gray-900 dark:text-gray-100 mt-0"
                alt="QueueOverflow Logo"
                height={32} width={32}

              />
            ) : link == true ? (
              <Image
                src={Logo}
                style={{ color: brandColor }}
                className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                alt="QueueOverflow Logo"
                height={32} width={32}
              />
            ) : (
              <Logo />
            )}
          </div>
          <div>
            <div className="flex space-x-2">
              <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {title}
              </h4>
            </div>
            <p className="leading-5 text-gray-700 dark:text-gray-300 ">
              {description}
            </p>
            <div className="flex flex-wrap mt-2 gap-2">
              {stack.map((stackItem, idx) => {
                // @ts-ignore
                const Icon = STACK_TO_ICON[stackItem];
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center py-1 text-xs font-semibold opacity-60 text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-1">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-xs font-light capitalize">
                      {" "}
                      {stackItem}
                    </p>
                  </span>
                );
              })}
            </div>
            <p className="mt-2 text-xs font-light text-gray-500 dark:text-gray-500">
              {footerNote}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
