import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Spinner from "react-bootstrap/Spinner";

const About = () => {
  const onliestatus = useOnlineStatus();
  return (
    <>
      <div>About</div>
      <p>
        Onlie Status:{" "}
        {onliestatus ? (
          <Spinner animation="grow" variant="success" />
        ) : (
          <Spinner animation="grow" variant="danger" />
        )}
      </p>
    </>
  );
};

export default About;
