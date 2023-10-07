import { Separator } from "../ui/separator";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl my-2">About</h1>
      <p className="text-xl text-[#97989A] md:max-w-[70%] md:flex gap-3 ">
        <Separator className="bg-[#FEC86A] w-20 h-0.5 mt-4 hidden md:flex" />{" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
        assumenda enim voluptatibus animi rem necessitatibus repellendus
        maiores, esse in velit! Et, perspiciatis dolorum cupiditate culpa cum
        expedita quae dolorem voluptatibus. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Fugit, rem consequatur! Odio magni commodi
        culpa. Nesciunt impedit officiis quia blanditiis accusamus. Repudiandae
        nam nesciunt nulla necessitatibus eaque, voluptate at voluptas.
      </p>
    </div>
  );
};

export default About;
