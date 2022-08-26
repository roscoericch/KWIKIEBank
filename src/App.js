import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation";
import Homepage from "./routes/Home/homepage";
import Fund from "./routes/Fund/fund";
import User from "./routes/User/user";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="/fund" element={<Fund />} />
          <Route path="/profile" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
