import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, About, Events, Gallery, Team, EventDetails } from './pages'
    ;
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "events",
        element: <Events />,
        children: [
            {
                path: ":id",
                element: <EventDetails />
            }
        ]
    },
    {
        path: "gallery",
        element: <Gallery />
    },
    {
        path: "team",
        element: <Team />
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;