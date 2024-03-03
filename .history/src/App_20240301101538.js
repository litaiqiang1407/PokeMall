import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { UserDefaultLayout } from "~/components/Layouts";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout =
              route.layout === "UserDefaultLayout" ? UserDefaultLayout : null;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <UserDefaultLayout>
                    <Page />
                  </UserDefaultLayout>
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
