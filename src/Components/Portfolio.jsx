/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "How to create a password generator in rust 🦀",
    description:
      "A beginner-friendy article showing how to create a password generator in rust in 3 levels of complexity",
    url: "https://medium.com/p/c68a7f7853e1",
  },
  {
    title: "Simple Rust TUI app",
    description:
      "A simple Terminal-User-Interface application which acts as a bank management system built with rust.",
    url: "https://github.com/DreadedHippy/rust_banking_system",
  },
  {
    title: "Simple conference landing page",
    description:
      "A simple landing page for a conference website built with Angular.",
    url: "https://blue-water-04ff4b610.3.azurestaticapps.net/",
  },
  {
    title: "Youtube Channel",
    description:
      "My personal youtube channe. Showcasing all things rust and tech.",
    url: "https://www.youtube.com/@aizondacoder",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
