import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
    return (
        
        <header className="header">
            <h1>{title}</h1>
           <Button color = {showAdd ? 'red': 'green'} text= {showAdd ? 'close': 'Add'} onClick=
           {onAdd}/>
           {/* <Button color = 'Blue' text= 'Hello1'/>
           <Button color = 'Pink' text= 'Hello2'/> */}
        </header>
    ); 
};

Header.defaultProps = {
    title: "Track tasker",
    name: "Props",
};

Header.propTypes = {
    title: propTypes.string.isRequired,
};
//Css in JS
// const headingstyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }


export default Header;
