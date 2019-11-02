export default class Definition {

    constructor() {

    }

    public compile(): string {
        // Begin ghx compilation
        let ghx = '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n\n<Archive name="Root">\n\n';

        // Declare version number
        ghx += [
            '<items count="1">',
            '<item name="ArchiveVersion" type_name="gh_version" type_code="80">',
            '<Major>0</Major>',
            '<Minor>2</Minor>',
            '<Revision>2</Revision>',
            '</item>',
            '</items>'
        ].join('\n');
        
        // Finish ghx compilation
        ghx += '\n\n</Archive>'

        return ghx;
    }

    private getTabs(count: number): string {
        let t = "";

        for (let i = 0; i < count; i++) {
            t += "\t";
        }

        return t;
    }

    private compileVersion(tabs?: number): string {
        let version = "";
        let t = this.getTabs(tabs ?? 0);

        return version;
    }
}