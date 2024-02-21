import CSSModules from "react-css-modules";
import styles from "../styles/palettePage.module.css"
import paletteStore from "../stores/paletteStore";
import { observer } from "mobx-react";
import Color from "../models/Color";
import PaletteColor from "../components/Palette/PaletteColor";
import DrawingCanvas from "../components/Palette/DrawingCanvas";
import Popup from "../components/Popup";
import { useState } from "react";
import PopupProps from "../models/PopupProps";

const PalettePage = () => {
    
    const closePopupHandler = () => {
        setPopupProps({ 
            ...popupProps, visible: false
         })
    }

    const [ popupProps, setPopupProps ] = useState<PopupProps>({
        title: "",
        text: "",
        onClose: closePopupHandler,
        visible: false
    });

    const showColorsLimit = () => {
        setPopupProps({ 
            ...popupProps, 
            title: "Палитра заполненна", 
            text: "Больше цветов в палитру не поместится. Удалите или измените какой-либо из существующих цветов.",  
            visible: true
        })
    }

    const addColor = () => {
        if(paletteStore.colorsCount == 5) {
            showColorsLimit();
            return;
        }

        paletteStore.addColor(new Color());
    }
    
    return (
        <>
            <h1 className="font-weight-300">Палитра (и не только)</h1>
            <section styleName="content">
                <div styleName="palette">
                    <div styleName="options">
                        <button onClick={addColor}>Добавить</button>
                    </div>
                    <div styleName="colors">
                        {
                            paletteStore.colorsCount > 0
                            ? paletteStore.colors.map((color) => <PaletteColor key={color.id} color={color} />)
                            : <h3 styleName="colors-not-found">Цвета не добавленны</h3>
                        }
                    </div>
                </div>
                <DrawingCanvas />
                <Popup {...popupProps} />
            </section>
        </>
    );
};

export default observer(CSSModules(PalettePage, styles));