import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ClientRegister from "./components/ClientRegister";
import OrderList from "./components/OrderList";
import TicketPrint from "./components/TicketPrint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Página de inicio pública para tus clientes */}
        <Route path="/" element={<Home />} />

        {/* 2. Panel interno para registrar nuevos equipos */}
        <Route path="/admin" element={<ClientRegister />} />

        {/* 3. Panel de control para ver estados y actualizar el taller */}
        <Route path="/listado" element={<OrderList />} />

        {/* 4. Vista técnica optimizada para imprimir el remito en papel */}
        <Route path="/imprimir" element={<TicketPrint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
