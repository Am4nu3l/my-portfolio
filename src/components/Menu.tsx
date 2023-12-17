// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from "react-scroll";
const Menu = () => {
  return (
    <>
      <div className="mk-center">
        <ul className="list-grp">
          <nav id="main-page" className="nav nav-pills flex-column">
            <div className="menu-item ">
              <i className="fa-sharp fa-solid fa-address-card fa-lg"></i>
              <a className="list-group-items" href="#item1">
                <Link to="section1" smooth={true} duration={500}>
                  About Me
                </Link>
              </a>
            </div>
            <div className="menu-item">
              <i className="fa-solid fa-circle-info fa-lg"></i>
              <a className="list-group-items" href="#item2">
                <Link to="section2" smooth={true} duration={500}>
                  What I Do
                </Link>
              </a>
            </div>
            <div className="menu-item">
              <i className="fa-solid fa-caret-down fa-lg"></i>
              <a className="list-group-items" href="#item3">
                <Link to="section4" smooth={true} duration={500}>
                  Service&Pricing
                </Link>
              </a>
            </div>
            <div className="menu-item">
              <i className="fa-solid fa-file fa-lg"></i>
              <a className="list-group-items" href="#item4">
                Terms & Conditions
              </a>
            </div>
            <div className="menu-item">
              <i className="fa-solid fa-blog fa-lg"></i>
              <a className="list-group-items" href="#item5">
                <Link to="section3" smooth={true} duration={500}>
                  Skill Set
                </Link>
              </a>
            </div>
            <div className="menu-item">
              <i className="fa-solid fa-address-book fa-lg"></i>
              <a className="list-group-items" href="#item6">
                <Link to="section5" smooth={true} duration={500}>
                  Contact
                </Link>
              </a>
            </div>
          </nav>
        </ul>
        <div className="hire-me-btn">
          <button type="button" className="btn btn-success">
            {" "}
            <i className="fa-solid fa-paper-plane fa-lg"></i>
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
