import React, { useState, useEffect, useContext } from "react";
import Header from "../layouts/Header";
import { addPost, getKavidhais } from "../helper/kavidhai";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { UserContext } from "../context/UseContext";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  const { user } = useContext(UserContext);
  const [reload, setReload] = useState(false);
  const [values, setvalues] = useState({
    title: "",
    kavidhai: "",
    author: user.displayName,
    image: user.image,
  });

  const { title, kavidhai, author, image } = values;
  const [post, setPost] = useState([]);
  const handleChange = (name) => (event) => {
    setvalues({ ...values, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();

    setReload(!reload);

    console.log(values);
    addPost(values).then((data) => {
      if (data?.error) {
        console.log(data.error);
      } else {
        console.log("successfully added your kavidhai");
        setvalues({
          title: "",
          kavidhai: "",
        });
      }
    });
  };

  const loadAllPost = () => {
    getKavidhais().then((data) => {
      if (data?.error) {
        console.log(data?.error);
      } else {
        setPost(data);
      }
    });
  };
  const profileView = (name) => {
    props.history.push({
      pathname: "/kavidhai/author",

      state: { name: name },
    });
  };
  useEffect(() => {
    loadAllPost();
  }, [[reload]]);

  return (
    <div>
      <Header setReload={setReload} reload={reload} />
      <div className="container mt-4">
        <div className="row">
          <div className="col col-md-6 offset-3">
            <div className="container text-white bg-secondary text-center rounded border border-dark">
              <form action="">
                <span className="text-center text-uppercase">
                  Post your kavidhai To the world
                </span>
                <br />
                <div className="form-group">
                  <input
                    onChange={handleChange("title")}
                    className="form-control"
                    placeholder="enter the title"
                    value={title}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    onChange={handleChange("kavidhai")}
                    className="form-control"
                    placeholder="write your kavidhai"
                    value={kavidhai}
                    rows="3"
                    cols="40"
                  />
                </div>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="btn btn-light mb-3"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>

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
                      <div
                        className="btn btn-light"
                        onClick={() => profileView(p.author)}
                      >
                        {p.author}
                      </div>
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

export default withRouter(Home);
