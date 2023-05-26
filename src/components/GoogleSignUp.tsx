import { useEffect } from "react";

function GoogleSignUp() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="285370482565-vsv6uq36u5emft7gcr1rl2dsq4bfos2l.apps.googleusercontent.com"
        data-context="signup"
        data-ux_mode="popup"
        data-login_uri="http://localhost:5173/api/google-auth"
        data-auto_prompt="false"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signup_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
}

export default GoogleSignUp;
