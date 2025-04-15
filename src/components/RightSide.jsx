import Achievement from "./Achievement"
import Education from "./Education"
import Skills from "./Skills"

const CalenderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
    </svg>
  )
}

export default function RightSide() {
  return (
    <div className="md-7 overflow-hidden col-12">
      <div className="">
        <h3 className="title mt-4  h6  text-muted text-uppercase ">
          Work Experience
        </h3>
        <div className="mt-0 p-1  ">
          <div className="d-flex justify-content-between">
            <h5 className=" m-0 text-dark">Software-Engineering </h5>
            <span className="d-flex align-items-center">
              {/* <CalenderIcon></CalenderIcon> */}
              {/* <span className="ml-2 normal-font">06/2024- 07/2024</span> */}
            </span>
          </div> 
           </div>
      </div>
      
      <div className="d-flex mt-1 justify-content-between">
            <p className="m-0 normal-font ">
              <i>Weather App &nbsp;
              <a
                      target="blank"
                      href="https://github.com/anamikagautam1603/UTS-Mobile-App"
                    >
                      {/* Link {" "} */}
                    </a> </i>
            </p>
          </div>
      
      
        <ul className="mt-2 normal-font pl-4">
          <li className="mt-1" style={{ fontSize: "14px" }}>
             Use Node.js with Express.js for the backend, and integrate OpenWeather API or WeatherAPI for real-time data.
          </li>

            <li className="mt-1" style={{ fontSize: "14px" }}>
             Developed a real-time weather application that fetches weather data using the OpenWeather API.

            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
            Implemented dynamic UI updates based on user location and search queries.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
             Integrated local storage to save user preferences for seamless experience.
            </li>

            
          </ul>
  
    

       <h3 className="title h6 mt-0 text-uppercase ">Projects</h3> 
        <div className="p-1">
          <div className="d-flex justify-content-between">
        <h5 className="text-dark m-0">
          Real Time Chat App
        </h5>
            <span className="d-flex align-items-center">
              {/* <CalenderIcon></CalenderIcon>
              <span className="ml-2 normal-font"> 05/2024 - 08/2024 </span> */}
            </span>
          </div>
          <ul className="mt-2 normal-font pl-4">
            <li>
             Developed a real-time chat app with instant messaging for multiple users.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
           Used Express.js for backend and served static frontend (HTML, CSS, JS).
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
           Integrated Socket.io for live, bi-directional communication via WebSockets.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
            Built a responsive chat UI and connected it with the server in real time.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
           Added user join/leave alerts and message broadcasting; structured for future features.
            </li>
          </ul>
        </div>

     <div className="mt-0 p-1  ">
          <div className="d-flex justify-content-between">
            <h5 className=" m-0 text-dark">Shopping Cart App</h5>
            <span className="d-flex align-items-center">
              {/* <CalenderIcon></CalenderIcon>
              <span className="ml-2 normal-font">09/2024- 05/2025</span>*/}
            </span>
          </div> 
           <div className="d-flex mt-1 justify-content-between">
            <p className="m-0 normal-font ">
             
            </p>
          </div>
          <ul className="mt-2 normal-font pl-4">
            <li>
            Developed a shopping cart backend using Node.js and TypeScript with proper type safety and modular code structure.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
            Implemented core features like product listing, add/update/delete cart items, and checkout logic using RESTful APIs.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
               Used Express.js for routing and followed MVC pattern to keep the code scalable and maintainable.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
            Added input validation, error handling, and managed cart state using sessions or in-memory store.
            </li>
          </ul>
        </div>
      <Education />
      <Skills />
      <Achievement />
    </div>
  )
}
