import React from 'react';
import {createRoot} from "react-dom/client";
import '@/app/ui/style.scss'
import {App} from "@/app";
import {Provider} from "react-redux";
import {store} from "@/shared/store/store";

const node = document.getElementById('root');
if (!node) {
    throw new Error(`Node with id 'root' doesn't exist`)
}

createRoot(node)
    .render(
        <Provider store={store}>
            <App/>
        </Provider>
    )
