import logo from "../assets/image.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function PopupModal({ closeLoginModal, settingUser }) {

  function signUpWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then((value) => {
        settingUser(
          value.user.displayName,
          value.user.photoURL,
          value.user.email
        );
        closeLoginModal();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="modal-overlay" onClick={closeLoginModal}>
        <div
          className="login-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="login-modal-header">
            <img src={logo} alt="Logo of Smart SIP Advisor by HT" />
            <button
              className="login-modal-close"
              onClick={closeLoginModal}
            >
              X
            </button>
          </div>

          <div className="login-modal-main">
            <button
              className="login-modal-google"
              onClick={signUpWithGoogle}
            >
              Sign-In with Google
            </button>

            <button
              className="login-modal-skip"
              onClick={closeLoginModal}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </>
  );
}