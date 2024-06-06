import PageLayouts from "../components/PageLayouts/PageLayouts";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/users/Users";

// create privet router
const privetRouter = [
  {
    element: <PageLayouts />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/users",
        element: <Users />
      }
    ]
  }
];

// export router
export default privetRouter;
