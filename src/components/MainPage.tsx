const MainPage = () => {
  return (
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#main-page"
        data-bs-smooth-scroll="true"
        className="main-page-content"
      >
        <section id="section1">
          <div className="row container-top p-2">
            <div className="col-7">
              <div className="">
                <h2>Amanuel Alemayehu</h2>
                <h4>Experienced Software Developer</h4>
                <p className="lead">
                  Hello! I'm Amanuel Alemayehu, a fourth-year Computer Science
                  student passionate about translating ideas into reality
                  through code. My academic journey has equipped me with a
                  strong foundation in diverse programming languages and
                  essential computer science principles. Hands-on projects have
                  honed my skills and emphasized the importance of teamwork.
                  Beyond academics, I stay abreast of emerging technologies,
                  participating in hackathons and contributing to open-source
                  projects. As I approach the culmination of my studies, my goal
                  is to leverage my skills and enthusiasm to make a meaningful
                  impact in the dynamic field of software development.
                </p>
              </div>
            </div>
            <div className="col-5">
              <img src="src/assets/me.jpeg" alt="" className="wel-img" />
            </div>
          </div>
        </section>
        <section id="section2">
          <div className="container-fluid shadow">
            <div className="what-i-do">
              <h3>What I do</h3>
              <p className="lead">
                As a passionate software developer, I specialize in crafting
                dynamic and immersive digital experiences. My expertise spans
                the entire spectrum, from Front-end development, where I bring
                designs to life with precision and creativity, to Back-end
                development, ensuring robust server-side functionality.
                Additionally, my skills extend seamlessly into the realm of
                Mobile and Desktop software development. Embracing cutting-edge
                technologies, I am committed to delivering solutions that not
                only meet but exceed the expectations of today's ever-evolving
                digital landscape.
              </p>
              <div className="row Prg-langs">
                <div className="col m-2 card cards shadow">
                  <div className="card-body">
                    <h5 className="card-title">Front-end Magic</h5>
                    <p className="card-text lead">
                      I specialize in creating visually stunning and
                      user-friendly interfaces using React,html,css,js,
                      enhancing user experiences with seamless interactivity and
                      responsiveness.
                    </p>
                  </div>
                </div>
                <div className="col m-2 card cards shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      Precision Back-end Development{" "}
                    </h5>
                    <p className="card-text lead">
                      Ensuring the backbone of applications is robust and
                      efficient, I handle server-side complexities, optimize
                      databases, and implement secure authentication.
                    </p>
                  </div>
                </div>
                <div className="col m-2 card cards shadow">
                  <div className="card-body">
                    <h5 className="card-title"> Mobile App Development: </h5>
                    <p className="card-text lead">
                      I excel in crafting dynamic and responsive mobile
                      applications, leveraging technologies like Flutter to
                      create cross-platform solutions that prioritize user
                      experience and functionality.
                    </p>
                  </div>
                </div>
                <div className="col m-2 card cards shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">Other Software Developments:</h5>
                    <p className="card-text lead">
                      In Other software development, I bring efficiency and
                      innovation to applications,like telegram bots,desktop
                      softwares ensuring they seamlessly integrate with various
                      operating systems and deliver optimal performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <p className="lead">
                In every project, my goal is to seamlessly integrate creativity
                and functionality. Whether it's the sleek responsiveness of a
                front-end interface, the robustness of back-end architecture, or
                the versatility of mobile and desktop software, I approach each
                endeavor with a passion for innovation. Through a harmonious
                blend of technical prowess and creative insight, I strive to
                elevate user experiences and contribute to the advancement of
                digital solutions. Let's collaborate and turn your ideas into
                captivating realities.
              </p>
            </div>
          </div>
        </section>
        <section id="section4" className="mb-5">
          <div className="container-fluid">
            <h3>Service and Pricing</h3>
            <div className="row">
              <div className="card col cards m-1 shadow">
                <div className="card-header">
                  <h6>Static Web Development</h6>{" "}
                </div>
                <div className="card-body">
                  <h6>initial price = 10,000 birr</h6>
                  <br />
                  <p className="lead">Examples of Static Sites</p>
                </div>
              </div>
              <div className="col card m-1 cards shadow">
                <div className="card-header">
                  <h6> Dynamic Web Development</h6>
                </div>
                <div className="card-body">
                  <h6>initial price = 25,000 birr</h6>
                  <br />
                  <p className="lead">Examples of Dynamic Sites</p>
                </div>
              </div>
              <div className="col card m-1 cards shadow">
                <div className="card-header">
                  <h6>Mobile App Development</h6>{" "}
                </div>
                <div className="card-body">
                  <h6>initial price = 20,000 birr</h6> <br />
                  <p className="lead">Examples of Mobile Apps</p>
                </div>
              </div>
              <div className="col card m-1 cards shadow">
                <div className="card-header">
                  <h6>Telegram Bot Development</h6>{" "}
                </div>
                <div className="card-body">
                  <h6>initial price = 10,000 birr</h6> <br />
                  <p className="lead">Examples of Other Softwares</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section3">
          <h3>Skill Set</h3>
          <p className="lead">
            My professional journey showcases a diverse skill set in programming
            languages, mark-up languages, frameworks, and web services.
            Proficient in Java, Python, JavaScript, PHP, C++, VB, and C#, I
            navigate diverse project requirements with ease. HTML and CSS are my
            foundational tools for structuring content and styling interfaces,
            while XML enhances data representation. In the framework realm,
            React, Flutter, and Express.js are my go-to choices for crafting
            modern, responsive user interfaces, cross-platform mobile
            applications, and robust server-side applications. Web services are
            a forte, with Firebase enabling scalable and real-time cloud-based
            solutions. I've also leveraged Clever Cloud for efficient deployment
            and management of applications. This versatile skill set allows me
            to approach projects holistically, combining technical acumen with
            creative problem-solving to deliver solutions that exceed
            expectations.
          </p>
          <table className="table table-striped shadow table-hover">
            <thead>
              <tr>
                <th scope="col">Programming Languages</th>
                <th scope="col">Mark-Up Languages</th>
                <th scope="col">FrameWorks</th>
                <th scope="col">Web Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Java</td>
                <td>HTML</td>
                <td>React</td>
                <td>Firebase</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>XML</td>
                <td>Flutter</td>
                <td>Clever Cloud</td>
              </tr>
              <tr>
                <td>Java Script</td>
                <td>CSS</td>
                <td>Express Js</td>
                <td></td>
              </tr>
              <tr>
                <td>PHP</td>
                <td></td>
                <td>Node Js</td>
              </tr>
              <tr>
                <td>C++</td>
                <td></td>
                <td>Django</td>
              </tr>
              <tr>
                <td>VB</td>
                <td></td>
                <td>Boot Strap</td>
              </tr>
              <tr>
                <td>C#</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="section5 container-fluid shadow mt-5">
          <h3>Contact Me</h3>
          <p className="lead">
            I'm thrilled to connect! For collaborations, inquiries, or a
            friendly chat, I'm here. Let's discuss and bring your ideas to life.
            Feel free to reach out through the contact form anytime.
          </p>
          <div className="row">
            <div className="col">
              <div className="list-group">
                <div className="list-group-item active">Contact Me</div>
                <div className="list-group-item">
                  <h4>+251964314791</h4>
                </div>
                <div className="list-group-item">
                  <h4>liplap2020@gmail.com</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
