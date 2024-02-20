class TimeData {
    constructor(minutes?: number, seconds?: number) {
        this.minutes = minutes ?? 0;
        this.seconds = seconds ?? 0;
    }

    minutes: number;
    seconds: number;

    get isEmpty(): boolean {
        return this.minutes == 0 && this.seconds == 0;
    } 
}

export default TimeData;