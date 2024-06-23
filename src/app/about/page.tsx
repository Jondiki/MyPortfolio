import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Jonathan Diki{" "}
                    <span>
                      {" "}
                      <br />
                    </span>
                  </h2>
                  <p>
                    Bonjour et bienvenue sur mon portfolio ! Je suis Jonathan
                    Diki, un développeur web basé à Paris avec une passion
                    débordante pour les nouvelles technologies. Depuis mon plus
                    jeune âge, jai toujours été fasciné par la manière dont la
                    technologie peut transformer notre monde et améliorer notre
                    quotidien
                    <br />
                    <br />
                    Je suis actuellement étudiant en 3eme Developpeur Full-Stack
                    à EPSI-Paris, où je me spécialise en développement web et en
                    programmation. Mon expertise principale se concentre sur les
                    frameworks modernes tels que React Js et Angular, avec une
                    solide connaissance en HTML, CSS et JavaScript. Jai
                    également acquis des compétences en backend avec Node.js et
                    en gestion de bases de données avec MongoDB.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.urfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>dikijonathan@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>SSC</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+33 751040116</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Ile-de-France, France</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/public/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript & Typescript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "55%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React JS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />
                            2024
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor Développeur Full-stack/Devops
                          </h4>
                          <p className="timeline-text">EPSI (2024 - 2025)</p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Licence 2 Mathématique-Informatique
                          </h4>
                          <p className="timeline-text">
                            Aix-Marseille Université (Licence)
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2013
                          </h6>
                          <h4 className="timeline-title">
                            Baccalauréat S ( Scientifique )
                          </h4>
                          <p className="timeline-text">Lycée Gianelli - 2013</p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Janv 2022 - Fév 2022
                          </h6>
                          <h4 className="timeline-title">Stage Developpeur Angular</h4>
                          <p className="timeline-text">
                            Au sein de 3kles Consulting, jai été impliqué dans
                            divers projets passionnants qui mont permis de
                            mettre en pratique et de perfectionner mes
                            compétences en développement front-end.
                            Notament: Le Développement de composants dynamiques, Création et
                            maintenance de composants réutilisables en Angular
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to Present
                          </h6>
                          <h4 className="timeline-title">Agent Expert Logistique</h4>
                          <p className="timeline-text">
                            Since 2020 I started to learn Wordpress. I can
                            install, Customize, &amp; fix bug on wordpress.{" "}
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2017 to Present
                          </h6>
                          <h4 className="timeline-title">Graphics Design</h4>
                          <p className="timeline-text">
                            Depuis 2017, jai travaillé en tant que graphiste.
                            Les logiciels que je maitrise pour le design
                            graphique sont Photoshop et Illustrator.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
