import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { UserDefaultLayout, AuthenticationLayout } from "~/components/Layouts";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = route.layout;
            let MiniLayout = route.miniLayout;

            if (route.layout === null) {
              Layout = Fragment;
            }

            if (!route.miniLayout) {
              MiniLayout = Fragment;
            }

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <MiniLayout>
                      <Page />
                    </MiniLayout>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
