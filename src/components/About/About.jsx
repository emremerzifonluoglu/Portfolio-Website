import "./about.css"
import foto from "../../img/about-img.jpg";
function About() {
  return (
    <div className='a'>
    <div className="a-left">
     
        <div className="a-card bg">
        </div>
        <div className="a-card">
            <img src={foto} alt="" className="a-img" />
        </div>
    </div>
    <div className="a-right">
        <h1 className="atitle">About Me</h1>
        <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi sapiente neque.consectetur adipisicing elit.</p>
        <p className="a-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga amet reprehenderit officiis hic commodi cumque quo! Quas corrupti omnis ipsum possimus recusandae obcaecati cupiditate, accusantium harum officiis reiciendis soluta.</p>
    </div>    
    </div>
  )
}

export default About