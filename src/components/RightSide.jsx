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
            <h5 className=" m-0 text-dark">Software-Engineering Trainee</h5>
            <span className="d-flex align-items-center">
              {/* <CalenderIcon></CalenderIcon>
              <span className="ml-2 normal-font">06/2021- 10/2021</span> */}
            </span>
          </div>
          <div className="d-flex mt-1 justify-content-between">
            <p className="m-0 normal-font ">
              <i>Telegram Clone <a
                      target="blank"
                      href="https://github.com/anamikagautam1603/Clone-a-Website"
                    >
                      Link {" "}
                    </a> </i>
            </p>
          </div>

          <ul className="mt-2 normal-font pl-4">
            <li>
             Developed a fully functional messaging application using HTML, CSS, and JavaScript.

            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
             Implemented features such as a user authentication, real-time messaging, and encryption.

            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Collaborated with designers and developers to ensure a seamless user experience.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
             Optimized the code to improve performance and responsiveness.

            </li>
          </ul>
        </div>

      </div>
      <div>
        <h3 className="title h6 mt-0 text-uppercase ">Projects</h3>
                <div className="p-1">
          <div className="d-flex justify-content-between">
            <h5 className="text-dark m-0">Software-Engineering Trainee</h5>
            <span className="d-flex align-items-center">
              {/* <CalenderIcon></CalenderIcon>
              <span className="ml-2 normal-font">10/2022 - Ongoing </span> */}
            </span>
          </div>
          <div className="d-flex mt-1 justify-content-between">
            <p className="m-0 normal-font">
              <i> Weather App &nbsp;
                <a
                      target="blank"
                      href="https://github.com/anamikagautam1603/Weather-App"
                    >
                      Link {" "}
                    </a></i>
            </p>
          </div>
          <ul className="mt-2 normal-font pl-4">
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

        <div className="mt-0 p-1 ">
          <div className="d-flex justify-content-between">
            <h5 className="text-dark m-0">Software-Engineering Trainee</h5>
            <span className="d-flex align-items-center">
              {/* <CalenderIcon></CalenderIcon>
              <span className="ml-2 normal-font">12/2021 - 09/2022 </span> */}
            </span>
          </div>
          <div className="d-flex mt-1 justify-content-between">
            <p className="m-0 ">
              <i>Tic-Tac-Toe Game &nbsp;
                   <a
                      target="blank"
                      href="https://github.com/anamikagautam1603/Tic-Tac-Toe-Game"
                    >
                      Link {" "}
                    </a>
              </i>
            </p>
          </div>

          <ul className="mt-2 normal-font pl-4">
            <li className="mt-1" style={{ fontSize: "14px" }}>
             Built an interactive, responsive Tic-Tac-Toe game with real-time game logic.

            </li>

            <li className="mt-1" style={{ fontSize: "14px" }}>
             Implemented winner detection using JavaScript algorithms and animations for an engaging user experience.
            </li>

            <li className="mt-1" style={{ fontSize: "14px" }}>
              Optimized for both desktop and mobile devices using CSS media queries.
            </li>
            

          </ul>
        </div>
      </div>
      <Education />
      <Skills />
      <Achievement />
    </div>
  )
}
