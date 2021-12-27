import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AccountOptions from '../components/AccountOptions';
import EditAccout from '../container/EditAccout';
import Layout from '../container/Layout';
import Login from '../container/Login';
import NewPassword from '../container/NewPassword';
import Order from '../container/Order';
import RecoveryPassword from '../container/RecoveryPassword';
import SignIn from '../container/SignIn';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ToyStore from '../pages/ToysStore';
import '../styles/global.css';
import Orders from '../container/Orders';
import ProductDetails from '../components/ProductDetails';
import ShopingCart from '../components/ShopingCart';

const App =  () => {
    return(
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/account-options' element={<AccountOptions/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/sign-in' element={<SignIn/>}/>
                <Route exact path='/new-password' element={<NewPassword />} />
                <Route exact path='/recovery-password' element={<RecoveryPassword/>}/>
                <Route exact path='/edit-account' element={<EditAccout/>}/>
                <Route exact path='/toy-store' element={<ToyStore/>}/>
                <Route exact path='/my-orders' element={<Orders/>}/>
                <Route exact path='/my-order' element={<Order/>}/>
                <Route exact path='/product-details' element={<ProductDetails/>}/>
                <Route exact path='/shopping-cart' element={<ShopingCart/>}/>
                <Route path = '*' element={<NotFound/>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
    );
}
export default App 