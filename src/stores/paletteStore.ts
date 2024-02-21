import { makeAutoObservable } from "mobx";
import Color from "../models/Color";

class PaletteStore {
    colors = new Array<Color>();
    selectedСolor: Color | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    addColor(item?: Color) {
        this.colors.push(item ?? new Color());
    }

    deleteColor(id: number) {
        this.colors = this.colors.filter(x => x.id != id);
    }

    update(id: number, hexValue: string) {
        const color = this.colors.find(x => x.id == id);
        color!.hex = hexValue;
    }

    setSelectedColor(id: number) {
        const color = this.colors.find(x => x.id == id) as Color;
        this.selectedСolor = color;
    }

    get selectedСolorValue(): string {
        return this.selectedСolor == null ? "#000000" : this.selectedСolor.hex;
    }

    get colorsCount(): number {
        return this.colors.length;
    }
}

export default new PaletteStore();