import React from "react";

const Footer = () => {
  return (
    <div
      className="py-5 text-center background text-white"
      style={{ background: "rgb(82, 102, 139)" }}
    >
      <p className="pt-3">
        Designed & Built by{" "}
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://github.com/sakhawat9"
          rel="noreferrer"
        >
          Ahsan Habib
        </a>
      </p>
    </div>
  );
};

export default Footer;
