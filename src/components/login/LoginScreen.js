
export const LoginScreen = () => {
  return (
    <form>
      <div calssName='form-inner'>
        <h2>Login</h2>
        {/* ERROR */}
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='text' name='email' id='email' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' id='password' />
        </div>
      </div>
    </form>
  )
}
