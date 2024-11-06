import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Location from "./Pages/Location/Location";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";

function App() {

  const title = "Eden wave city , Ghaziabad Price, Location and Floor Plan"
  const descriptions = "Eden wave city , Ghaziabad Price, Location and Floor Plan"

  // remove inspect and copy element
  //  useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   document.addEventListener('selectstart', handleSelect);
  //   document.addEventListener('contextmenu', handleRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('selectstart', handleSelect);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/eden/"
            exact
            element={
              <Home title={title} descriptions={descriptions} />} />
          <Route
            path="/eden/gallery"
            exact
            element={
              <Gallery title={title} descriptions={descriptions} />} />
          <Route
            path="/eden/price-list"
            exact
            element={
              <PriceList title={title} descriptions={descriptions} />} />
          <Route
            path="/eden/master-plan"
            exact
            element={
              <MasterPlan title={title} descriptions={descriptions} />} />
          <Route
            path="/eden/floor-plan"
            exact
            element={
              <FloorPlan title={title} descriptions={descriptions} />} />
          <Route
            path="/eden/location"
            exact
            element={
              <Location title={title} descriptions={descriptions} />} />
          <Route
            path="/eden/site-visit"
            exact
            element={
              <SiteVisit title={title} descriptions={descriptions} />} />
          <Route
            path="/eden/disclaimer"
            exact
            element={
              <Disclaimer title={title} descriptions={descriptions} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
