import { observer } from "mobx-react";
import Color from "../../models/Color";
import styles from "../../styles/paletteColor.module.css";
import CSSModules from 'react-css-modules';
import paletteStore from "../../stores/paletteStore";
import { ChangeEvent, MouseEvent, useState } from "react";

type PropsType = {
    color: Color,
}

const PaletteColor = ({ color }: PropsType) => {

    const [isHovered, setIsHovered] = useState(false);
    
    const update = (event: ChangeEvent<HTMLInputElement>) => {
        paletteStore.update(color.id, event.target.value);
    }

    const setSelected = (event: MouseEvent<HTMLInputElement>) => {
        paletteStore.update(color.id, event.target.value);
        paletteStore.setSelectedColor(color.id);
    }

    const isSelected = (): boolean => {
        return color.id == paletteStore.selectedСolor?.id;
    }

    const deleteColor = () => {
        paletteStore.deleteColor(color.id);
    }

    const computeBackground = (): string => {
        return isSelected() ? "#4bd33fb8" : "#ffffff00";
    }

    return (
        <section 
            styleName="wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <input 
                styleName="body" 
                style={{ background: computeBackground() }} 
                onClick={setSelected} 
                type="color" 
                onChange={update}
            />
            { isHovered && <div styleName="close" onClick={deleteColor}>x</div> }
        </section>
    );
}

export default observer(CSSModules(PaletteColor, styles));