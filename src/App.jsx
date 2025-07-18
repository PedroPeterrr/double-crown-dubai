
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy  } from "react";

const Home = lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <Router>
      <Suspense fallback="Loading..">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;