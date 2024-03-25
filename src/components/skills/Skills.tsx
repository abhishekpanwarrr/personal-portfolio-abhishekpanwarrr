import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiCypress,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiApple,
  SiExpress,
} from "react-icons/si";

const skills = [
  { title: "HTML 5", icon: <FaHtml5 className="text-5xl text-[#FF6D00]" /> },
  { title: "CSS 3", icon: <FaCss3 className="text-5xl text-[#019EE8]" /> },
  {
    title: "Javascript",
    icon: <SiJavascript className="text-5xl text-[#FED701]" />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript className="text-5xl text-[#3177C7]" />,
  },
  { title: "React Js", icon: <FaReact className="text-5xl text-blue-700" /> },
  {
    title: "React Native",
    icon: <SiApple className="text-5xl text-green-500" />,
  },
  {
    title: "Express Js",
    icon: <SiExpress className="text-5xl text-green-500" />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="text-5xl text-green-500" />,
  },

  {
    title: "Cypress",
    icon: (
      <SiCypress className="rounded-full border-2 border-[#26E99D] text-5xl" />
    ),
  },
];

const Skills = () => {
  return (
    <div className="my-44">
      <h1 className="mb-12 max-w-max border-b-2 border-[#FEC86A] pb-3 text-5xl">
        My Skills
      </h1>
      <div className="flex flex-wrap gap-8">
        {skills.map((skill, index) => (
          <Card
            className="h-18 w-36 transition-all hover:border-[#FEC86A] hover:bg-[#FEC86A] hover:text-white"
            key={index}
          >
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>{skill.icon}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
