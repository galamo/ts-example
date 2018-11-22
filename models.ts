export class Building {

    constructor(public floors: number, public height: number, public name: string) {
        this.floors = floors;
        this.height = height;
        this.name = name;
    }
}

interface Structure {
    rooms: number;
    addRoom(): void;
}

export class Villa extends Building implements Structure {
    constructor(public rooms: number, public gardenArea: number, public floors: number, public height: number, public name: string) {
        super(floors, height, name);
        this.gardenArea = gardenArea;
        this.rooms = rooms;
    }

    addRoom() {
        this.rooms++;
    }
}

export let someProp: string = "test";