import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Header,
    MenuPage,
    SelectionPage,
    AboutPage
} from './App';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import "./Assets/sass/default.sass";
import { Provider } from 'react-redux';
import { setupStore } from './store/store';


const Page: (props: { component: JSX.Element }) => JSX.Element = (props) => {
    const { component } = props;
    return (
        <>
            <Header />
            {component}
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page component={<MenuPage />} />,
    },
    {
        path: "/selection",
        element: (<Page component={<SelectionPage />} />),
    },
    {
        path: "/about",
        element: (<Page component={<AboutPage />} />),
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = setupStore();
root.render(
    <Provider store={store}>
        <div className="App">
            <RouterProvider router={router} />
        </div>
    </Provider>
);
