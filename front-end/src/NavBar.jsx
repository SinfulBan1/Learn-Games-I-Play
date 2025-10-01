import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src="/assets/navbar_card_die_alt2.png" alt="Home" className="navbar-logo" />
                </Link>
            </div>
            <div className="navbar-center">
                <Link to="/poker" className="navbar-link">Poker</Link>
                <Link to="/liarsdice" className="navbar-link">Liar's Dice</Link>
                <Link to="/catan" className="navbar-link">Catan</Link>
            </div>
            <div className="navbar-right">
                <button className="navbar-signin">Sign In</button>
            </div>
        </nav>
    );
}