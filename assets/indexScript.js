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
                <div id="spd-logo">
                    <img src="imgs\SPD_Logo_oC_Rot_RGB.png" />
                </div>
                <nav>
                    <ul>
                        <li>Über</li>
                        <li>Programm</li>
                        <li>Bilder</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"));