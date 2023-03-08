import Card from 'react-bootstrap/Card';
import style from './header.module.css'

function HeaderCard() {
  return (
    <Card id={style.HeaderCard}>
      <Card.Body id={style.HeaderCardBody}>
        Enforcement of compliance with House Resolution 4 release of ceded part of Runuokukwo land by Nigerian Airforce
        <span> </span><cite className="blockquote-footer" title="Source Title"> Motion by O. K. Chinda</cite>
      </Card.Body>
      
    </Card>
  );
}

export default HeaderCard;