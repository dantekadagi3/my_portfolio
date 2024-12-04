
import '../Styles/navbar.css';
function Navigation(){
    return(
        <div className="navigate">
            <div className="logo">
              <h3>Kashy</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                    <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}export default Navigation;