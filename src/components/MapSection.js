import React from "react";
import "../styles/MapSection.css";

const MapSection = () => {
  return (
    <section className="map-wrapper">
      <h2 className="map-title">Мы на карте</h2>
      <iframe
        className="map-frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.823417301993!2d37.619444315994826!3d55.7557573805564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413c303f9a7587bf%3A0xf9b4eb4f6f36ff3b!2z0J7QnNC10YHRgtGA0L7QstCw0LrQu9Cw0L3QutCw0L3QuCDQwLCDQmtCw0YHQutC-0LrRgdGC0YDQvtCw!5e0!3m2!1sru!2sru!4v1603871847892!5m2!1sru!2sru"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default MapSection;
