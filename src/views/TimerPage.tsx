import { ChangeEvent, useState } from "react";
import Popup from "../components/Popup";
import TimeIndicator from "../components/Timer/TimeIndicator";
import TimerInput from "../components/Timer/TimeInput";
import TimeConverter from "../services/TimeConverter";
import TimeData from "../models/TimeData";
import useTimer from "../hooks/useTimer";
import styles from "../styles/timerPage.module.css"
import CSSModule from "react-css-modules";

const TimerPage = () => {

    type PopupProps = {
        title: string,
        text: string,
        onClose: () => void,
        visible: boolean
    }

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

    const [ inputTimeValue, setInputTimeValue ] = useState<string>("");
    const [ initialTimeValue, setInitialTimeValue ] = useState<string>("");

    const [ currentValue, setCurrentValue ] = useState<TimeData | null>(null)
    const [ isActive, setIsActive ] = useState<boolean>(false)

    const updateCurrentValue = () => {
        if(currentValue == null) return;

        setCurrentValue(reduceCurrentTime(currentValue));

        if(currentValue.isEmpty && isActive) {
            showEndTimerPopup();
            clearTimer();
        }
    }

    const reduceCurrentTime = (time: TimeData): TimeData => {
        let { minutes, seconds } = time;

        if(seconds > 0) {
            seconds--;
        }

        if(seconds == 0 && minutes > 0) {
            minutes--;
            seconds = 60;
        }
        
        return new TimeData(minutes, seconds);
    }

    const showEndTimerPopup = () => {
        setPopupProps({ 
            ...popupProps, title: "Таймер завершен", text: "Таймер закончил свою работу. Вы можете запустить его вновь указав необходимое значение.",  visible: true
        })
    }

    const { start, stop } = useTimer(updateCurrentValue);

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTimeValue(event.target.value);
    }

    const timeDataIsValid = (value: TimeData): boolean => {
        if(value.isEmpty) {
            setPopupProps({ 
                ...popupProps, title: "Ошибка", text: "Данные таймера не заполненны",  visible: true
            })

            return false;
        }

        if(value.seconds > 60) {
            setPopupProps({ 
                ...popupProps, title: "Ошибка", text: "Недопустимое число секунд",  visible: true
            })

            return false;
        }

        return true;
    }

    const startTimer = () => {
        if(currentValue == null) {
            const timeData = TimeConverter.convertToTimeData(inputTimeValue);
            if(!timeDataIsValid(timeData)) return;

            setCurrentValue(timeData);
            setInitialTimeValue(inputTimeValue);
            setInputTimeValue("");
        }

        start();
        setIsActive(true);
    }

    const stopTimer = () => {
        stop();
        setIsActive(false);
    }

    const clearTimer = () => {
        stopTimer();
        setCurrentValue(null);
    }

    const computeDisabledTimerInput = (): boolean => {
        return isActive || (currentValue != null && !currentValue.isEmpty);
    }

    return (
        <>
            <h1 className="font-weight-300">Таймер</h1>
            <section styleName="content">
                <div>
                    <TimeIndicator time={currentValue} initialTime={initialTimeValue} />
                    <section styleName="buttons">
                        <TimerInput disabled={computeDisabledTimerInput()} value={inputTimeValue} onChange={inputChange}  />
                        { isActive 
                            ? (
                                <>
                                    <button styleName="pause" onClick={stopTimer}>Пауза</button>
                                    <button className="ml-2" onClick={clearTimer}>Остановить</button>
                                </>
                            )
                            : <button onClick={startTimer}>Запустить</button>
                        }
                    </section>
                </div>
            </section>
            <Popup {...popupProps} />
        </>
    );
}

export default CSSModule(TimerPage, styles);