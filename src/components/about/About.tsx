import { Separator } from "../ui/separator";

const About = () => {
  return (
    <div className="mb-32">
      <h1 className="text-5xl mb-12 border-b-2 border-[#FEC86A] max-w-max pb-3">About</h1>
      <p className="text-xl text-[#CBCCCD] md:max-w-[70%] md:flex gap-3 ">
        <Separator className="bg-[#FEC86A] w-6 h-0.5 mt-4 hidden md:flex" />{" "}
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
