import { Separator } from "../ui/separator";

const About = () => {
  return (
    <div className="mb-15">
      <h1 className="mb-12 max-w-max border-b-2 border-[#FEC86A] pb-3 text-5xl">
        About
      </h1>
      <div className="gap-3 text-xl text-[#CBCCCD] md:flex md:max-w-[100%] lg:max-w-[75%] ">
        <Separator className="mt-4 hidden h-0.5 w-5 bg-[#FEC86A] md:flex" /> I
        am a passionate Frontend Developer with more than 2 years of hands‐on experience
        in crafting robust and user‐friendly web applications. My expertise lies
        in building dynamic and responsive user interfaces using React.js,
        combined with a strong background in JavaScript, Express js Mongodb and proficiency in
        testing with Cypress
      </div>
    </div>
  );
};

export default About;
