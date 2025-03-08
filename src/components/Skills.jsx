// export default function Skills() {
//   return (
//     <div className="pt-2">
//       <h3 className="title mt-0  h6 text-muted text-uppercase ">Skills</h3>
//       <div className="mt-2">
//         <ul
//           className="mt-2 normal-font pl-3 skill-point"
//           style={{ fontSize: "13px" }}
//         >
//           {/* <li className="mb-1">
//             <b>Backend</b>: NodeJs, Laravel, TypeScript ,JavaScript Dart, MySQL,
//             PSQL, MongoDb, Firebase
//           </li> */}
//           {/* <li className="mb-1">
//             <b>Infrastructure</b>: AWS, Docker, Kafka, RabbitMq ,System Design
//           </li> */}
//           <li className="mb-1">
//             <b>Frontend</b>:HTML5, CSS3, JavaScript (ES6+)
//           </li>
//           <li><b>Frameworks & Libraries</b>: Bootstrap, Tailwind CSS</li>
//           <li>
//             <b>Version Control</b>: GitHub,Git
//           </li>
//           <li>
//             <b>Problem-Solving & Debugging</b>: Chrome DevTools, Console Debugging
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }
export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+), React.js"] },
    { category: "Frameworks & Libraries", items: ["Bootstrap", "Tailwind CSS"] },
    { category: "Version Control", items: ["Git", "GitHub"] },
    { category: "Problem-Solving & Debugging", items: ["Chrome DevTools", "Console Debugging"] },
  ];

  return (
    <div className="pt-2">
      <h3 className="title mt-0 h6 text-muted text-uppercase">Skills</h3>
      <ul className="mt-2 normal-font pl-3 skill-point" style={{ fontSize: "13px" }}>
        {skills.map((skill, index) => (
          <li key={index} className="mb-1">
            <b>{skill.category}</b>: {skill.items.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
