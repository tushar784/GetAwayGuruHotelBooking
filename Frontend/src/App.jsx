import { Suspense } from "react";
import Routing from "./Routes/Routing";
import Loading from "./components/Loading";

function App() {
  return (
    <>
    <Suspense fallback={Loading}>
      <Routing />
      </Suspense>
    </>
      
  );
}

export default App;
