function Projects() {
  const projects = [
    { title: "Student Marketplace App", desc: "Buy & sell college items" },
    { title: "e-Upchaar Hackathon Project", desc: "Nirvana HealthCare Chatbot" },
    { title: "AWS Hackathon Project", desc: "Winning project solution" }
  ];

  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="card">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;