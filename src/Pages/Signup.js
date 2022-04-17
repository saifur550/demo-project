
import useAuth from '../hooks/useAuth';
import img from '../assets/images/sign2.png'
import { Link } from 'react-router-dom';

const Signup = () => {

    const {AllContexts}=useAuth()
    const { handleRegister, handleEmailChange, handlePasswordChange ,error} = AllContexts;
    return (
        <div className ="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
                    <img className="img-fluid" src={img} alt="" />
                    </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mx-auto ">
                    <h3 className="text-primary pt-5 fw-bolder">
                    Please Register here
                    </h3>

                    <div>
                        <form action="" onSubmit={handleRegister} >

                     

                        <label htmlFor="">Email</label>  <br />
                        <input onBlur={handleEmailChange} className ="w-50" type="text" required placeholder ="Enter Your name" /> <br />  <br />

                        <label htmlFor="">Password</label>  <br />
                        <input onBlur={handlePasswordChange} className ="w-50" type="password" required placeholder ="Enter Your name" /> 
                        <br /> <br/>
{/* 
                        <input className="fw-bolder" type="submit" value="Submit"/> */}
                        <div className ="text-danger mb-3" >
                            <span className ="text-danger">
                                {error}
                            </span>
                        </div>

                        <div className ="pb-5">  
                        <button className ="btn btn-primary">Register Here</button>
                        </div>  

                        </form>
                        
                        <div className="mb-3">
                            
                        <Link to ="/login">
                            <span className="text-dark fw-bolder">
                                Already Registered
                            </span>
                            <br/>
                        </Link>

                        </div>
                    

                    </div>
                </div>

              
            </div>
        </div>
    );
};

export default Signup;