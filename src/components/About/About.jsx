import "./about.css"
// import foto from "../../img/IMG_0644.jpeg";
function About() {
  return (
    <div className='a'>
    <div className="a-left">
        <div className="a-card bg">
        </div>
        <div className="a-card">
            <img src="https://images.pexels.com/photos/11717762/pexels-photo-11717762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="a-img" />
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