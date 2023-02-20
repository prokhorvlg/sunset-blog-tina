import HeaderLink from "./HeaderLink.component";

const Header = () => {
    return (
        <div className="sunset-nav-bar">
            <div className="navbar-wrap main-segment-wrap">
                <div className="main-segment">
                    <div className="main-segment-stipple left"></div>
                    <div className="main-segment-title">
                        <div className="main-segment-title-blinky"></div>
                        <div className="main-segment-title-text">Sunset System</div>
                    </div>
                    <div className="main-segment-stipple right"></div>
                </div>
            </div>
            <div className="navbar-wrap links-segment-wrap">
                <div className="links-segment">
                    <ul>
                        <HeaderLink title="Home" />
                        <HeaderLink title="Blog" />
                        <HeaderLink title="Game" />
                        <HeaderLink title="Prints" />
                    </ul>
                </div>
            </div>
            <div className="navbar-wrap socials-segment-wrap">
                <div className="socials-segment">
                    <ul>
                        <li>Patreon</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;