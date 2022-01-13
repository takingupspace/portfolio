import { AboutContainer } from "./styles/About.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer(){
    return(
        <StyledFooter>
            <AboutContainer>
                <img src="./images/logo_white.svg" alt="NO CONTENT" />
                <Flex>
                    <ul>
                        <li>

                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                    <ul>
                        <li>

                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                    <ul>
                        <li>

                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                    <SocialIcons />
                </Flex>
                <p></p>
            </AboutContainer>
        </StyledFooter>
    )
}