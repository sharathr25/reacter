import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookPage from "./pages/Book";
import ColorGuess from "./pages/ColorGuess";
import CircleMarker from "./pages/CircleMarker";
import MemoryGame from "./pages/MemoryGame";
import FileStructure from "./pages/FileStructure";
import Wordle from "./pages/Wordle";
import SnakeGame from "./pages/SnakeGame";
import Hooks from "./pages/Hooks";
import EventCapture from "./pages/EventCapture";
import EventBubble from "./pages/EventBubble";

import "./index.module.scss";

const routes = [
  {
    path: "/books",
    element: <BookPage />
  },
  {
    path: "/color-guess",
    element: <ColorGuess />,
  },
  {
    path: "/circle-marker",
    element: <CircleMarker />,
  },
  {
    path: "/memory-game",
    element: <MemoryGame />,
  },
  {
    path: "/file-structure",
    element: <FileStructure />,
  },
  {
    path: "/wordle",
    element: <Wordle />,
  },
  {
    path: "/snake-game",
    element: <SnakeGame />,
  },
  {
    path: '/hooks',
    element: <Hooks />,
  },
  {
    path: '/event-capture',
    element: <EventCapture />,
  },
  {
    path: '/event-bubble',
    element: <EventBubble />,
  }
]

routes.push({ path: '/', element: <Home routes={routes.map(r => r.path)}/>})

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
