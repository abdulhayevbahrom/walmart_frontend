import React from "react";
import { data } from "../../../static/advertisement";
import { Link } from "react-router-dom";

function Holidays2() {
  return (
    <div className="holidays_container">
      {data.baby?.map((item, index) => (
        <Link
          key={index}
          style={{
            background: `url(${item.img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className={item.cardClass}
        >
          <p>{item.title}</p>
          <span>{item.titleSpan}</span>
          <h2 className={item.textH2Class}>{item.caption}</h2>
          <Link to={item.link.address} className={item.link.class}>
            {item.link.title}
          </Link>
        </Link>
      ))}
    </div>
  );
}

export default Holidays2;
