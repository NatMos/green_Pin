import React from "react";
import Button from "muicss/lib/react/button";

export function ButtonPlus(props) {
    const{btnClickedProgress, toggleModal}=props;
    return (
    <div className="btn-problem-block" align="center">
      <Button disabled ={btnClickedProgress} className="btn-problem" variant="raised" color="primary" onClick ={toggleModal}>
        <p>Report a problem</p>
      </Button>
    </div>
  );
}
