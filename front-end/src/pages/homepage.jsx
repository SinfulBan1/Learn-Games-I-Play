import { Link } from 'react-router-dom';

export default function HomePage () {
    return(
        <>
        <div className="homepage-bg"></div>
        <div className="homepage-content">
            <h1>Learn Games!</h1>
            <p>Welcome to Learn Games! I made this website to teach my friends the tabletop games I play most.
                While most of the information found here is entry level "explain the rules" type stuff, there is also more advanced strategy included as well.
            </p>
            <div className="game-selection-box">
                <Link to="/poker" className="game-option">
                    <img src="./assets/poker.jpg" alt="Poker" className="game-image" />
                    <div className="game-name">Poker</div>
                </Link>
                <Link to="/liarsdice" className="game-option">
                    <img src="./assets/liarsdice.jpg" alt="Liar's Dice" className="game-image" />
                    <div className="game-name">Liar's Dice</div>
                </Link>
                <Link to="/catan" className="game-option">
                    <img src="./assets/catan.jpg" alt="Settlers of Catan" className="game-image" />
                    <div className="game-name">Settlers of Catan</div>
                </Link>
            </div>
        </div>
        </>
    );
}