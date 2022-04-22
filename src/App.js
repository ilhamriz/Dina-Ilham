import { lazy, Suspense, useEffect, useState } from "react";
import "./App.scss";
import { Prokes } from "./components/Dialog";
import { Loading, ScrollToTop } from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const Main = lazy(() => import("./pages/Main"));

function App() {
  const [isProkes, setIsProkes] = useState(true);
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    const { innerWidth } = window;
    setIsTablet(innerWidth < 769 ? true : false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: isTablet ? 100 : 0,
      once: true,
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTablet])

  return (
    <>
      <header>
        <h1 className="hidden">DINAILHAM</h1>
      </header>
      {/* <Prokes open={isProkes} setOpen={setIsProkes} /> */}

      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
