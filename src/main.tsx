import React from 'react'
import ReactDOM from 'react-dom/client'

import { ParallelProvider } from "@parallelmarkets/react";
import { type ParallelConfig, loadParallel } from "@parallelmarkets/vanilla";


import { ConnectionDetails } from "./App";

const PARALLEL_CONFIG: ParallelConfig = {
  flow_type: "overlay",
  show_dismiss_button: true,
  client_id: "llf-KUkJA9rn_SCQreft2",
  scopes: ["accreditation_status", "identity", "profile"],
  environment: "demo",
};

const parallel = loadParallel(PARALLEL_CONFIG);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ParallelProvider parallel={parallel}>
    <ConnectionDetails />
  </ParallelProvider>
  </React.StrictMode>,
)
