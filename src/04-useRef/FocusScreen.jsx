import React, { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').select();

    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input ref={inputRef} className="form-control" type="text" placeholder="Ingrese su nombre" />

      <button className="btn btn-primary mt-3" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
