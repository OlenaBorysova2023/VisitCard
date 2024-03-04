import GitHubIcon from '../assets/GitHub.svg'
import InstagramIcon from '../assets/Instagram.svg'

function Footer() {
    return (
    <footer>
        <a href="https://github.com/OlenaBorysova2023/"><img src={GitHubIcon} alt="GitHub" /></a>
        <a href="https://www.instagram.com/olena_brsv/"><img src={InstagramIcon} alt="Instagram" /></a>
      </footer>
    )
}

export default Footer