import '../css/NavBar.css'
const NavBar = () => {
    return ( 
        <div className="NavBar">
            <div className="Logo">
                <p>WIDLCATS LOUNGE</p>
            </div>
            <div className="Buttons">
                <button className="Home">Home</button>
                <button className="History">History</button>
                <button className="Statistics">Statistics</button>
            </div>
        </div>
     );
}
 
export default NavBar;