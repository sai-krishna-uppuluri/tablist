import "./App.css";
import { TabsList } from "./project_data";
import { projectsList } from "./project_data";
import TabList from "./tablist";
import ProjectsList from "./displayProjects";
import { useState } from "react";

function App() {
  const [currentTabId, setTabId] = useState("");

  function onClickTab(tabId) {
    setTabId(tabId);
  }

  function projectListTab() {
    return projectsList.filter(
      (eachProject) => eachProject.category === currentTabId
    );
  }

  return (
    <div className="App">
      <h1> Project List </h1>
      <TabList tabslist={TabsList} onClickTab={onClickTab} />
      <ProjectsList projectsList={projectsList} />
    </div>
  );
}

export default App;
