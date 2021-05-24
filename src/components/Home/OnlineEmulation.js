import React from "react";

import Compiler from "../../assets/img/home/compiler.webp";

const OnlineEmlation = () => {
  const hello = () => {
    console.log("helow or");
  };
  return (
    <section className="online-emulation">
      <div className="img-wrapper">
        <img src={Compiler} alt="compiler" class="compiler" />
      </div>
      <div className="info">
        <h2 className="title">Online Python Compiler</h2>
        <p>
          Get started with Python in no time. Now you can write and run Python
          code online in your browser.
        </p>
        <button onClick={hello}>run python online</button>
      </div>
    </section>
  );
};

export default OnlineEmlation;
