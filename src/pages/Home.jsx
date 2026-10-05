import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <p className="hero-tag">WEEK 2 • REACT FUNDAMENTALS</p>

        <h1>Srikanth Madari React Project</h1>

        <p>
          A practical React application demonstrating components, props,
          state, React Router, and CSS Modules.
        </p>

        <div className="hero-buttons">
          <Link to="/products" className="hero-button">
            View Products
          </Link>

          <Link to="/todo" className="hero-button secondary">
            Open To-Do App
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>Components</h2>
          <p>
            Reusable Header, Footer, ProductCard, TodoItem and Button
            components are used throughout the application.
          </p>
        </div>

        <div className="feature-card">
          <h2>Props & State</h2>
          <p>
            Product information is passed through props and application
            data is managed using React state.
          </p>
        </div>

        <div className="feature-card">
          <h2>React Router</h2>
          <p>
            Multiple pages are connected using React Router without
            creating separate HTML pages.
          </p>
        </div>

        <div className="feature-card">
          <h2>CSS Modules</h2>
          <p>
            Component-specific styling is implemented using CSS Modules
            to keep styles organized.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;