import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons(){
    return(
        <StyledSocialIcons>
            <li>
                <a href="https://twitter.com/SauerTravis">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://github.com/takingupspace">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/travissauer1/">
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}