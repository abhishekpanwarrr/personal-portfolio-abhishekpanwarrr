import React, { Suspense, useEffect } from "react";
import "./App.css";
import toast from 'react-hot-toast';
const Hero = React.lazy(() => import("./components/hero/Hero"));
const About = React.lazy(() => import("./components/about/About"));
const Portfolio = React.lazy(() => import("./components/portfolio/Portfolio"));
const Experience = React.lazy(
  () => import("./components/experience/Experience")
);
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Skills = React.lazy(() => import("./components/skills/Skills"));

function App() {

  useEffect(() => {
    (async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const locationRes = await fetch(
              `https://us1.locationiq.com/v1/reverse.php?key=${import.meta.env.VITE_LOCATIONIQ_ACCESS_TOKEN}&lat=${lat}&lon=${lng}&format=json`
            )
            const data = await locationRes.json();
            console.log("data", data);

            if (data && data.address) {
              const formData = {
                placeId: data?.place_id || "",
                osmId: data?.osm_id || "",
                osmType: data?.osm_type || "",
                lat: data?.lat || "",
                lon: data?.lon || "",
                displayName: data?.display_name || "",
                address: data?.address || {},
                boundingBox: data?.boundingbox || [],
              }
              console.error("data", data);
              const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/add`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
              });
              console.log("response", response);

              if (response.ok) {
                return toast.success('Location saved successfully', {
                  position: "top-right",
                  duration: 2000
                })
              }
              return toast.error('Error in  location', {
                position: "top-right",
                duration: 3000,
              })
            }
          },
          (error) => {
            toast.error(`Error getting user location: ${error.message}`, {
              position: "top-right",
              duration: 3000,
            })
          }
        );
      } else {
        toast.error("Geolocation is not supported by this browser.", {
          position: "top-right",
          duration: 3000
        });
      }
    })()
  }, [])
  return (
    <Suspense
      fallback={
        <div className="w-full h-full absolute inset-0 z-40 flex items-center justify-center bg-[#34343A]">
          <span className="loader"></span>
        </div>
      }
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </Suspense>
  );
}

export default App;
