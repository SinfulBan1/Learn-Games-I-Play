import LessonLister from "../LessonLister";
import Lessons from "../Lessons";   

export default function Catan() {
    return(
        <>
        <div className="catan-bg"></div>
        <div className="homepage-content">
            <h1 style={{textAlign: "center"}}>Settlers of Catan Lessons</h1>
            <LessonLister lessons={Lessons[2].lessons} game={"learn-catan"} />
        </div>
        </>
    );
}