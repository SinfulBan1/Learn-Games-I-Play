import LessonLister from "../LessonLister";
import Lessons from "../Lessons";   

export default function Poker() {
    return(
        <>
        <div className="poker-bg"></div>
        <div className="homepage-content">
            <h1 style={{textAlign: "center"}}>Poker Lessons</h1>
            <LessonLister lessons={Lessons[0].lessons} game={"learn-poker"} />
        </div>
        </>
    );
}