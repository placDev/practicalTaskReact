import CSSModules from "react-css-modules";
import styles from "../styles/palettePage.module.css"
import { useRef } from "react";
const PalettePage = () => {

    const canvas = useRef<HTMLCanvasElement>(null);

    return (
        <>
            <h1 className="font-weight-300">Палитра (и не только)</h1>
            <section styleName="content">
                <div styleName="palette"></div>
                <div styleName="canvas">
                    <canvas styleName="canvas-element" ref={canvas}>Очень жаль, обновите браузер</canvas>
                </div>
            </section>
        </>
    );
}

export default CSSModules(PalettePage, styles);