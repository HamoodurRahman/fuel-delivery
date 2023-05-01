import { Link } from "react-router-dom";

function FourZeroFour(){
    return (
        <>
        <center>
            <h2 Style="margin-top: 100px">404 Error</h2>
            <p>Page not Found</p>
            <Link to="/"><button Style="margin-bottom: 150px">Go Home</button></Link>
        </center>
        </>
    );
}

export default FourZeroFour;