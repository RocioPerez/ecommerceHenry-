import React from 'react';
import ProductCatalog from "containers/ProductCatalog/productCatalog";
import ProductDetail from "components/ProductDetail/ProductDetail.js";
import Nosotros from "components/Nosotros/Nosotros.js";
import FAQ from "components/FAQ/FAQ.js";
import HomeAdmin from "containers/HomeAdmin/HomeAdmin.js"
import Home from "containers/Home/Home.js";
import CreateUpdateProduct from "components/Product_CRUD/CreateUpdateProduct"
import NgosCrud from "components/NgosCrud/NgosCrud.js"
import NgoTable from "containers/NgoTable/NgoTable.js"
import FormCategorias from "components/FormCategory/FormCategory";
import OrderDetails from 'containers/OrderDetails/orderDetails';
import OrderTable from "containers/OrderTable/OrderTable.js";
import FormUser from 'components/FormUser/FormUser';
import ShoppingCart from "components/ShoppingCart/ShoppingCart";
import UserTable from "containers/UserTable/UserTable.js";
import UserDetails from "containers/UserDetails/UserDetails.js";


const routes = [
  {
    path:"/",
    component: Home,
    exact:true
  },    
  
  {
    path:"/nosotros",
    component: Nosotros,
  },
  {
    path:"/faq",
    component: FAQ,
  },
  {
    path: "/products/:id",
    render:({match}) => <ProductDetail id={match.params.id} />
  },
  {
    path:"/products",
    component: ProductCatalog,
    exact: true
  },
  {
    path:"/admin",
    component: HomeAdmin,
  },
  {
    path:"/admin/products",
    render: () => <ProductCatalog admin={true}/>,
  },
  {
    path:"/admin/ngos",
    component: NgoTable,
    exact: true
  },
  {
    path:"/admin/ngos/add",
    component: NgosCrud,
  },
  {
    path: "/carrito",
    component: ShoppingCart,
    exact: true,
  },
  {
    path:"/admin/users",
    render: () => <UserTable />,
    exact: true,
  },
  {
    path: '/admin/addproduct',
    render: () => <CreateUpdateProduct />,
    exact: true
  },
  {
    path: "/product/edit/:id",
    render:({match}) => <CreateUpdateProduct id={match.params.id} />,
    exact: true
  },

  {
    path:"/admin/categories",
    component: FormCategorias,
    exact: true
  },
  {
    path: "/admin/orders/:orderId",
    render:({match}) => <OrderDetails id={match.params.orderId} />,
    exact: true
  }, 
  {
    path: "/orderdetails",
    render:({match}) => <OrderDetails id={match.params.id} />,
    exact: true
  },
  {
    path:"/admin/orders",
    component: OrderTable,
    exact:true
  },
  {
    path:"/admin/users/add",
    component: FormUser,
    exact: true
  },
  {
    path: "/admin/users/:userId",
    render:({match}) => <UserDetails id={match.params.userId} />,
    exact: true
  }, 
 
];
  
  export default routes;
  