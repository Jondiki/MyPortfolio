/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MaQUxymRAio
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <main
      key="1"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl w-full space-y-12">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  alt="Developer Avatar"
                  src="/placeholder-avatar.jpg"
                />
                <AvatarFallback className="text-4xl">JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Full-Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Experienced full-stack developer with a passion for building
              innovative and user-friendly web applications.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="space-y-4">
                <img
                  alt="Project 1"
                  className="rounded-lg object-cover"
                  height={225}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Project 1</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A web application that helps users manage their tasks and
                    projects.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Link className="text-blue-500 hover:underline" href="#">
                      View Website
                    </Link>
                    <Separator className="h-4" orientation="vertical" />
                    <Link className="text-blue-500 hover:underline" href="#">
                      View GitHub
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <img
                  alt="Project 2"
                  className="rounded-lg object-cover"
                  height={225}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Project 2</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A mobile app that helps users track their fitness goals and
                    progress.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Link className="text-blue-500 hover:underline" href="#">
                      View Website
                    </Link>
                    <Separator className="h-4" orientation="vertical" />
                    <Link className="text-blue-500 hover:underline" href="#">
                      View GitHub
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <img
                  alt="Project 3"
                  className="rounded-lg object-cover"
                  height={225}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Project 3</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A web-based e-commerce platform for selling handmade
                    products.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Link className="text-blue-500 hover:underline" href="#">
                      View Website
                    </Link>
                    <Separator className="h-4" orientation="vertical" />
                    <Link className="text-blue-500 hover:underline" href="#">
                      View GitHub
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            <div className="flex flex-col items-center space-y-2">
              <ComponentIcon className="w-8 h-8" />
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CodepenIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TypeIcon className="w-8 h-8" />
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DatabaseIcon className="w-8 h-8" />
              <span className="text-sm font-medium">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GitGraphIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Git</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ContainerIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Docker</span>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                <BriefcaseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Full-Stack Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Acme Inc. | 2019 - Present
                  </p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-4">
                Responsible for developing and maintaining the company's web
                application, including the front-end and back-end components.
                Collaborated with the design team to ensure a seamless user
                experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                <BriefcaseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Front-End Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Widgets Inc. | 2016 - 2019
                  </p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-4">
                Developed and maintained the front-end of the company's web
                application, ensuring a responsive and user-friendly design.
                Collaborated with the back-end team to integrate the front-end
                with the API.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <Card>
            <CardContent className="space-y-6">
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[120px]"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="justify-self-end" type="submit">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function ContainerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}
