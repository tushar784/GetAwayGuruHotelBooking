import { Suspense } from "react";
import Routing from "./Routes/Routing";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Suspense fallback={Loading}>
      <Routing />
      <Footer />
      </Suspense>
    </>
      
  );
}

export default App;
