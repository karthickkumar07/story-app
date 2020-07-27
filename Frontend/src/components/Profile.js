import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UseContext";
import { yourKavidhai } from "../helper/kavidhai";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
const Profile = () => {
  const { user } = useContext(UserContext);
  const [post, setPost] = useState([]);
  const loadAllYourKavidhai = (name) => {
    yourKavidhai(name).then((data) => {
      if (data?.error) {
        console.log(data.error);
      } else {
        console.log("success");
        setPost(data);
      }
    });
  };
  useEffect(() => {
    loadAllYourKavidhai(user.displayName);
  }, []);

  console.log(user);
  return (
    <div className="text-white text-center font-weight-bold">
      <h1>Welcome {user.firstName} </h1>
      <div className="container">
        <div className="row mt-5 mb-4">
          {post?.map((p, index) => {
            return (
              <div key={index} className="col col-sm-4">
                <Card className="bg-secondary">
                  <CardBody className="text-center">
                    <img
                      height="100"
                      width="100"
                      className="rounded-circle img-thumbnail border-info"
                      src={p.image}
                    />
                    <CardTitle className="text-white">
                      <h1>
                        <span className="pr-2">{p.title}</span>
                      </h1>
                    </CardTitle>
                    <CardText className="text-white">
                      <p>{p.kavidhai}</p>
                      <div className="btn btn-light">{p.author}</div>
                    </CardText>
                  </CardBody>
                </Card>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
