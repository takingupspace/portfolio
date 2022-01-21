import { AboutContainer } from "./styles/About.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer(){
    return(
        <StyledFooter>
            <AboutContainer>
                <img src="./images/mern.jpg" alt="NO CONTENT" height='50'/>
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