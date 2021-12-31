import React from 'react'

 const LoginForm = () => {
    return (
        <form> 
            <div className="form-inner">
                <h2> Login </h2>
                <p>Login To Continue With The Process</p>

                <div className="form-group">
                    
                    <input type="text"placeholder='Enter Phone Number ' />
                </div>    
                <input type='submit' value='Continue'/>   
                
            </div>
        </form>
    )
}
export default LoginForm  
