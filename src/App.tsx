import { Route, Routes } from "react-router-dom";

import MainPage from "./views/MainPage";
import PageNotFound from "./views/PageNotFound";
import TimerPage from "./views/TimerPage";
import PalettePage from "./views/PalettePage";
import AnimationBackground from "./components/AnimationBackground";
import styles from "./styles/app.module.css";
import CSSModules from "react-css-modules";
import RoutesEnum from "./models/RoutesEnum";

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path={RoutesEnum.Timer} element={<TimerPage />} />
            <Route path={RoutesEnum.Palette} element={<PalettePage />} />
          </ Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <AnimationBackground />
      </main>
    </>
  )
}

export default CSSModules(App, styles, { allowMultiple: true });
