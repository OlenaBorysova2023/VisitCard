import Photo from '../assets/photo04.png'

function Header() {
    return (
        <>
            <img src={Photo} alt="Olena Borysova" className="photo" />
            <section className="header">
                <h1>Olena Borysova</h1>
                <h2>Senior Front-End Developer</h2>
                <a href="https://olena-borysova.netlify.app/">website</a>
            </section>        
        </>
    )
}

export default Header