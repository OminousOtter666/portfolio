import React from "react";
import "../styles/Marker.css";

export default function Marker(props) {
  const [active, setActive] = React.useState(false);
  const [descInd, setDescInd] = React.useState(0);
  const data = props.data;

  const style = active
    ? {
        position: "absolute",
        top: `calc(${data.posY}% - 125px)`,
        left: `calc(${data.posX}% - 325px)`,
      }
    : {
        position: "absolute",
        top: data.posY + "%",
        left: data.posX + "%",
      };

  return (
    <>
      {active ? (
        <div
          style={style}
          className="active-container transition-container"
          onMouseLeave={() => setActive(false)}
        >
          <div className="marker-body">
            <div className="marker-title">{data.title}</div>
            {data.description && (
              <div className="marker-description">{data.description}</div>
            )}
            {data.descriptionList && (
              <div className="description-container">
                <div className="description-link-container">
                  {data.descriptionList.map((elt, ind) => (
                    <div
                      key={ind}
                      className={
                        ind === descInd
                          ? "description-link description-active"
                          : "description-link"
                      }
                      onClick={() => setDescInd(ind)}
                    >
                      {elt.linkTitle}
                    </div>
                  ))}
                </div>
                <div className="description-content">
                  {data.descriptionList[descInd].content}
                </div>
              </div>
            )}
          </div>
          <div className="marker-img-container">
            <img src={data.img} alt={`${data.title}`} className="marker-img" />
            {data.link && <div className="external-button" onClick={() => window.open(data.link)}>{data.linkDesc ? data.linkDesc : "View the site!"}</div>}
          </div>
        </div>
      ) : (
        <div
          style={style}
          className="inactive-container transition-container"
          onClick={() => setActive(true)}
        >
          {" "}
          <img className="icon-image" src={data.icon} alt="" />{" "}
        </div>
      )}
    </>
  );
}
