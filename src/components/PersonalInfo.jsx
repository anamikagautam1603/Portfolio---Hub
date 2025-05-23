import Image from "next/image"
export default function PersonalInfo() {
  return (
    <>
      <div className="row">
        <div className="col-md-30">
          <div className="d-flex  justify-content-between align-items-center mt-0 ">
            <div className="text-md-left">
              <div className="d-flex">
                <div className="ml-2">
                  <h1 className="name mb">Anamika</h1>
                  <p className=" h5 m	text-muted">Backend Developer</p>
                </div>
              </div>
              <div className="mt-1 pl-2">
                <span className="border-right">
                  <span className="mr-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
                    </svg>
                  </span>
                  <span className="text-monospace smaller">
                    <a className="text-dark normal-font" href="tel:7398045285">
                     7398045285{" "}
                    </a>
                  </span>
                </span>

                <span className="mt-3   px-2	border-right">
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                    </svg>
                  </span>
                  <span>
                    <a
                      className="text-monospace normal-font text-dark"
                      href="mailto:anamikagautam1603@gmail.com"
                    >
                      anamikagautam1603@gmail.com
                     {" "}
                    </a>
                  </span>
                </span>

                <span className="mt-3 border-right  px-2 	">
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </span>
                  <span className="text-monospace normal-font">
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/anamika-kumari-b64323228/"
                    >
                      Linkedin{" "}
                    </a>
                  </span>
                </span>

                <span className="mt-3  border-right px-2 	">
                  <Image
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                    alt=""
                    height={22}
                    width={22}
                  />

                  <span className="text-monospace normal-font">
                    <a
                      target="blank"
                      href="https://github.com/anamikagautam1603/"
                    >
                      GitHub{" "}
                    </a>
                  </span>
                </span>
              </div>

              <div className="mt-1 pt-2">
                Passionate about building efficient, scalable, and secure server-side applications.
                Proficient in Node.js, Express.js, MongoDB and MySQL, with experience in RESTful APIs,
                authentication, and database management. Strong problem-solving skills and a keen interest
                in optimizing backend performance.
                <p>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
