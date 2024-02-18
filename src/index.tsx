import React from 'react';
import {createRoot} from "react-dom/client";
import '@/app/ui/style.scss'
import {App} from "@/app";

const node = document.getElementById('root');
if (node) createRoot(node).render(<App/>)
