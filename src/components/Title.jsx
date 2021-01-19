import React from 'react';

const Title = (props) => {
  const { text } = props;

  return (
    <div className="page-title">
      <div className="row text-uppercase">
        <div className="col">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;