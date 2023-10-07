import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaPython, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiCypress,
  SiFastapi,
  SiJavascript,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
const skills = [
  { title: "React Js", icon: <FaReact className="text-5xl text-blue-700" /> },
  { title: "Python", icon: <FaPython className="text-5xl text-yellow-600" /> },
  { title: "Fastapi", icon: <SiFastapi className="text-5xl text-[#079586]" /> },
  {
    title: "MongoDB",
    icon: <SiMongodb className="text-5xl text-green-500" />,
  },
  { title: "HTML 5", icon: <FaHtml5 className="text-5xl text-[#FF6D00]" /> },
  { title: "CSS 3", icon: <FaCss3 className="text-5xl text-[#019EE8]" /> },
  {
    title: "Cypress",
    icon: (
      <SiCypress className="text-5xl border-2 rounded-full border-[#26E99D]" />
    ),
  },
  {
    title: "Javascript",
    icon: <SiJavascript className="text-5xl text-[#FED701]" />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript className="text-5xl text-[#3177C7]" />,
  },
];

const Skills = () => {
  return (
    <div className="my-44">
      <h1 className="text-5xl mb-12 border-b-2 border-[#FEC86A] max-w-max pb-3">
        My Skills
      </h1>
      <div className="flex gap-8 flex-wrap">
        {skills.map((skill, index) => (
          <Card
            className="w-32 h-18 hover:bg-[#FEC86A] hover:border-[#FEC86A] transition-all hover:text-white"
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
