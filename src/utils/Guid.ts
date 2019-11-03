// Snippet shared by StackOverflow user Fenton
// https://stackoverflow.com/questions/26501688/a-typescript-guid-class

export function newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
}

interface GrasshopperObjectTable {
    [name: string]: { guid: string }
}

export const grasshopperObjectTable: GrasshopperObjectTable = {
    "Group": { guid: "c552a431-af5b-46a9-a8a4-0fcbc27ef596" },
    "Number": { guid: "3e8ca6be-fda8-4aaf-b5c0-3c54c8bb7312" },
    "Multiplication": { guid: "ce46b74e-00c9-43c4-805a-193b69ea4a11" }
}