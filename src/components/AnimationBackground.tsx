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

// eslint-disable-next-line react-refresh/only-export-components
export default CSSModules(AnimationBackground, styles, { allowMultiple: true });