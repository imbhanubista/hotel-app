import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrinksMap from "./drinksComposition/DrinksMap";
import FoodMaping from "./foodCompostion/FoodMaping";
import IndexPage from "./IndexPage";
const RoutePages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu/foods" element={<FoodMaping />} />
        <Route path="/menu/drinks" element={<DrinksMap />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePages;
