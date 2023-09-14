import password_icon from '../assets/signupLogin/password_icon.png'
import username_icon from '../assets/signupLogin/username_icon.png'
import { StyledLogin } from '../components/styles/login.styled'

//TODO need to add value attribute to input tags and on change event to update state
//TODO add link attribute to signup

const Login = () => {
    return (
        <StyledLogin>
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className="underline"></div>
            </div>
            <div className='input-container'>
                <div className='input'>
                    <img src={username_icon} alt='username icon'/>
                    <input type='text' placeholder='Username'/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt='email icon'/>
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            <div className="signup-here">Don't Have an account? <span>Signup Here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>
        </div>
        </StyledLogin>
    )
}

export default Login