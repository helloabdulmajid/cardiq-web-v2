import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";

import CardDetailsPage from "./pages/CardDetailsPage";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />
        {/* <Route
         path="/cards/:slug"
          element={<CardDetailsPage />}
          /> */}

        <Route
          path="/cards/:cardName"
          element={<CardDetailsPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;