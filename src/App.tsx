import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ClientRegister from "./components/ClientRegister";
import OrderList from "./components/OrderList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Tu web normal para el público en general */}
        <Route path="/" element={<Home />} />

        {/* Panel para cargar nuevas órdenes (Cuidado con la barra diagonal) */}
        <Route path="/admin" element={<ClientRegister />} />

        {/* Panel exclusivo para ver el listado del taller y cambiar estados */}
        <Route path="/listado" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
