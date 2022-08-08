import './experience.css';
import {Button, Image, Card, Container, Row, Col} from 'react-bootstrap'
import VMware from '../assets/vmware.png'
import GEA_Pic from '../assets/GEA.jpg'
import Python from '../assets/python.png'
import Tableau from '../assets/tableau.svg'
import MySQL from '../assets/mysql.png'
// import Background from '../assets/background.png'

export default function Experience() {
  return (
    <Container className='experience-container'>
        <Row>
            <Col><Buttons /></Col>
        </Row>
        
        <div className='mid-space'></div>
        
        <Row>
            <Col><VMware1/></Col>
            <Col><VMware2/></Col>
        </Row>

        <Row>
            <Col><GEA /></Col>
        </Row>

        <div className='extra-space'></div>
    </Container>

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
        <Container className='vmware1-card'>
            <Card style={{ width: '35vw' }}>
            <Card.Img variant="top" src={VMware} style={{ width: '25vw' }}/>
            <Card.Body>
                <Card.Title>Software Engineering & Data Analysis Intern</Card.Title>
                <Card.Text>May 2022 - August 2022</Card.Text>
                <Card.Text>
                <ul>
                    <li>Automated 4 Tableau dashboards by connecting a virtual machine, SQL server, MySQL database, and 15 complex queries to visualize data on our virtual cloud’s life cycle in real-time</li>
                    <li>Optimized python script by 67% using multiprocessing and threads to report logs and errors on failed virtual machines</li>
                </ul>
                </Card.Text>
                <Row md={6}>
                    <Col><Image src={Python} style={{width:'2.5vw'}}/></Col>
                    <Col><Image src={Tableau} style={{width:'2.5vw'}}/></Col>
                    <Col><Image src={MySQL} style={{width:'3.5vw'}}/></Col>
                </Row>
            </Card.Body>
            </Card>
        </Container>
    )
}

function VMware2() {
    return (
        <Container className='vmware2-card'>
            <Card style={{ width: '35vw' }}>
            <Card.Img variant="top" src={VMware} style={{ width: '25vw' }}/>
            <Card.Body>
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
            </Card.Body>
            </Card>
        </Container>
    )
}

function GEA() {
    return (
        <Container className='gea-card'>
            <Card style={{ width: '35vw' }}>
            <Card.Img variant="top" src={GEA_Pic} style={{ width: '25vw' }}/>
            <Card.Body>
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
            </Card.Body>
            </Card>
        </Container>
    )
}

