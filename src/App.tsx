import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import Global_Style from "./components/Global_Style"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <Global_Style />
    </QueryClientProvider>

  )
}

export default App
