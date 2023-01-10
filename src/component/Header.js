import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
           <Button color = 'green' text= 'Add'/>
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

// const headingstyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }


export default Header;
