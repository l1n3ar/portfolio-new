import { GeistSans } from 'geist/font/sans';
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from './components/ui/floating-navbar';
import { TracingBeam } from './components/ui/tracing-beam';
import "./globals.css";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Work",
    link: "/work",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
 
        <body className="relative  w-full overflow-y-scroll overflow-x-hidden">
          <FloatingNav navItems={navItems} />
          <div>{children}</div>
        </body>
  



    </html>
  );
}
