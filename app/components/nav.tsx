import Head from "next/head";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { SiGithub, SiTwitter } from "react-icons/si";
import { ThemeProvider } from "next-themes";

function NavItem({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: any;
}) {
  const Logo = icon;
  return (
    <NextLink href={href}>
      <div className=" content-center p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all flex flex-row">
        <Logo /> <span className="px-3 capsize">{text}</span>
      </div>
    </NextLink>
  );
}

export default function Container(props: { children: any }) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta: any = {
    title: "Nada Farook – Developer, writer, creator.",
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <ThemeProvider attribute="class">
        <div className="flex flex-col justify-center px-8">
          <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
            <div className="flex ml-[-0.60rem]">
              <NavItem
                icon={SiTwitter}
                href="https://twitter.com/___Nadaaa"
                text="Twitter"
              />
              <NavItem
                icon={SiGithub}
                href="https://github.com/NadaaFarook"
                text="Github"
              />
            </div>
          </nav>
        </div>
        <main
          id="skip"
          className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
        >
          {children}
        </main>
      </ThemeProvider>
    </div>
  );
}
