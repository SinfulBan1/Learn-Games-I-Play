import { Link } from 'react-router-dom';
import useUser from './useUser';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const { isLoading, user } = useUser();
    const navigate = useNavigate();

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
                { isLoading ? <li>loading...</li> : (
                    <>
                    {user && (
                        <div style={{marginRight:10}}>
                            Logged in as {user.email}
                        </div>
                    )}
                    <>
                        {user
                            ? <button className="navbar-signin" onClick={() =>signOut(getAuth())}>Sign Out</button>
                            : <button className="navbar-signin" onClick={() =>navigate('/signin')}>Sign In</button>}
                    </>
                    </>
                )}

            </div>
        </nav>
    );
}