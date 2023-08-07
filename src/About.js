function About(props) {
    return (
        <div className="card_title">
            <div>
                <img src={props.Card} />
                <h3>{props.N1}</h3>
                <div className="btn"><button>{props.N2}</button></div>
            </div>
            <div>
            
            </div>
        </div>
    )
}
export default About;