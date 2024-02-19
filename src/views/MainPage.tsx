import { Link } from "react-router-dom";
import RoutesEnum from "../models/RoutesEnum";
import styles from "../styles/mainPage.module.css";
import CSSModules from "react-css-modules";

const MainPage = () => {
    return (
        <>
            <h1 className="font-weight-300">Главная страница</h1>
            <section styleName="buttons">
                <Link to={RoutesEnum.Timer}>
                    <button>Таймер</button>
                </Link>
                <Link to={RoutesEnum.Palette}>
                    <button>Палитра</button>
                </Link>
            </section>
        </>
    );
}

export default CSSModules(MainPage, styles);