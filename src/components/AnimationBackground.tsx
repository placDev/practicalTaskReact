import CSSModules from 'react-css-modules';
import styles from '../styles/animationBackground.module.css';

const AnimationBackground = () => {
    return (
    <div>
        <ul styleName="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    );
}

export default CSSModules(AnimationBackground, styles, { allowMultiple: true });