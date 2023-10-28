import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

const AlertError = () => {
    
  const errors = useSelector((state) => state.ErrorReducer);

  return (
    <div>
      {errors.map((el) => (
        <Alert key={el.id} variant="danger">
          {el.msg}
        </Alert>
      ))}
    </div>
  );
};

export default AlertError;