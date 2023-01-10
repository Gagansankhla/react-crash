import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click');
    }
    return (
        
        <header className="header">
            <h1>{title}</h1>
           <Button color = 'green' text= 'Add' onClick=
           {onClick}/>
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
