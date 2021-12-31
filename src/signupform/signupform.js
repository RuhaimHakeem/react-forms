const SignUpForm = () => {
    return (  
    <form> 
        <div className="form-inner">
            <h2> Sign up </h2>
            <p>Sign up To Continue With The Process</p>

            <div className="form-group">
                <input type="text" class = "icon" placeholder='Enter Phone Number ' />
                <input type="text"placeholder='First name ' />
                <input type="text"placeholder='Last name ' />
                

            </div>    
            <input type='submit' value='Continue'/>   
            
        </div>
    </form> );
}
 
export default SignUpForm;