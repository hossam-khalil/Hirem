import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CheckoutPage from "./pages/Checkoutpage";
import Page404 from "./pages/Page404"
import Loginpage from "./pages/Loginpage";
import Counter from "./Counter";
import { useRecoilState } from "recoil";
import { $Counter, $sideMenuIndex } from "./store";

export default function App() {
  const [sideMenuIndex, setSideMenuIndex] = useRecoilState($sideMenuIndex);
  return (
    <div className="col-12 App">

      <button onClick={() => {
        if (sideMenuIndex == true) {
          setSideMenuIndex(false);
        }
        else {
          setSideMenuIndex(true);
        }
      }}></button>
      {
        sideMenuIndex ? <Counter /> : null
      }

      {/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}
