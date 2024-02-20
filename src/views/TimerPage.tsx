import { ChangeEvent, useState } from "react";
import Popup from "../components/Popup";
import TimeIndicator from "../components/Timer/TimeIndicator";
import TimerInput from "../components/Timer/TimeInput";
import TimeConverter from "../services/TimeConverter";
import TimeData from "../models/TimeData";

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

    const [ timerValue, setTimerValue ] = useState<string>("");

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTimerValue(event.target.value);
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
        const timeData = TimeConverter.convertToTimeData(timerValue);

        if(!timeDataIsValid(timeData)) return;

        console.log(timeData);

        setTimerValue("");
    }

    return (
        <>
            <h1 className="font-weight-300">Таймер</h1>
            <section styleName="content">
                <TimeIndicator />
                <div styleName="form">
                    <TimerInput value={timerValue} onChange={inputChange}  />
                    <button onClick={startTimer}>Запустить</button>
                </div>
            </section>
            <Popup {...popupProps} />
        </>
    );
}

export default TimerPage;