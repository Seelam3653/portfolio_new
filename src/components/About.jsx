import React from "react";

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
      <div className="text-lg leading-relaxed">
        <p className="mb-4">
          Hello, I'm <strong>MANO SAI SEELAM!</strong> I am passionate about building robust web
          applications with a focus on both frontend and backend development.
          <p>With several years of experience in React and Python, I thrive on
          tackling complex problems and delivering scalable solutions.</p>
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Skills & Expertise</h2>
          <ul className="list-disc list-inside">
            <li>React.js: Proficient in building modern, responsive UIs.</li>
            <li>JavaScript: Experienced in developing scalable fornt-end and backend systems using JavaScript.</li>
            <li>Python: Experienced in developing backend services and APIs.</li>
            <li>Full-stack Development: Integrating frontend and backend seamlessly.</li>
            <li>Database Management: MYSQL database.</li>
            <li>Version Control: Git for collaborative development.</li>
          </ul>
        </div>
        <p className="mb-4">
          <strong>What I Do</strong>
          <br />
          In my professional journey, I have contributed to the development of
          various applications, from crafting intuitive user interfaces to
          designing robust backend architectures. My approach combines agile
          methodologies with a focus on performance and user experience.
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Why Choose Me?</h2>
          <ul className="list-disc list-inside">
            <li>I bring a deep understanding of both frontend and backend development, enabling me to deliver end-to-end solutions.</li>
            <li>I am committed to continuous learning and staying updated with the latest technologies in web development.</li>
            <li>My problem-solving skills and attention to detail ensure high-quality deliverables that meet client expectations.</li>
          </ul>
        </div>
        <p>
          <strong>Let's Connect!</strong>
          <br />
          Whether you're looking to collaborate on a project or discuss
          opportunities, feel free to reach out. Let's build something amazing
          together!
        </p>
      </div>
    </div>
  );
}

export default About;
