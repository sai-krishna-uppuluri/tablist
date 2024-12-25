import { projectsList } from "../project_data";
import "./index.css";

export default function ProjectsList({ projectsList }) {
  return (
    <div className="projects-list-container">
      {projectsList.map((eachProject) => (
        <div className="project-card">
          <div className="each-project-card">
            <img src={eachProject.imageURL} className="project-image" />
            <p> {eachProject.category}</p>
            <p> {eachProject.title}</p>
            <p> {eachProject.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
