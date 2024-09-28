import React from "react";
import Loader from "react-loaders"; 
import "./index.scss";

const Portfolio = () => {
    const projects = [
        {
            name: "Scholar Connect",
            description: "Javascript | React.js",
            image: require("../../assets/images/logob.png"), 
            url: "https://example.com/project-one"
        },
        {
            name: "Road Saftey App",
            description: "Java | Python based image-recognition | ML",
            image: require("../../assets/images/logoa.png"),  
            url: "https://example.com/project-two"
        },
        {
            name: "EdTech App",
            description: "Java | Python | ML",
            image: require("../../assets/images/logoa.png"),
            url: "https://example.com/project-three"
        }
    ];

    const renderProjects = () => {
        return (
            <div className="images-container">
                {projects.map((project, idx) => (
                    <div className="image-box" key={idx}>
                        <img 
                            src={project.image}
                            className="portfolio-image"
                            alt={project.name} 
                        />
                        <div className="content">
                            <p className="title">{project.name}</p>
                            <h4 className="description">{project.description}</h4>
                            <button
                                className="btn"
                                onClick={() => window.open(project.url)}
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container portfolio-page">
            <h1 className="page-title">
                Stay tuned! —my projects are still in the oven, baking to perfection!
            </h1>
            {renderProjects()}
        </div>
    );
};

export default Portfolio;
