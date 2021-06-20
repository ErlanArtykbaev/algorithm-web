import React from "react";

import Compiler from "../../assets/img/home/compiler.webp";

const OnlineEmulation = () => {
  return (
    <section className="online-emulation">
      <div className="img-wrapper">
        <img src={Compiler} alt="compiler" class="compiler" />
      </div>
      <div className="info">
        <h2 className="title">Online Code Example</h2>
        <p>
          Get started with java in no time. Now you can copy and run Java
          code without writing it yourself.
        </p>
      </div>
    </section>
  );
};

export default OnlineEmulation;
