import Popup from "../components/Popup";
import TimeIndicator from "../components/Timer/TimeIndicator";
import TimerInput from "../components/Timer/TimeInput";

const TimerPage = () => {

    const popupCloseHandler = () => {
        alert();
    }

    return (
        <>
            <h1 className="font-weight-300">Таймер</h1>
            <section styleName="content">
                <TimeIndicator />
                <div styleName="form">
                    <TimerInput />
                    <button>Запустить</button>
                </div>
            </section>
            <Popup title="123" text="321" onClose={popupCloseHandler} visible={true} />
        </>
    );
}

export default TimerPage;