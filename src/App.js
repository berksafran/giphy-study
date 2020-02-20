import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {
  Loading,
  Header,
  Container,
  ContentWrapper,
  Footer
} from "./components/";

// Theme and style files
import { ThemeProvider } from "styled-components";
import light from "./themes/light.js";
import dark from "./themes/dark.js";

import LocalStorage from "./services/LocalStorage";

// Pages with dynamic import
const Home = lazy(() => import("./pages/Home"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
    LocalStorage.setThemeToLS(!isLightTheme);
  };

  // Getting initial theme
  const getInitialTheme = async () => {
    const initialTheme = await LocalStorage.getThemeFromLS();
    await setIsLightTheme(initialTheme);
  };

  useEffect(() => {
    getInitialTheme();
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <ThemeProvider theme={isLightTheme ? light : dark}>
            <Container>
              <Header
                changeTheme={() => changeTheme()}
                isLightThemeAvailable={isLightTheme}
              />
              <ContentWrapper>
                <Switch>
                  <Route
                    path="/search/:searchKeyword"
                    component={props => <SearchResults {...props} />}
                  />
                  <Route path="/" exact component={() => <Home />} />

                  {/* If user go to wrong URL.. */}
                  <Route component={() => <ErrorPage />} />
                </Switch>
              </ContentWrapper>
              <Footer />
            </Container>
          </ThemeProvider>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
