import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-100 flex flex-col">
      <header className="flex items-center justify-between px-8 py-6 bg-white shadow">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="https://framerusercontent.com/images/hTfooh2uyO11UF1QaupkJwnoBg.jpg"
              alt="Santosh"
            />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-3xl font-bold">Santosh</CardTitle>
            <span className="text-muted-foreground text-base">
              Frontend Developer
            </span>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary">India</Badge>
              <Badge variant="secondary">
                Looking for longterm opportunities
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href="mailto:santoshkg770@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <img
                src="/images/icons/email.svg"
                alt="Mail"
                className="h-5 w-5"
              />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/santoshkg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <img
                src="/images/icons/linkedin.svg"
                alt="LinkedIn"
                className="h-5 w-5"
              />
            </Button>
          </a>
          <a
            href="https://kgsantosh770.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <img
                src="/images/icons/website.svg"
                alt="Portfolio"
                className="h-5 w-5"
              />
            </Button>
          </a>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-10">
        <section>
          <Card className="h-full shadow-none border-none bg-transparent">
            <CardContent className="space-y-6">
              <h2 className="font-semibold text-xl mb-2">About Me</h2>
              <p className="text-base text-gray-700">
                Experienced web developer from Tamil Nadu, India, with a passion
                for crafting seamless digital experiences and a proven track
                record.
              </p>
              <div>
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React.js</Badge>
                  <Badge>Vue.js</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>HTML</Badge>
                  <Badge>CSS/SCSS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Redux</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Docker</Badge>
                </div>
              </div>
              <Card className="mt-10 rounded-none shadow-none bg-transparent border-0 border-l-4 border-purple-800">
                <CardContent className="py-2">
                  <p className="text-purple-900 font-medium text-base leading-relaxed italic">
                    Hi there,
                    <br />
                    <br />
                    I'm excited to contribute my frontend skills and collaborate
                    on impactful projects. Let's build something great together!
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>
        <section>
          <Card className="h-full shadow-none border-none bg-transparent">
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                  <li>Software Developer at Avow Solutions (2024-Present)</li>
                  <li>Software Engineer at Accenture (2021-2024)</li>
                  <li>Apprenticeship at Zoho (2021)</li>
                  <li>Internship at Bharat Clouds (2019)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                  <li>
                    Bachelor's Of Engineering (BE) - Computer Science, Velammal
                    College of Engineering and Technology, Madurai (2017-2021)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Projects</h3>
                <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                  <li>Music Point - Blockchain music posting & rewards</li>
                  <li>Send Krypt - Cryptocurrency transfer app</li>
                  <li>Near Buy - Ecommerce UI with JWT/OAuth2</li>
                  <li>Agri Shopping - Flutter app for organic products</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
