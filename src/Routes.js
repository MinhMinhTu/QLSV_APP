import React from 'react'
import HomePage from 'HomePage';
import ProductListPage from 'ProductListPage';
import NotFoundPage from 'NotFoundPage';
import ProductActionPage from 'ProductActionPage';
import Echart from 'Echart';

const Routes = [
    {
        path : "/",
        exact : true,
        main : () => <HomePage/>
    },
    {
        path : "/products-list",
        exact : false,
        main : () => <ProductListPage/>
    },
    {
        path : "/charts",
        exact : false,
        main : () => <Echart/>
    },
    {
        path :"/products/add",
        exact : false,
        main : ({history}) => <ProductActionPage history={history}/>
    },
    {
        path :"/products/:id/edit",
        exact : false,
        main : ({history,match}) => <ProductActionPage history={history} match={match}/>
    },
    {
        path : "",
        exact : false,
        main : () => <NotFoundPage/>
    }
    
] 

export default Routes;