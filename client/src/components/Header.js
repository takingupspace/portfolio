import { StyledHeader } from "./styles/Header.styled"
import { AboutContainer } from "./styles/About.styled"
import { Nav } from "./styles/Nav.styled"
import { Logo } from "./styles/Logo.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"
import { Image } from "./styles/Image.styled"

function goToProjects(){
    document.getElementById('styledcard3').scrollIntoView();
}

function goToContactMe(){
    document.getElementById('idForTheFooter').scrollIntoView();
}
export default function Header(){
    return(
        <header>
        <StyledHeader>
        <AboutContainer>
            <Nav>
            <Logo src='./images/fullstack.png' alt='NO LOGO' height='50'/>
                <Button onClick={goToContactMe}>Contact Me</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>
                        Travis Sauer's Portfolio
                    </h1>
                    <p>
                        I'm currently a student at the University of Texas at San Antonio in the Computer Science department, where I'm pursuing a Bacholor's Degree. I'm extremely passionate about software development and I believe in the continued expansion of my
                        domain knowledge and technological kit.
                    </p>
                    <Button onClick={goToProjects}>
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