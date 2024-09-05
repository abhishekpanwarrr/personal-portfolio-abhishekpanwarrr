const Experience = () => {
  return (
    <div>
      <h1 className="text-5xl mb-12 border-b-2 border-[#FEC86A] max-w-max pb-3">
        Experience
      </h1>
      <div className="flex flex-col gap-8">
        <h3 className="text-lg flex justify-between max-w-5xl">
          <span className="font-semibold">Leadzen ai <span className="text-xs ml-2 text-gray-400">(SDE-1)</span></span>
          <span className="text-xs text-gray-400">Jul 2022 - Dec 2023</span></h3>
        <ul className="list-disc -mt-6 ml-10 max-w-[70%] text-justify">
          <li>Spearheaded the migration of a Chrome extension from vanilla JavaScript to React,optimizing code structure and enhancing maintainability</li>
          <li>Identified and resolved complex bugs in React applications.</li>
          <li>Demonstrated proficiency in developing and maintaining Logout Options Page, a high-traffic webview with over 1.15M monthly users, driving user engagement and satisfaction</li>
          <li>
            I authored comprehensive end-to-end test cases utilizing Cypress, as well as unit test cases leading to a substantial boost in code coverage from 65% to over 85%. This quality assurance initiative ensured more robust and reliable software, enhancing overall product stability.
          </li>
          <li>Developed test suites for Chrome extension and site using Cypress,ensuring the extension and website functionality andr eliability.</li>
          <li>Guided and trained a new tester in setting up Cypress test automation within the company's project environment, including configuring the testing framework, writing comprehensive test cases, and best practices for effective test management and execution.</li>
          <li>Improved application performance by identifying and optimizing bottlenecks, such as reducing bundle sizes, implementing lazy loading, and leveraging code-splitting techniques</li>
          <li>Developed and implemented "Buy Plans" functionality on the frontend using Stripe API, enabling secure and seamless payment processing and subscription management, enhancing the monetization capabilities of the application</li>
        </ul>
        <h3 className="text-lg flex justify-between max-w-5xl">
          <span className="font-semibold">Hexus<span className="text-xs ml-2 text-gray-400">(open source contribution)</span></span>
          <span className="text-xs text-gray-400">Nov 2023 - Jan 2024</span></h3>
        <ul className="list-disc -mt-6 ml-10 max-w-[70%] text-justify">
          <li>Spearheaded the development of the front-end for the website, leveraging TypeScript and ReactJS. As an open source contributor as a solo developer, I seamlessly integrated multiple APIs for create, read, update, and delete operations while implementing  a secure and dynamic user experience.
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Experience