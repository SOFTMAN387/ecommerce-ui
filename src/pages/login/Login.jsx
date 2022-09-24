//import axios from "axios";
// import { useContext, useState } from "react";
 import { Link } from "react-router-dom";
 import Navbar from "../../components/navbar/Navbar";
 import Topbar from "../../components/topbar/Topbar";
 import Footer from "../../components/footer/Footer";
// import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
    // const [credentials, setCredentials] = useState({
    //     email: undefined,
    //     password: undefined,
    // });
    // const [loginErr, setLoginErr] = useState(false);

    // const { loading, error, dispatch } = useContext(AuthContext);

    // const navigate = useNavigate()

    // const handleChange = (e) => {
    //     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // };

    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     dispatch({ type: "LOGIN_START" });
    //     try {

    //         const res = await axios.post("/auth/login", credentials);
    //         if (res.data === "User Not Found !!..") {
    //             dispatch({ type: "LOGIN_FAILURE", payload: null });
    //             setLoginErr(true);
    //             navigate("/login");

    //         } else {

    //             dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    //             navigate("/");
    //             console.log(res.data);
    //         }

    //     } catch (err) {
    //         dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    //     }
    // };

    //  console.log(user);

    return (

     <>
     <Topbar/>
     <Navbar />


     <div className="login-div">
            <div className="loginContainer">
                <input
                    type="email"
                    placeholder="username"
                    id="email"
                    // onChange={handleChange}
                    className="loginInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    // onChange={handleChange}
                    className="loginInput"
                />
                <button
                //  disabled={loading} 
                // onClick={handleClick}
                 className="loginButton">
                    Login
                </button>
                {/* {error && <span>{error.message}</span>} */}
                {/* {loginErr ? <span style={{ color: "red" }}>Wrong Credentials !!...</span> : <span></span>} */}
                <div>
                <br></br>
                <hr/>
                <h5>Don't have an account ?.</h5>
                <br/>
                <Link to="/register">Register here !.</Link>
                </div>
            </div>
        </div>
<Footer />
     </>
    );
};

export default Login;