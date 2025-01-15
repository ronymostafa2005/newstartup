
//routs
import Router from "./routes";
//Teme
import ThemeProvider from "./theme/ThemeProvider";
import AlertComponent from "./Components/Alert";
import { RecoilRoot } from "recoil";
import '@fontsource/akaya-kanadaka'; // Weight defaults to regular

//-----------------------------------------------------

function App() {
  return (
    <>
      <ThemeProvider>
        <RecoilRoot>
          <Router />
          <AlertComponent />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
