import React from 'react';

const Title = (props) => {
  const { text } = props;

  return (
    <div className="page-title">
      <div className="container">
        <div className="row text-uppercase">
          <div className="col-lg-12 offset-lg-0 col-6 offset-3 p-0">
            <h1 className="text-center text-lg-start">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;