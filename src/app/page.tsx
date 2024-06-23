
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img src="/imgs/jd.ico" alt="Jon" className="shadow-dark" />
            <h1>Jonathan Dikizeyiko</h1>
            <p>Developper Web</p>
            <div className="social-links">
              <a href="https://x.com/Jon_D75" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              {/* <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a> */}
              <a href="https://github.com/Jondiki" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-diki/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
