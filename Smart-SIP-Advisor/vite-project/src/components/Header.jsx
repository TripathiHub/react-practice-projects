import Menu from "./Menu";
import logo from "../assets/image.png";

export default function Header({openLoginModal}) {
  return (
    <header>
      <nav className="navbar">
        <Menu />
        <div className="navbar-right">
          <button className="login-btn" onClick={openLoginModal}>👤</button>
        </div>
      </nav>

      <div className="header-content">
        <img src={logo} alt="Logo of Smart SIP Advisor by HT" />
        <h1>Plan Your Investments Smarter</h1>
        <p className="subtitle">Get a personalized SIP recommendation</p>
      </div>
    </header>
  );
}