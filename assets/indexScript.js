class Index extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return(
            <div>
                <Header />
            </div>
            
        )
    }
}
const Header = (props) => {
    return(
        <header>
            <img id="cover-img" src="imgs\janCover.jpg" alt=""/>
            <div id="menu-div">
                <div>
                    <img  class="spd-logo red" src="imgs\SPD_Logo_oC_Rot_RGB.png" alt="SPD Logo"/>
                    <img  class="spd-logo black" src="imgs\SPD_Logo_Schwarz_RGB.png" alt="SPD Logo"/>
                </div>
                <nav>
                    <ul>
                        <li>ÜBER</li>
                        <li>PROGRAMM</li>
                        <li>BILDER</li>
                        <li>KONTAKT</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"));