
import useAuth from '../hooks/useAuth';
import img1 from '../assets/images/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const {AllContexts}=useAuth()
    const {signInWithGoogle ,signInWithGitHub , loginEmail, handleEmailChange ,handlePasswordChange} = AllContexts; 
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <img className="img-fluid" src={img1} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                       <div className="py-3">
                       <h2 className="text-primary fw-bold">
                            Login Here
                        </h2>

                       </div>


                        <form action=""  onSubmit={loginEmail}>
                        <div className="email">
                            <label className="fw-bold text-info" htmlFor="">Email</label> <br />
                            <input onBlur={handleEmailChange} className ="w-50" type="text" placeholder="Email Address"/>
                        </div>
                        <br />

                        <div className="email">
                            <label className="fw-bold text-info"  htmlFor="">Password</label> <br />
                            <input onBlur={handlePasswordChange} className ="w-50" type="text" placeholder="Password"/>
                            <br /> <br />

                            <input className="fw-bolder bg-dark text-white" type="submit" value="Submit"/>

                        </div>
                        <br />

                        <br />
                        </form>

                        <div>
                            <button onClick={signInWithGoogle} className ="btn btn-primary"> Log in with Google  </button>
                        </div>
                        <br />
                        

                        <div className ="mb-4">
                            <button onClick={signInWithGitHub} className ="btn btn-info"> Log in with GitHub  </button>
                        </div>

                        <Link to ="/signup"> <span className="text-danger fw-bolder  ">
                        New User ?
                        </span>
                        </Link>


                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;