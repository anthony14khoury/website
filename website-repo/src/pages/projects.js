import './experience.css';
import {Button, Image, Card, Container, Row, Col} from 'react-bootstrap'
import Python from '../assets/python.png'
import Tableau from '../assets/tableau.svg'
import MySQL from '../assets/mysql.png'
import VMware from '../assets/vmware.png'
import GEA_img from '../assets/GEA.png'
import UF_img from '../assets/UF.png'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  return (
    <div className='experience'>
        <Container className='experience-container'>
            {/* <Row>
                <Col><Buttons /></Col>
            </Row> */}
            
            <div className='mid-space'></div>

            <Row className='experience1-container'>
                <Col><VMware1/></Col>
                <Col>
                    <Row style={{"height":"50%"}}></Row>
                    <Row><GEA/></Row>
                </Col>
            </Row>

            <Row className='experience2-container' style={{"marginTop":"50px"}}>
                <Col><VMware2/></Col>
                <Col>
                    <Row style={{"height":"50%"}}></Row>
                    <Row><UF_TA/></Row>
                </Col>
            </Row>


            <Row style={{"marginTop":"50px"}}>
                <Col><InternHackathon/></Col>
                <Col></Col>
            </Row>

            <div className='extra-space'></div>
        </Container>
    </div>
  );
}

function Buttons() {
    return (
        <Container className='experience-buttons'>
            <Button className='first-card' style={{borderRadius:20, border:'none'}}>
                Professional Experience
            </Button>{' '}
            
            <Button className='second-card' style={{borderRadius:20, border:'none'}}>
                Projects
            </Button>{' '}
            
            <Button className='third-card' style={{borderRadius:20, border:'none'}}>
                Leadership & Achievements
            </Button>{' '}
        </Container>
    )
}

