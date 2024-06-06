import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";
import privetRouter from "./privetRouter";

// create browser router
const router = createBrowserRouter([...publicRouter, ...privetRouter]);

// export router
export default router;
