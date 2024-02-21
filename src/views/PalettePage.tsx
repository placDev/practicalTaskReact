import CSSModules from "react-css-modules";
import styles from "../styles/palettePage.module.css"
import { useEffect, useRef } from "react";
import paletteStore from "../stores/paletteStore";
import { observer } from "mobx-react";
import Color from "../models/Color";

const PalettePage = () => {

    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const context = canvas!.current!.getContext("2d");

        if(context == null) return;

        context.lineCap = "round";
        context.lineWidth = 5;
        context.strokeStyle = "red";

        canvas!.current!.onmousemove = (event) => {
            const { offsetX, offsetY, movementX, movementY } = event;
       
            if (event.buttons > 0) {
              context.beginPath();
              context.moveTo(offsetX, offsetY);
              context.lineTo(offsetX - movementX, offsetY - movementY);
              context.stroke();
              context.closePath();
            }
        };
    }, []);

    const clearCanvas = () => {
        const context = canvas!.current!.getContext("2d");
        context?.clearRect(0, 0, canvas!.current!.width, canvas!.current!.height);
    }

    return (
        <>
            <h1 className="font-weight-300">Палитра (и не только)</h1>
            <section styleName="content">
                <div styleName="palette">
                    <div styleName="options">
                        <button onClick={() => paletteStore.addColor(new Color())}>Добавить</button>
                    </div>
                    <div styleName="colors">
                        {
                            paletteStore.colors.map((color) => {
                                return <div key={color.id} onClick={() => paletteStore.deleteColor(color.id)}>{ color.id } - { color.hex }</div>;
                            })
                        }
                    </div>
                </div>
                <div styleName="canvas">
                    <button styleName="clear" onClick={clearCanvas}>Очистить</button>
                    <canvas styleName="canvas-element" width="1000" height="500" ref={canvas}>Очень жаль, обновите браузер</canvas>
                </div>
            </section>
        </>
    );
};

//export default CSSModules(PalettePage, styles);

export default observer(CSSModules(PalettePage, styles));