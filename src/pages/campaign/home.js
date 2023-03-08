import HeaderCard from '../../components/header/header';
import MainContent from '../../components/main';
import CampaignSideNav from '../../components/sidenav';
import style from './home.module.css'

export default function CampaignPage() {
  return (
    <div id={style.CampaignPage}>
        <div className={style.sidenav}>
          <CampaignSideNav />
        </div>
        <div className={style.mainContent}>
          <div className="header">
            <HeaderCard />
          </div>
          <div className="middle-content">
            <MainContent />
          </div>
          <div className="footer"></div>
        </div>
    </div>
    
  );
}
