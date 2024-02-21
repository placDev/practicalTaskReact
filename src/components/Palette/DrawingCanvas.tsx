import { useEffect, useRef } from "react";
import styles from "../../styles/drawingCanvas.module.css";
import paletteStore from "../../stores/paletteStore";
import CSSModules from 'react-css-modules';
import { observer } from "mobx-react";

const DrawingCanvas = () => {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const context = canvas!.current!.getContext("2d");

        if(context == null) return;

        context.lineCap = "round";
        context.lineWidth = 5;

        canvas!.current!.onmousemove = (event) => {
            context.strokeStyle = paletteStore.selectedСolorValue;

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
        <div styleName="canvas">
            <button styleName="clear" onClick={clearCanvas}>Очистить</button>
            <canvas styleName="canvas-element" width="1000" height="500" ref={canvas}>Очень жаль, обновите браузер</canvas>
        </div>
    )
}

export default observer(CSSModules(DrawingCanvas, styles));