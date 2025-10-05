import { useParams } from 'react-router-dom';
import Lessons from '../Lessons';

export default function LessonPage () {
    const { game, lessonId } = useParams();
    const lesson = Lessons.find(a => a.name == game);
    const lessonpart = lesson.lessons[lessonId];

    return(
        <>
        <div className="liarsdice-bg"></div>
        <div className="homepage-content">
            <h1>{lessonpart.title}</h1>
            {lessonpart.sections.map (s => (
                <div>
                <h2>{s.title}</h2>
                <p>{s.content}</p>
                <br/>
                </div>
            ))}
        </div>
        </>
    );
}