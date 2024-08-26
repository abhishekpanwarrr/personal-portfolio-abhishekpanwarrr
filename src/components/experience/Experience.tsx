import { Separator } from "@/components/ui/separator";

const Experience = () => {
  return (
    <div>
      <h1 className="text-5xl mb-12 border-b-2 border-[#FEC86A] max-w-max pb-3">
        Experience
      </h1>
      <div className="flex gap-8">
        <Separator className="w-10 h-1 bg-[#FEC86A]" />
        <ul className="list-disc max-w-[70%]">
          <li>Spearheaded the migration of a Chrome extension from vanilla JavaScript to React,optimizing code structure and enhancing maintainability.</li>
          <li>Identified and resolved complex bugs in React applications.</li>
          <li>Demonstrated proficiency in developing and maintaining Logout Options Page, a high-traffic webview with over 1.15M monthly users, driving user engagement and satisfaction</li>
          <li>
            I authored comprehensive end-to-end test cases utilizing Cypress, as well as unit test cases leading to a substantial boost in code coverage from 65% to over 85%. This quality assurance initiative ensured more robust and reliable software, enhancing overall product stability.
          </li>
          <li>Developed test suites for Chrome extension and site using Cypress,ensuring the extension and website functionality andr eliability.</li>
        </ul>
      </div>
    </div>
  )
}

export default Experience