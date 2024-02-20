import CSSModules from "react-css-modules";
import TimeData from "../../models/TimeData";
import styles from "../../styles/timeIndicator.module.css"
import { useEffect, useRef } from "react";
import TimeConverter from "../../services/TimeConverter";

type PropsType = {
    time: TimeData | null,
    initialTime: string,
}

const TimeIndicator = ({ time, initialTime }: PropsType) => {

    const elementIndicator = useRef<HTMLDivElement>(null);

    const computeTimeString = (): string => {
        return time == null || time.isEmpty 
               ? "00:00" 
               : zeroConverter(time.minutes) + ":" + zeroConverter(time.seconds);
    }

    const zeroConverter = (value: number): string => {
        return value > 9 ? value.toString() : ("0" + value);
    }

    const updateIndicator = () => {
        elementIndicator.current!.style.width = computeIndicatorWidth() + "%";
    }

    const computeIndicatorWidth = () => {
        if(time == null || time.isEmpty) return 0;

        const initialTimeData = TimeConverter.convertToTimeData(initialTime);

        const timeInSecond = TimeConverter.convertToSecond(time);
        const initialTimeDataInSecond = TimeConverter.convertToSecond(initialTimeData);

        return timeInSecond / (initialTimeDataInSecond / 100);
    }

    useEffect(updateIndicator, [initialTime, time]);

    return (
        <div styleName="content">
            { computeTimeString() }
            <div styleName="background">
                <div styleName="indicator" ref={elementIndicator}></div>
            </div>
        </div>
    );
}

export default CSSModules(TimeIndicator, styles);