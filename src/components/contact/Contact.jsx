import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from "react"
function Contact() {

    const formRef = useRef()

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +90 534 924 90 10
                    </div>
                    <div className="c-info-item">
                         <img className="c-icon" src={Email} alt="" />
                            emremer91@yahoo.com.tr
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Address} alt="" />
                         Metin Akkuş Mahallesi 769.sokak 32/15 Çankaya/ANKARA
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea name="message" placeholder="Message" rows="5"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact