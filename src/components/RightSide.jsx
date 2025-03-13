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
              <CalenderIcon></CalenderIcon>
              <span className="ml-2 normal-font">06/2024- 07/2024</span>
            </span>
          </div> 
           <div className="d-flex mt-1 justify-content-between">
            <p className="m-0 normal-font ">
              <i>UTS-Mobile-App &nbsp;
              <a
                      target="blank"
                      href="https://github.com/anamikagautam1603/UTS-Mobile-App"
                    >
                      {/* Link {" "} */}
                    </a> </i>
            </p>
          </div>
          <ul className="mt-2 normal-font pl-4">
            <li>
             Developed a cross-platform mobile application using Flutter for seamless unreserved railway ticket booking.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
            Integrated real-time ticket generation and QR-based validation for easy and secure travel.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
             Integrated Google Maps API, PNR tracking, and Firebase authentication.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
            Optimized UI/UX with state management, improving speed and user convenience.
            </li>
          </ul>
        </div>
      </div>


       <h3 className="title h6 mt-0 text-uppercase ">Projects</h3> 
                <div className="p-1">
          <div className="d-flex justify-content-between">
            <h5 className="text-dark m-0"> Weather App </h5>
            <span className="d-flex align-items-center">
              <CalenderIcon></CalenderIcon>
              <span className="ml-2 normal-font"> 05/2024 - 08/2024 </span>
            </span>
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
      </div>

     <div className="mt-0 p-1  ">
          <div className="d-flex justify-content-between">
            <h5 className=" m-0 text-dark">E-Commerce Platform</h5>
            <span className="d-flex align-items-center">
              <CalenderIcon></CalenderIcon>
              <span className="ml-2 normal-font">09/2024- 05/2025</span>
          </span>
          
          </div> 
           <div className="d-flex mt-1 justify-content-between">
            <p className="m-0 normal-font ">
             
            </p>
          </div>
          <ul className="mt-2 normal-font pl-4">
            <li>
             Developed a full-stack e-commerce app with JWT authentication.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
             Implemented CRUD operations for products and orders. Integrated PayPal/Stripe for secure payments.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Built an admin dashboard for product and order management. Designed a responsive UI using Tailwind CSS/Bootstrap.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
            Used Node.js, Express.js, and MongoDB/MySQL for backend development.
            </li>
          </ul>
        </div>
      <Education />
      <Skills />
      <Achievement />
    </div>
  )
}
