import LessonLister from "../LessonLister";
import Lessons from "../Lessons";   

export default function LiarsDice() {
    return(
        <>
        <div className="liarsdice-bg"></div>
        <div className="homepage-content">
            <h1 style={{textAlign: "center"}}>Liar's Dice Lessons</h1>
            <LessonLister lessons={Lessons[1].lessons} game={Lessons[1].name} />
        </div>
        </>
    );
}