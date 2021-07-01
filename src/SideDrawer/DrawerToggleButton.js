import "./DrawerToggleButton.css";

const drawerToggleButton = (props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggleButton__line"></div>
      <div className="toggleButton__line"></div>
      <div className="toggleButton__line"></div>
    </button>
  );
};

export default drawerToggleButton;
