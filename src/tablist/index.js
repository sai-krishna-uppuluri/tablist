import "./index.css";
// import displayProjects from "../displayProjects";

function TabList({ tabslist, onClickTab }) {
  function onclickTabId(tabId) {
    // console.log(tabId);
    onClickTab(tabId);
  }

  // console.log(TabsList);
  return (
    <div className="tab-list">
      {tabslist.map((eachTab) => (
        <div className="each-tab" key={eachTab.tabId}>
          <h1 onClick={() => onclickTabId(eachTab.tabId)}>
            {eachTab.displayText}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default TabList;
