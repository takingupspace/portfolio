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
            <Logo src='./images/fullstack.png' alt='NO LOGO' height='50'/>
                <Button>Login</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>
                        Travis Sauer's Portfolio
                    </h1>
                    <p>
                        I'm currently a student at the University of Texas at San Antonio in the Computer Science department, where I'm pursuing a Bacholor's Degree. I'm extremely passionate about software development and I believe in the continued expansion of my
                        domain knowledge and technology kit.
                    </p>
                    <Button>
                        Check Out My Projects Here 
                    </Button>
                </div>
                <Image src='./images/profile.jpg' alt='NO PROFILE PIC'/>
            </Flex>
        </AboutContainer>

        </StyledHeader>
        </header>
    )
}