function Icon(props){
    return(
        <div className="icon">
             <center>
             <div className="icon1">
             <img src={props.I}/>
               </div>
             </center>
               <div className="ico">
               <div className="i1">{props.I1}</div>
               <div className="i2">{props.I2}</div>
               </div>
        </div>
           
    )
}
export default Icon;
