import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Show a list of lesson names and their section headers
export default function LessonLister({ lessons = [], game }) {
    if (!Array.isArray(lessons) || lessons.length === 0) {
        return <p>No lessons available.</p>;
    }

    return (
        <>
            {lessons.map(l => (
                <Link key={l.title} to={"/lessons/" + game + "/" + l.id}>
                <section className="lesson-group">
                    <h2>{l.title}</h2>
                    <ul>
                        {(l.sections).map(s => (
                            <li key={s.title}>{s.title}</li>
                        ))}
                    </ul>
                </section>
                </Link>
            ))}
        </>
    );
}

LessonLister.propTypes = {
    lessons: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            sections: PropTypes.arrayOf(
                PropTypes.shape({ title: PropTypes.string })
            ),
        })
    ),
};