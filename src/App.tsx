import {BrowserRouter,Routes,Route} from "react-router-dom";
import { lazy,Suspense } from "react";
import Loader from "./Pages/Loader";

const Home = lazy(()=>import("./Pages/Home"));
const Cart = lazy(()=>import("./Pages/Cart"));
const Search = lazy(()=>import("./Pages/Search"));
const Dashboard = lazy(() => import("./Pages/admin/dashboard"));
const Products = lazy(() => import("./Pages/admin/products"));
const Customers = lazy(() => import("./Pages/admin/customers"));
const Transaction = lazy(() => import("./Pages/admin/transaction"));
const Barcharts = lazy(() => import("./Pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./Pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./Pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./Pages/admin/app/coupon"));
const Stopwatch = lazy(() => import("./Pages/admin/app/stopwatch"));
const Toss = lazy(() => import("./Pages/admin/app/toss"));
const NewProduct = lazy(() => import("./Pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./Pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./Pages/admin/management/transactionmanagement")
);


const App =()=>{
  return(
<Suspense fallback={<Loader/>}>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/search" element={<Search/>}/>
  <Route path="/cart" element={<Cart/>}/>
  {/* adminRoutes */}
  
<Route
  // element={
  //   <ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />
  // }
>
  <Route path="/admin/dashboard" element={<Dashboard />} />
  <Route path="/admin/product" element={<Products />} />
  <Route path="/admin/customer" element={<Customers />} />
  <Route path="/admin/transaction" element={<Transaction />} />
  {/* Charts */}
  <Route path="/admin/chart/bar" element={<Barcharts />} />
  <Route path="/admin/chart/pie" element={<Piecharts />} />
  <Route path="/admin/chart/line" element={<Linecharts />} />
  {/* Apps */}
  <Route path="/admin/app/coupon" element={<Coupon />} />
  <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
  <Route path="/admin/app/toss" element={<Toss />} />

  {/* Management */}
  <Route path="/admin/product/new" element={<NewProduct />} />

  <Route path="/admin/product/:id" element={<ProductManagement />} />

  <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
</Route>;

</Routes>
</BrowserRouter>
</Suspense>
  )
}
export default App