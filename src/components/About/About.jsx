import "./about.css";
import foto from "../../img/about-img.jpg";
function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={foto} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="atitle">About Me</h1>
        <p className="a-sub">
          {" "}
          I am Emre MERZİFONLUOĞLU, a graduate of Gazi University Electrical
          Education in 2015 and a student of Akdeniz University Electrical and
          Electronics Engineering.
        </p>
        <p className="a-desc">
          {" "}
          I am to combine the theoretical education background I gained at Gazi
          University and Akdeniz University with the practical knowledge I will
          gain during my work in the sector. As a person who wishes to have a
          good experience in my working life, is open to learning, loves to work
          and believes in continuous education, I think that I can improve
          myself while adding value to the sector.
        </p>
      </div>
    </div>
  );
}

export default About;
