import Card from 'react-bootstrap/Card';
import style from './list.module.css'

function MainPageBulletedList() {
  return (
    <Card id={style.ListCard}>
      <Card.Body>
        <ul className={style.UlLists}>
            <li className={style.ListItem}><span>Procurement of employment for constituent at Saipem Nigeria Custom Service</span>
                <span>Federal Road Safety Commissiom(FRSC),</span>
                <span>Notore, Federal Ministry of Education,</span>
                <span>Federal  Ministry of Health, NYSC...</span>
            </li>
            <li>
                <span>
                    We continue to give/write our reference /recommendation letter for constituents who
                    have applied for specific jobs (employment or contract) with a view to facilitate their opportunities.
                </span>
            </li>
            <li>
                <span>
                    Setting up of obagla legislators forum, CDC and youth bodies to partner and ensure 
                    compliance in this area particularly enforcement of Local Content Law.
                </span>
            </li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default MainPageBulletedList;