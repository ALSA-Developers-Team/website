// import AlsaBackground from './assets/backgound.jpg'
import EscudoAlsa from './assets/EscudoALSA.svg'
import DiscordLogo from './assets/DiscordLogo.svg'
import "./home.css"
function App() {

  // const mainStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   maxHeight: "100vh",
  //   minHeight: '100vh',
  //   height: '100%',
  //   backgroundColor: "#1B201F",
  //   backgroundImage: `url(${AlsaBackground})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  // }

  const MenuLinksStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    fontSize: '2rem',
    color: '#D8E4DD',
    fontFamily: 'DKKatzenjammer',
  }

  const MenuStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    paddingLeft: '15rem',
    paddingRight: '15rem',
  }

  const sectionStyle = {
    display: 'flex',
    flex: 1,
    justifyContent: 'between',
    alignItems: 'center',
    paddingLeft: '15rem',
    paddingRight: '15rem',

  }

  // const headerStyle = {

  // }

  return (
    <main>
      <menu style={MenuStyle}>
        <img src={EscudoAlsa} alt="Logo" />
        <li style={MenuLinksStyle}>
          <ol>ABOUT</ol>
          <ol>EXPERIENCE</ol>
          <ol>WORK</ol>
          <ol>CONTACT</ol>
        </li>
        <img src={DiscordLogo} alt="Discord Logo" height="35rem" />
      </menu>
      <section style={sectionStyle}>
        <header style={{borderTop: 'dashed', borderColor: '#36F097', borderWidth: ".5rem"}}>
          <h1 style={{
            color: '#D8E4DD',
            fontFamily: 'DKKatzenjammer',
            fontSize: '5rem',
            letterSpacing: '1rem',
          }}><span style={{ fontSize: "13rem" }}>ALSA</span> <br />SOLUTIONS</h1>
          <p style={{
            color: '#36F097',
            fontFamily: 'DKKatzenjammer',
            fontSize: '2rem',
          }}>SICNE 2019</p>
          <div style={{ color: '#D8E4DD', fontFamily: "Khyay", fontSize: "1.5rem", marginTop: "2rem" }}>
            <p>Desarrollo WEB</p>
            <p>Consultoría Tecnológica</p>
            <p>Growth hacking</p>
          </div>
          <div style={{ color: '#D8E4DD', fontFamily: "Khyay", fontSize: "1.5rem", marginTop: "2rem" }}>
            <p>Únete a nosotros en el camino <br />hacia el éxito!</p>
          </div>
          <button style={{
            marginTop: '2rem',
            color: '#D8E4DD',
            fontFamily: 'DKKatzenjammer',
            fontSize: '3rem',
            paddingInline: '3rem',
            paddingTop: '.5rem',
            paddingBottom: '.5rem',
            backgroundColor: 'rgba(54,240,151,0.2)',
            borderColor: '#36F097',
            borderRadius: '1rem',
            letterSpacing: '0.5rem',
          }}> UNIRSE </button>
        </header>
        <article>
          s
        </article>
      </section>
    </main>
  )
}

export default App
