export interface GrasshopperDocument {
    targets: string[];
    components: GrasshopperComponent[];
}

export interface GrasshopperComponent {
    name: string;
    guid: string;
    position: {
        x: number,
        y: number,
    };
    inputs: GrasshopperParameter[];
    outputs: GrasshopperParameter[];
}

export interface GrasshopperParameter {
    nickName: string;
    instanceGuid: string;
    sources: string[];
    typeName: string;
    values: GrasshopperValue[];
}

export interface GrasshopperValue {
    path: number[],
    value: any,
}