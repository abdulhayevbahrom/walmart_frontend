import React from "react";
<<<<<<< HEAD

function Holidays() {
  return <div></div>;
=======
import "./Holidays.css";
import { Link } from "react-router-dom";
import { data } from "../../static/advertisement";

function Holidays() {
  return (
    <div className="holidays_container">
      {data.holidays?.map((item, index) => (
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
>>>>>>> origin/muhammadsoleh
}

export default Holidays;
