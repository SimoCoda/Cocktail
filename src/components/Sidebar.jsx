import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import {useGlobalContext} from "../context"
const Sidebar = () => {

  const {isSidebarOpen, closeSidebar} = useGlobalContext()

  return <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-content">
        <header className="nav-header container">
          <div className="nav-brand">
            <h3>Drink Team</h3>
          </div>
          <button className="nav-toogler btn icon-btn" onClick={closeSidebar}>
            <VscArrowSmallLeft className="nav-icon" />
          </button>
        </header>
        <div className="container">
          <LinkComponent classLink="sidebar-links" />
          <SocialComponent classSocial="sidebar-social" />
        </div>
      </div>
    </aside>;
};

export default Sidebar;
