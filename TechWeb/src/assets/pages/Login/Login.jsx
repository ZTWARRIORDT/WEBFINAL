import React from 'react';;
import Layout from '../../components/Layout/Layout';
import login from '../../loginn.jpg';
const Login = () => {
  return (
    <Layout>
        <div>
            <div>
                <img src={login} alt=''/>
            </div>
            <div>
                Login
            </div>

        </div>
    </Layout>
  )
}

export default Login