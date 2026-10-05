function About() {
  return (
    <section className="page">
      <div className="page-heading">
        <p className="eyebrow">ABOUT THE PROJECT</p>

        <h1>Week 2 React Fundamentals</h1>

        <p>
          This project was created as a practical demonstration of
          fundamental React development concepts.
        </p>
      </div>

      <div className="about-card">
        <h2>Technologies Used</h2>

        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>React Router</li>
          <li>CSS Modules</li>
          <li>Vite</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>Learning Goals</h2>

        <p>
          The project demonstrates reusable components, props, state,
          event handling, routing, and component-level styling.
        </p>
      </div>
    </section>
  );
}

export default About;