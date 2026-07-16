import logo from "../assets/image.png";
export default function PopupModal({closeLoginModal}){
    return(
        <>
        <div className="modal-overlay" onClick={closeLoginModal}>
            <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                 <div className="login-modal-header">
                   <img src={logo} alt="Logo of Smart SIP Advisor by HT" />
                   <button onClick={closeLoginModal}>X</button>
                 </div>
                 <div className="login-modal-main">
                    <button className="login-modal-google">
                       Sign-In with Goggle
                    </button>
                    <button className="login-modal-skip" onClick={closeLoginModal}>
                        Skip
                     </button>
                 </div>
            </div>
        </div>
        </>
    )
}