import { Header } from "./components";
import { PortalAccess } from "./pages";
function App(){
  return(
    <>
      <Header/>
      <main id="container" className="px-xl py-xl">
        <PortalAccess/>
      </main>
    </>
  )
}
export default App;