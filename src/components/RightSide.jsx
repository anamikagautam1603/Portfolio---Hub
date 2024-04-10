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
    <div className="col-md-7 overflow-hidden col-8 ">
      <div className="">
        <h3 className="title mt-4  h6  text-muted text-uppercase ">
          Work Experience
        </h3>
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
              <i>Video to Pdf Converter (Major Project)</i>
            </p>
          </div>
          <ul className="mt-2 normal-font pl-4">
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Developed "Video To PDF Converter App" using flutter.
              Created a user-friendly interface for easy video to PDF conversion.

            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
             Integrated video processing libaries for seamless video manipulation and
             conversion.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Utilized PDF generation tools to generate high-quality PDF files from video.
            </li>

            <li className="mt-1" style={{ fontSize: "14px" }}>
             Collaborated with a team to deliver a polished and functional app.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Recived positive user feedback for performance and usability.

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
              <i>Spell Checker (Minor Project)</i>
            </p>
          </div>

          <ul className="mt-2 normal-font pl-4">
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Developed a spell checker program in Python that accurately detects
              and suggests corrections for spelling errors in text document.

            </li>

            <li className="mt-1" style={{ fontSize: "14px" }}>
              Implemented advanced algorithms and data structures to efficently process
              large volumes of text and provide real-time spell checking.
            </li>

            <li className="mt-1" style={{ fontSize: "14px" }}>
              Collaborated with a team of linguists to enhance the program's language coverage
              and accuracy.
            </li>
            <li className="mt-1" style={{ fontSize: "14px" }}>
              Recieved positive user feedback and achieved a high accuracy rate in spell checking.
            </li>

          </ul>
        </div>

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
              <i> Telegram Clone </i>
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
    </div>
  )
}
