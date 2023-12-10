import AuthLayout from "@/layouts/AuthLayout"
import RootLayout from "@/layouts/RootLayout"
import { AirportTaxis, Attractions, CarRentals, Flights, Home, Login, Register } from "@/pages"
import { useRoutes } from "react-router-dom"

const Routes = () => {
  const element = useRoutes([
    {
      path: 'auth',
      element: <AuthLayout/>,
      children: [
        {
          path: 'register',
          element: <Register/>
        },
        {
          path: 'login',
          element: <Login/>
        },
      ]
    },
    {
      path: '',
      element: <RootLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'flights',
          element: <Flights/>
        },
        {
          path: 'car-rentals',
          element: <CarRentals/>
        },
        {
          path: 'attractions',
          element: <Attractions/>
        },
        {
          path: 'airport-taxis',
          element: <AirportTaxis/>
        },
      ]
    },
  ])

  return element
}

export default Routes