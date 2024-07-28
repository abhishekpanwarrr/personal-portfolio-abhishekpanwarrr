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
          <li>Revamped the user interface of MysteryBox, leading to a significant increase in user engagement, resulting in a total of 6.51 million monthly visits , proving my expertise in enhancing user experiences.</li>
          <li>Created and managed Bulk Orders Project, achieving exceptional results during its pilot phase in its first city launch: 5,000 daily traffic, Order Per Day (OPD) at 5.8, 170 high-value completed orders, and a Gross Merchandise Value (GMV) of Rs 982,000.</li>
          <li>Demonstrated proficiency in developing and maintaining Logout Options Page, a high-traffic webview with over 1.15M monthly users, driving user engagement and satisfaction</li>
          <li>
            I authored comprehensive end-to-end test cases utilizing Playwright and Cypress, as well as unit test cases with Jest, leading to a substantial boost in code coverage from 65% to over 85%. This quality assurance initiative ensured more robust and reliable software, enhancing overall product stability.
          </li>
          <li>Successfully created and maintained Edit Profile Page, a webview with a user base of 848K monthly active users, delivering valuable software solution.</li>
          <li>
            Demonstrated proficiency in developing and maintaining Logout Options Page, a high-traffic webview with over 1.15M monthly users, driving user engagement and satisfaction.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Experience