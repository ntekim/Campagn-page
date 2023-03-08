import Nav from 'react-bootstrap/Nav';
import style from './style.module.css'

export default function CampaignSideNav() {
  return (
    <div id={style.CampaignSideNav}>
        <Nav defaultActiveKey="/home" justify className="flex-column" id={style.navs}>
            <Nav.Link href="/home" id={style.navLink}>Youth Empowerment Job Creation</Nav.Link>
            <Nav.Link eventKey="link-1" id={style.navLink}>Women Empowerment Program</Nav.Link>
            <Nav.Link eventKey="link-2" id={style.navLink} >Sport/Cultural Deveklopment</Nav.Link>
            <Nav.Link href='#' eventKey="link-3"id={style.navLink}>
                Education and Capacity Building Initiatives
            </Nav.Link>
            <Nav.Link eventKey="disabled"id={style.navLink}>
                Social Awareness
            </Nav.Link>
            <Nav.Link eventKey="disabled"id={style.navLink}>
                Obio/Akpor Embassy
            </Nav.Link>
            <Nav.Link eventKey="disabled"id={style.navLink}>
                Other Projects
            </Nav.Link>
        </Nav>
    </div>
    
  );
}