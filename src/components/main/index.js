import MainPageBulletedList from '../bulletLists'
import MainPageCarousel from '../carousel'
import MinorProjectTabs from '../Tabs'
import style from './main.module.css'

function MainContent() {
    return (
        <div id={style.MainContent}>
            <MainPageCarousel />
            <MainPageBulletedList />
            <div className={style.MinorProjects}>
                <MinorProjectTabs />
            </div>
        </div>
    )
}

export default MainContent