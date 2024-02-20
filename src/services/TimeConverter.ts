import TimeData from "../models/TimeData";

export default {
    convertToTimeData(value: string): TimeData {
        const result = value.split(":").map(x => Number(x.trim()));
        
        return new TimeData(result[0], result[1]);
    },

    convertToSecond(value: TimeData): number {
        return (value.minutes * 60) + value.seconds;
    }
}