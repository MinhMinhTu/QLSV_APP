//module  tự viết
const alias =(path)=>({
    Menu :`${path}/src/components/Menu/Menu.js`,
    ProductItem :`${path}/src/components/ProductItem/ProductItem.js`,
    ProductList :`${path}/src/components/ProductList/ProductList.js`,
    HomePage:`${path}/src/pages/HomePage/HomePage.js`,
    NotFoundPage:`${path}/src/pages/NotFoundPage/NotFoundPage.js`,
    ProductActionPage:`${path}/src/pages/ProductActionPage/ProductActionPage.js`,
    ProductListPage:`${path}/src/pages/ProductListPage/ProductListPage.js`,
    Login:`${path}/src/pages/Login/Login.js`,
    Search :`${path}/src/components/Search/Search.js`,
    apiCaller :`${path}/src/utils/apiCaller.js`,
    font : `${path}/node_modules/font-awesome/css/font-awesome.min.css`,
    Echart:`${path}/src/pages/Chart/Echart.js`,

})
module.exports ={
    alias
}
