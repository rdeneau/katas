
export abstract class TypeEntreprise {
    abstract getTauxImposition(): number;
}

export class AutoEntreprise extends TypeEntreprise {
    getTauxImposition(): number {
        return 25 / 100;
    }
}

export class SASEntreprise extends TypeEntreprise {
    getTauxImposition(): number {
        return 33 / 100;
    }
}

export function calculerImpots(CA: number, typeEntreprise: TypeEntreprise): number {
    return CA * typeEntreprise.getTauxImposition();
}
