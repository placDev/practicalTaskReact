class Color {
    constructor(id?: number, hex?: string) {
        this.id = id ?? Date.now();
        this.hex = hex ?? "#FFF";
    }

    id: number;
    hex: string;
}

export default Color;