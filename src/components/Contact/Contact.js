import { Link } from 'react-router-dom';
import linkedInIcon from '../../images/linked-in-icon.png'
import gitHubIcon from '../../images/github-icon.png'
import twitterIcon from '../../images/twitter-icon.png'

const Contact = () => {
  return (
    <div>
      <Link to ={'https://www.linkedin.com/in/paulina-isabel-rubio/'}>
        <img src={linkedInIcon} className="contact-icons" name="linked in" alt="linked in link" />
      </Link>
      <Link to ={'https://github.com/paulina-isabel'}>
        <img src={gitHubIcon} className="contact-icons" name="github" alt="github link" />
      </Link>
      <Link to ={'https://twitter.com/srcpau'}>
        <img src={twitterIcon} className="contact-icons" name="github" alt="github link" />
      </Link>
      <div>paulinaisabel@me.com</div>
    </div>
  )
}

export default Contact