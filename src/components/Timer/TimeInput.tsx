import InputMask from 'react-input-mask';
import styles from '../../styles/timeInput.module.css';
import CSSModules from 'react-css-modules';

const TimerInput = () => {
    return (
        <>
            <InputMask styleName='time-input' mask="99:99" placeholder="00:00" />
        </>
    );
}

export default CSSModules(TimerInput, styles);