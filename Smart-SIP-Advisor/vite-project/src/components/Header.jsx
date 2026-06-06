import logo from "../assets/image.png";
export default function Header(){
    return(
        <>
        <header>
        <img src={logo} alt="Logo of Smart SIP Advisor by HT"/>
        <h1>Plan Your Investments Smarter</h1>
        <p className="subtitle">Get a personalized SIP recommendation</p>
        </header>
        </>
    )
}