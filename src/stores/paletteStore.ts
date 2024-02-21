import { makeAutoObservable } from "mobx";
import Color from "../models/Color";

class PaletteStore {
    colors = new Array<Color>();

    constructor() {
        makeAutoObservable(this);
    }

    addColor(item?: Color) {
        this.colors.push(item ?? new Color());
    }

    deleteColor(id: number) {
        this.colors = this.colors.filter(x => x.id != id);
    }
}

export default new PaletteStore();