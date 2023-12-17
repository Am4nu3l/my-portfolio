const Welcome = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="mk-center ">
            <h3 className="side-text">A.M.A.N.U.E.L</h3>
            <div className="rounded-circle">
              <img
                src="./src/assets/developer.jpg"
                alt=""
                className="wel-img"
              />
            </div>
            <p className="my-intro lead p-1">Hello there! 👋</p>
            <div className="row">
              <div className="col">
                <a href="https://www.instagram.com/am4nu3l/">
                  {" "}
                  <i className="fa-brands fa-square-instagram fa-2x"></i>
                </a>{" "}
              </div>
              <div className="col">
                {" "}
                <a href="https://github.com/Am4nu3l">
                  {" "}
                  <i className="fa-brands fa-github fa-2x"></i>
                </a>{" "}
              </div>
              <div className="col">
                {" "}
                <a href="https://t.me/am4nuel">
                  <i className="fa-brands fa-telegram fa-2x"></i>
                </a>{" "}
              </div>
              <div className="col">
                <a href="https://www.linkedin.com/in/amanuel-alemayehu-16aa3629a/">
                  {" "}
                  <i className="fa-brands fa-linkedin fa-2x"></i>
                </a>{" "}
              </div>
              <col />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
