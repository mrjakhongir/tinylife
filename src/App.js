import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";

import About from "./pages/About";
import Home from "./pages/Home";
import Houses, { loader as housesLoader } from "./pages/houses/Houses";
import HouseDetail, {
  loader as houseDetailLoader,
} from "./pages/houses/HouseDetail";
import NotFound from "./pages/NotFound";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import Dashboard from "./pages/host/Dashboard";
import HostHouses, {
  loader as hostHousesLoader,
} from "./pages/host/HostHouses";
import HostHouseDetail, {
  loader as hostHouseDetailLoader,
} from "./pages/host/HostHouseDetail";
import HostHouseInfo from "./pages/host/HostHouseInfo";
import HostHousePricing from "./pages/host/HostHousePricing";
import HostHousePhotos from "./pages/host/HostHousePhotos";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="houses" element={<Houses />} loader={housesLoader} />
      <Route
        path="houses/:id"
        element={<HouseDetail />}
        loader={houseDetailLoader}
      />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
        />
        <Route
          path="houses"
          element={<HostHouses />}
          loader={hostHousesLoader}
        />
        <Route
          path="houses/:id"
          element={<HostHouseDetail />}
          loader={hostHouseDetailLoader}
        >
          <Route
            index
            element={<HostHouseInfo />}
            loader={async ({ request }) => {
              await requireAuth(request);
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostHousePricing />}
            loader={async ({ request }) => {
              await requireAuth(request);
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostHousePhotos />}
            loader={async ({ request }) => {
              await requireAuth(request);
              return null;
            }}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
