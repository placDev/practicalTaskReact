import CSSModules from "react-css-modules";
import styles from "../styles/popup.module.css";

type PropsType = {
    title: string,
    text: string,
    visible: boolean,
    onClose: () => void,
}

const Popup = ({ title, text, visible, onClose }: PropsType) => {
    return visible && (
        <>
            <div styleName="overlay"></div>
            <section styleName="window">
                <div styleName="title">{ title }</div>
                <div styleName="text">{ text }</div>
                <div styleName="buttons">
                    <button onClick={onClose}>Закрыть</button>
                </div>
            </section>
        </>
    );
}

export default CSSModules(Popup, styles);