import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import MainPageBulletedList from '../bulletLists';
import MainPageCarousel from '../carousel';
import style from './tabs.module.css'

function MinorProjectTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={4}>
            <Card>
                <Card.Body>
                <Nav variant="#0d2b22" className="flex-column" id={style.TabNavs}>
                    <Nav.Item>
                    <Nav.Link eventKey="first">Skill Acquisition/Job Creation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Leadership Training</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Co-ordinated Youth Activities</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <MainPageCarousel />
                <MainPageBulletedList />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <MainPageCarousel />
                <MainPageBulletedList />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <MainPageCarousel />
                <MainPageBulletedList />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default MinorProjectTabs;