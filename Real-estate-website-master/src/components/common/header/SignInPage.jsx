import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Initialize Supabase client

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState(null);
  const [isLoggedIn,setRegisterStatus] = useState(false);  // State to control navigation
  //const navigate = useNavigate();



  const handleSignIn = async (event) => {
    event.preventDefault();  // Prevent form submission from reloading the page

      axios.post("http://127.0.01:3001/signin",{
      email:email,
      password:password,
    }).then((response)=>{
      if(response.data.message){
        setRegisterStatus(response.data.message);  
      }else{
        setRegisterStatus("Account created successfully");

      }
    })
  };

  //useEffect(()=>{
    //navigate
  //},[isLoggedIn]

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign In</button>
        {isLoggedIn && <Link to="/home">Go to Home</Link>} 
      </form>
    </div>
  );
}

export default SignInPage;
