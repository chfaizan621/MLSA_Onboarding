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
import image from "../images/light-bulb.jpg";

const imageAltText = "light bulb image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Gym Management System",
    description:
      "Created this website using HTML, CSS and PHP which supports a complete gym management system. It performs all the CRUD operations and the database used in this project is MySQL.",
    url: "https://github.com/chfaizan621/Gym_Management_System",
  },
  {
    title: "Univents Mobile Application",
    description:
      "Developed Univents mobie application which is a flutter based application and shows all the details about the upcoming Events in a particular University.",
    url: "https://github.com/chfaizan621/univent",
  },
  {
    title: "Visual Programming Tasks",
    description:
      "Solved some tasks using c# and .NET framework. Includes my experience and design abilities.",
    url: "https://github.com/chfaizan621/212039_VPLab",
  },
  {
    title: "MLSA Application Video",
    description:
      "Video to answer a question of my MLSA application. This video can help beginners when applying for MLSA.",
    url: "https://www.youtube.com/watch?v=_h9bO0Csh2Q",
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
