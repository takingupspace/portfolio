import { StyledHeader } from "./styles/Header.styled"
import { AboutContainer } from "./styles/About.styled"
import { Nav } from "./styles/Nav.styled"
import { Logo } from "./styles/Logo.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"
import { Image } from "./styles/Image.styled"
export default function Header(){
    return(
        <header>
        <StyledHeader>
        <AboutContainer>
            <Nav>
                <Logo src='./images/logo.svg' alt='NO LOGO'/>
                <Button>Login</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>
                        Travis Sauer's Portfolio Website
                    </h1>
                    <p>
                        I'm currently a student at the University of Texas at San Antonio in the Computer Science department where I'm pursuing a Bacholor's Degree. I'm extremely passionate about software development and I believe that expanding my
                        domain knowledge and technology kit is very important.
                    </p>
                    <Button bg='#ff0099' color='#fff'>
                        Check Out My Projects Here 
                    </Button>
                </div>
                <Image src='./images/profile.svg' alt='NO PROFILE PIC'/>
            </Flex>
        </AboutContainer>

        </StyledHeader>
        </header>
    )
}