function VMware1() {
    return (
        <div className='vmware1-border'>
            <Card style={{"border":"none", "borderRadius":"50px"}}>
                <Card.Body className='vmware1-body' style={{"borderRadius":"50px"}}>
                    <div>
                        <Card.Img 
                        style={{"width":"12vw", "display":"block", "marginLeft":"auto", "marginRight":"auto", "marginBottom":"-25px", "marginTop":"-25px"}} 
                        src={VMware}></Card.Img>
                    </div>
                    
                    <Card.Title>Software Engineering & Data Analysis Intern</Card.Title>
                    <Card.Text>May 2022 - August 2022</Card.Text>
                    <Card.Text>
                        <ul>
                            <li>Automated 4 Tableau dashboards by connecting a virtual machine, SQL server, MySQL database, and 15 complex queries to visualize data on our virtual cloud’s life cycle in real-time</li>
                            <li>Optimized python script by 67% using multiprocessing and threads to report logs and errors on failed virtual machines</li>
                        </ul>
                    </Card.Text>
                    <Card.Text>Topics:</Card.Text>
                    <Card.Text>
                        <ul>
                            <li>Algorithms Development</li>
                            <li>Database Management</li>
                        </ul>
                    </Card.Text>

                    <Card.Text>Tools Used</Card.Text>
                    <Row sm={6}>
                        <Col><Image src={Python} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={Tableau} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={MySQL} style={{width:'3.5vw'}}/></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

function VMware2() {
    return (
        <div className='vmware2-border'>
            <Card style={{"border":"none", "borderRadius":"50px"}}>
                <Card.Body className='vmware2-body' style={{"borderRadius":"50px"}}>
                    <div>
                        <Card.Img 
                        style={{"width":"12vw", "display":"block", "marginLeft":"auto", "marginRight":"auto", "marginBottom":"-25px", "marginTop":"-25px"}} 
                        src={VMware}></Card.Img>
                    </div>
                    <Card.Title>Cloud Development & Project Management Intern</Card.Title>
                    <Card.Text>May 2021 - August 2021</Card.Text>
                    <Card.Text>
                    <ul>
                        <li>
                            Developed an interactive web app using Angular and TypeScript to visualize product test flakiness over time
                        </li>
                        <li>
                            Implemented backend REST APIs using Node.js, Express.js, and Swagger to seamlessly integrate the frontend
                        </li>
                        <li>
                            Optimized MongoDB queries reducing time spent loading the dashboard from 20 to 2 seconds
                        </li>
                        <li>
                            Managed the progress of 72 Jira stories through an agile workflow and holistic documentation to reduce test flakiness
                        </li>
                    </ul>
                    </Card.Text>

                    <Card.Text>Topics:</Card.Text>
                    <Card.Text>
                        <ul>
                            <li>Algorithms Development</li>
                            <li>Database Management</li>
                        </ul>
                    </Card.Text>

                    <Card.Text>Tools Used</Card.Text>
                    <Row sm={6}>
                        <Col><Image src={Python} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={Tableau} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={MySQL} style={{width:'3.5vw'}}/></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

function GEA() {
    return (
        <div className='gea-border'>
            <Card style={{"border":"none", "borderRadius":"50px"}}>
                <Card.Body className='gea-body' style={{"borderRadius":"50px"}}>
                    <div>
                        <Card.Img 
                        style={{"width":"12vw", "display":"block", "marginLeft":"auto", "marginRight":"auto", "marginBottom":"35px", "marginTop":"25px"}} 
                        src={GEA_img}></Card.Img>
                    </div>
                    <Card.Title>Software Development Intern</Card.Title>
                    <Card.Text>January 2021 - April 2021</Card.Text>
                    <Card.Text>
                    <ul>
                        <li>
                            Saved GE Appliances $60,000 annually by collaborating with financial analysts to create a web-scraping python script that performs weekly competitive analysis generating accurate shipping and pricing data
                        </li>
                        <li>
                            Automated the I9 validation process using a data manipulation python library saving the HR department 1.5 hours daily
                        </li>
                    </ul>
                    </Card.Text>

                    <Card.Text>Topics:</Card.Text>
                    <Card.Text>
                        <ul>
                            <li>Algorithms Development</li>
                            <li>Database Management</li>
                        </ul>
                    </Card.Text>

                    <Card.Text>Tools Used</Card.Text>
                    <Row sm={6}>
                        <Col><Image src={Python} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={Tableau} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={MySQL} style={{width:'3.5vw'}}/></Col>
                    </Row>

                </Card.Body>
            </Card>
        </div>
    )
}

function UF_TA() {
    return (
        <div className='uf-ta-border'>
            <Card style={{"border":"none", "borderRadius":"50px"}}>
                <Card.Body className='uf-ta-body' style={{"borderRadius":"50px"}}>
                <div className='img-container'>
                        <Card.Img 
                        style={{"width":"17vw", "display":"block", "marginLeft":"auto", "marginRight":"auto"}} 
                        src={UF_img}></Card.Img>
                    </div>
                    <Card.Title>Teaching Assistant for Software Engineering</Card.Title>
                    <Card.Text>January 2022 - Present</Card.Text>
                    <Card.Text>
                    <ul>
                        <li>
                            Instructed 24 advanced students weekly to increase their foundational skills in Python, React, Mongo DB, and Java 
                        </li>
                        <li>
                            Collaborated with a Professor and 4 TAs to create lesson plans, projects, and exams covering topics including source control, testing, security, agile development, scrum, and ethics
                        </li>
                    </ul>
                    </Card.Text>

                    <Card.Text>Topics:</Card.Text>
                    <Card.Text>
                        <ul>
                            <li>Algorithms Development</li>
                            <li>Database Management</li>
                        </ul>
                    </Card.Text>

                    <Card.Text>Tools Used</Card.Text>
                    <Row sm={6}>
                        <Col><Image src={Python} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={Tableau} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={MySQL} style={{width:'3.5vw'}}/></Col>
                    </Row>

                </Card.Body>
            </Card>
        </div>
    )
}

function InternHackathon() {
    return (
        <div className='intern-hack-border'>
            <Card style={{"border":"none", "borderRadius":"50px"}}>
                <Card.Body className='intern-hack-body' style={{"borderRadius":"50px"}}>
                    <div>
                        <Card.Img 
                        style={{"width":"12vw", "display":"block", "marginLeft":"auto", "marginRight":"auto", "marginBottom":"-25px", "marginTop":"-25px"}} 
                        src={VMware}></Card.Img>
                    </div>
                    <Card.Title>2-Time Intern Hackathon Winner</Card.Title>
                    <Card.Text>August 2021 & August 20222</Card.Text>
                    <Card.Text>
                    <ul>
                        <li>
                            Developed a Microsoft Outlook plugin using C# to improve workplace relationships in a hybrid environment by synchronizing when team members will be in the office
                        </li>
                        <li>
                            Directed 3 interns through the ideation, development, and presentation of a Figma prototype aimed at centralizing the company’s onboarding and offboarding process
                        </li>
                    </ul>
                    </Card.Text>

                    <Card.Text>Topics:</Card.Text>
                    <Card.Text>
                        <ul>
                            <li>Algorithms Development</li>
                            <li>Database Management</li>
                        </ul>
                    </Card.Text>

                    <Card.Text>Tools Used</Card.Text>
                    <Row sm={6}>
                        <Col><Image src={Python} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={Tableau} style={{width:'2.5vw'}}/></Col>
                        <Col><Image src={MySQL} style={{width:'3.5vw'}}/></Col>
                    </Row>

                </Card.Body>
            </Card>
        </div>
    )
}