// routes.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import APropos from "../components/aPropos/aPropos.js";
import Accueil from "../components/accueil/accueil.js";
import LocationDetail from "../components/locationDetail/locationDetail.js";
import NotFound from "../components/notFound/notFound";

const routerConfig = [
  {
    path: "/",
    element: <Accueil />,
  },
  {
    // Route paramétrée pour le détail du logement
    path: "/location/:id",
    element: <LocationDetail />,
  },
  {
    path: "/aPropos",
    element: <APropos />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routerConfig);
