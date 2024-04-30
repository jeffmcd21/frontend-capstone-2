
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import App from "./App"
  import Show from "./pages/Show";
  import Landing from "./pages/Index";
  import { menuLoader, menusLoader} from "./loaders";
  import { updateAction, createAction, deleteAction } from "./actions";

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path="" element={<Landing />} loader={menuLoader}/>
    <Route path=":id" element={<Show />} loader={menusLoader}/>
    <Route path="create" action={createAction}/>
    <Route path="update/:id" action={updateAction}/>
    <Route path="delete/:id" action={deleteAction}/>


    
    </Route>
    )
  )
  
  export default router;