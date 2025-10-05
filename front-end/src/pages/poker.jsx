import LessonLister from "../LessonLister";
import Lessons from "../Lessons";   

export default function Poker() {
    return(
        <>
        <div className="liarsdice-bg"></div>
        <div className="homepage-content">
            <h1 style={{textAlign: "center"}}>Poker Lessons</h1>
            <LessonLister lessons={Lessons[0].lessons} game={Lessons[0].name} />
        </div>
        </>
    );
}