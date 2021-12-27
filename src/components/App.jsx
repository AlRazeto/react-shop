import React from 'react';
import Layout from '../container/Layout';
import Login from '../container/Login';
import RecoveryPassword from '../container/RecoveryPassword';
import '../styles/global.css';

const App =  () => {
    return(
    <Layout>
        <Login />
        <RecoveryPassword />
    </Layout>
    );
}
export default App