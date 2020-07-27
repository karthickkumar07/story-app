import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { signIn } from "../helper/Auth";
import { withRouter } from "react-router-dom";
import { UserContext } from "../context/UseContext";

function Auth(props) {
  const { user, setUser } = useContext(UserContext);

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.googleId);
    setUser({
      googleId: response.profileObj.googleId,
      displayName: response.profileObj.email,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      image: response.profileObj.imageUrl,
    });

    console.log(user);
    signIn(user)
      .then((data) => {
        if (data?.error) {
          console.log(data.error);
        } else {
          console.log("success");
          console.log(user);
          props.history.push({
            pathname: "/home",
          });
        }
      })
      .catch((err) => console.log("failed login"));
  };

  return (
    <div className="Auth ">
      <div className="container mt-5 ">
        <div className="col col-md-6 offset-3 mt-5">
          <div className="card bg-secondary text-center text-white mt-5">
            <div className="card-header bg-secondary">
              <h1>KAVIDHAI APP</h1>
            </div>
            <div className="card-body bg-dark">
              <h3>Sign in to continue</h3>
              <GoogleLogin
                clientId="619083413814-kg7c4av8b22c8lc05bvkf0vdpvimqstn.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                className="bg-light text-danger rounded border border-dark"
              />
              <p className="card-text">
                To know the help of application please click the below button.
              </p>
              <a href="#" className="btn btn-danger">
                Help
              </a>
            </div>
            <div className="card-footer text-white bg-secondary">
              Explore The world
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Auth);
