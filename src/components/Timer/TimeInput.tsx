import InputMask from 'react-input-mask';
import styles from '../../styles/timeInput.module.css';
import CSSModules from 'react-css-modules';
import { ChangeEvent } from 'react';

type PropsType = {
    value: string,
    disabled: boolean,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const TimerInput = ({ value, disabled, onChange }: PropsType) => {
    
    return (
        <>
            <InputMask value={value} disabled={disabled} onChange={onChange} maskChar="" styleName='time-input' mask="99:99" placeholder="00:00" />
        </>
    );
}

export default CSSModules(TimerInput, styles);