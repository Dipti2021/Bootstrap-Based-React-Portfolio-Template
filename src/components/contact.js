import React from "react";

//import styling from react-bootstrap

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Contact Me</h1>
            <p>
              If you have any questions or comments, please feel free to contact
              me.
            </p>
            <div classname="row">
              <a href="mailto:a.a@g.com">Email</a>
              <br></br>

              <a href="www.linkedin.com">Linkedin</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://via.placeholder.com/300x200" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
