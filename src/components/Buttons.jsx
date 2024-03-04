import MailIcon from '../assets/Mail.svg'
import LinkedInIcon from '../assets/linkedin.svg'

function Buttons() {
    return (
        <section className="buttons">
            <a href="mailto:vi-lena@ukr.net" className="button-email">
            <img src={MailIcon} alt="" />
            E-mail
            </a>
            <a href="https://www.linkedin.com/in/olena-borysova-04721b4b" className="button-linkedin">
            <img src={LinkedInIcon} alt="" />
            LinkedIn
            </a>
        </section>
    )
}

export default Buttons