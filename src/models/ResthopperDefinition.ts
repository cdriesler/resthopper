import ResthopperComponent from './ResthopperComponent';
import Parameter from './ResthopperParameter';
import ResthopperSchema from './ResthopperSchema';
import { newGuid } from '../utils/Guid';

export default class ResthopperDefinition {

    public components: ResthopperComponent[] = [];
    public parameters: Parameter[] = [];

    constructor() {

    }

    public toRequest(): ResthopperSchema {
        let req: ResthopperSchema = {
            algo: Buffer.from(this.compile()).toString('base64'),
            pointer: "",
            values: []
        }

        this.parameters.forEach(x => {
            if (!x.isUserInput) {
                return;
            }

            req.values.push({
                ParamName: `RH_IN:${x.nickName}`,
                InnerTree: {
                    "{ 0; }": [
                        {
                            type: "",
                            data: x.getValue()
                        }
                    ]
                },
                Keys: [ "{ 0; }" ],
                Values: [
                    {
                        type: "",
                        data: x.getValue()
                    }
                ]
            })
        });

        return req;
    }

    public compile(): string {
        // Begin ghx compilation
        let ghx = '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n<Archive name="Root">\n';

        // Declare archive version number
        ghx += this.compileArchiveVersion(1);
        ghx += "\n";

        // Begin definition markup compilation
        ghx += [
            '\t<chunks count="1">',
            '\t\t<chunk name="Definition">',
        ].join("\n");
        ghx += "\n";

        // Declare plugin version number
        ghx += this.compilePluginVersion(3);
        ghx += "\n";

        // Begin definition metadata markup compilation
        ghx += '\t\t\t<chunks count="5">\n';

        // Declare document header
        ghx += this.compileDocumentHeader(4);
        ghx += "\n";

        // Declare definition properties
        ghx += this.compileDefinitionProperties(4);
        ghx += "\n";
        
        // Declare rcp layout
        ghx += this.compileRcpLayout(4);
        ghx += "\n";

        // Declare external gha libraries
        ghx += this.compileLibraries(4);
        ghx += "\n";

        // Declare definition objects
        ghx += this.compileDefinitionObjects(4);
        ghx += "\n";

        // Finish definition metadata markup compilation
        ghx += '\t\t\t</chunks>\n';

        // Finish definition markup compilation
        ghx += [
            '\t\t</chunk>',
            '\t</chunks>',
        ].join("\n");
        ghx += "\n";
        
        // Finish ghx compilation
        ghx += '</Archive>'

        return ghx;
    }

    private getTabs(count: number): string {
        let t = "";

        for (let i = 0; i < count; i++) {
            t += "\t";
        }

        return t;
    }

    private compileArchiveVersion(tabs?: number): string {
        let t = this.getTabs(tabs ?? 0);

        const version = [
            `${t}<items count="1">`,
            `${t}\t<item name="ArchiveVersion" type_name="gh_version" type_code="80">`,
            `${t}\t\t<Major>0</Major>`,
            `${t}\t\t<Minor>2</Minor>`,
            `${t}\t\t<Revision>2</Revision>`,
            `${t}\t</item>`,
            `${t}</items>`,
        ].join('\n');

        return version;
    }

    private compilePluginVersion(tabs?: number): string {
        const t = this.getTabs(tabs ?? 0);

        const version = [
            `${t}<items count="1">`,
            `${t}\t<item name="plugin_version" type_name="gh_version" type_code="80">`,
            `${t}\t\t<Major>1</Major>`,
            `${t}\t\t<Minor>0</Minor>`,
            `${t}\t\t<Revision>7</Revision>`,
            `${t}\t</item>`,
            `${t}</items>`
        ].join("\n");

        return version;
    }

    private compileDocumentHeader(tabs?: number): string {
        const t = this.getTabs(4);

        const header = [
            `${t}<chunk name="DocumentHeader">`,
            `${t}\t<items count="5">`,
            `${t}\t\t<item name="DocumentID" type_name="gh_guid" type_code="9">${newGuid()}</item>`,
            `${t}\t\t<item name="Preview" type_name="gh_string" type_code="10">Shaded</item>`,
            `${t}\t\t<item name="PreviewMeshType" type_name="gh_int32" type_code="3">1</item>`,
            `${t}\t\t<item name="PreviewNormal" type_name="gh_drawing_color" type_code="36">`,
            `${t}\t\t\t<ARGB>100;150;0;0</ARGB>`,
            `${t}\t\t</item>`,
            `${t}\t\t<item name="PreviewSelected" type_name="gh_drawing_color" type_code="36">`,
            `${t}\t\t\t<ARGB>100;0;150;0</ARGB>`,
            `${t}\t\t</item>`,
            `${t}\t</items>`,
            `${t}</chunk>`
        ].join("\n");

        return header;
    }

    private compileDefinitionProperties(tabs?: number): string {
        const t = this.getTabs(tabs ?? 0);

        const props = [
            `${t}<chunk name="DefinitionProperties">`,
            `${t}\t<items count="3">`,
            `${t}\t\t<item name="Date" type_name="gh_date" type_code="8">637083144191011112</item>`,
            `${t}\t\t<item name="Description" type_name="gh_string" type_code="10"></item>`,
            `${t}\t\t<item name="Name" type_name="gh_string" type_code="10">resthopper.ghx</item>`,
            `${t}\t</items>`,
            `${t}\t<chunks count="3">`,
            `${t}\t\t<chunk name="Revisions">`,
            `${t}\t\t\t<items count="1">`,
            `${t}\t\t\t\t<item name="RevisionCount" type_name="gh_int32" type_code="3">0</item>`,
            `${t}\t\t\t</items>`,
            `${t}\t\t</chunk>`,
            `${t}\t\t<chunk name="Projection">`,
            `${t}\t\t\t<items count="2">`,
            `${t}\t\t\t\t<item name="Target" type_name="gh_drawing_point" type_code="30">`,
            `${t}\t\t\t\t\t<X>10</X>`,
            `${t}\t\t\t\t\t<Y>10</Y>`,
            `${t}\t\t\t\t</item>`,
            `${t}\t\t\t\t<item name="Zoom" type_name="gh_single" type_code="5">1</item>`,
            `${t}\t\t\t</items>`,
            `${t}\t\t</chunk>`,
            `${t}\t\t<chunk name="Views">`,
            `${t}\t\t\t<items count="1">`,
            `${t}\t\t\t\t<item name="ViewCount" type_name="gh_int32" type_code="3">0</item>`,
            `${t}\t\t\t</items>`,
            `${t}\t\t</chunk>`,
            `${t}\t</chunks>`,
            `${t}</chunk>`
        ].join("\n");

        return props;
    }

    private compileRcpLayout(tabs?: number): string {
        const t = this.getTabs(tabs ?? 0);

        const rcp = [
            `${t}<chunk name="RcpLayout">`,
            `${t}\t<items count="1">`,
            `${t}\t\t<item name="GroupCount" type_name="gh_int32" type_code="3">0</item>`,
            `${t}\t</items>`,
            `${t}</chunk>`
        ].join("\n");

        return rcp;
    }

    private compileLibraries(tabs?: number): string {
        const t = this.getTabs(tabs ?? 0);

        const libraries = [
            `${t}<chunk name="GHALibraries">`,
            `${t}\t<items count="1">`,
            `${t}\t\t<item name="Count" type_name="gh_int32" type_code="3">0</item>`,
            `${t}\t</items>`,
            `${t}</chunk>`
        ].join("\n");

        return libraries;
    }

    private getObjectCount(): number {
        return this.components.length + this.parameters.length + this.parameters.filter(x => x.isUserInput || x.isUserOutput).length;
    }

    private compileDefinitionObjects(tabs?: number): string {
        const t = this.getTabs(tabs ?? 0);
        const objectCount = this.getObjectCount();

        let objects = [
            `${t}<chunk name="DefinitionObjects">`,
            `${t}\t<items count="1">`,
            `${t}\t\t<item name="ObjectCount" type_name="gh_int32" type_code="3">${objectCount}</item>`,
            `${t}\t</items>`,
            `${t}\t<chunks count="${objectCount}">`
        ].join("\n");

        objects += "\n";

        // Iterate through components, params, and groups
        let i = 0;

        this.parameters.forEach(p => {
            if (p.isUserInput || p.isUserOutput) {
                objects += this.compileGroup(this.getTabs(6), i, p);
                objects += "\n";
                i += 1;
            }

            objects += this.compileParameter(this.getTabs(6), i, p);
            objects += "\n";
            i += 1;
        });

        this.components.forEach(c => {
            objects += this.compileComponent(this.getTabs(6), i, c);
            objects += "\n";
            i += 1;
        });

        objects += [
            `${t}\t</chunks>`,
            `${t}</chunk>`
        ].join("\n");

        return objects;
    }

    private compileGroup(t: string, i: number, param: Parameter): string {
        const g = [
            `${t}<chunk name="Object" index="${i}">`,
            `${t}\t<items count="2">`,
            `${t}\t\t<item name="GUID" type_name="gh_guid" type_code="9">c552a431-af5b-46a9-a8a4-0fcbc27ef596</item>`,
            `${t}\t\t<item name="Name" type_name="gh_string" type_code="10">Group</item>`,
            `${t}\t</items>`,
            `${t}\t<chunks count="1">`,
            `${t}\t\t<chunk name="Container">`,
            `${t}\t\t\t<items count="8">`,
            `${t}\t\t\t\t<item name="Border" type_name="gh_int32" type_code="3">1</item>`,
            `${t}\t\t\t\t<item name="Colour" type_name="gh_drawing_color" type_code="36">`,
            `${t}\t\t\t\t\t<ARGB>150;170;135;255</ARGB>`,
            `${t}\t\t\t\t</item>`,
            `${t}\t\t\t\t<item name="ID" index="0" type_name="gh_guid" type_code="9">${param.instanceGuid}</item>`,
            `${t}\t\t\t\t<item name="ID_Count" type_name="gh_int32" type_code="3">1</item>`,
            `${t}\t\t\t\t<item name="InstanceGuid" type_name="gh_guid" type_code="9">${newGuid()}</item>`,
            `${t}\t\t\t\t<item name="Name" type_name="gh_string" type_code="10">Group</item>`,
            `${t}\t\t\t\t<item name="NickName" type_name="gh_string" type_code="10">${param.isUserInput ? 'RH_IN' : 'RH_OUT'}:${param.nickName}</item>`,
            `${t}\t\t\t</items>`,
            `${t}\t\t\t<chunks count="1">`,
            `${t}\t\t\t\t<chunk name="Attributes" />`,
            `${t}\t\t\t</chunks>`,
            `${t}\t\t</chunk>`,
            `${t}\t</chunks>`,
            `${t}</chunk>`
        ].join("\n");

        return g;
    }

    private compileParameter(t: string, i: number, param: Parameter): string {
        let p = [
            `${t}<chunk name="Object" index="${i}">`,
            `${t}\t<items count="2">`,
            `${t}\t\t<item name="GUID" type_name="gh_guid" type_code="9">${param.guid}</item>`,
            `${t}\t\t<item name="Name" type_name="gh_string" type_code="10">${param.name}</item>`,
            `${t}\t</items>`,
            `${t}\t<chunks count="1">`,
            `${t}\t\t<chunk name="Container">`,
            `${t}\t\t\t<items count="7">`,
            `${t}\t\t\t\t<item name="InstanceGuid" type_name="gh_guid" type_code="9">${param.instanceGuid}</item>`,
            `${t}\t\t\t\t<item name="Optional" type_name="gh_bool" type_code="1">false</item>`,
            param.sources.length > 0 ? `${t}\t\t\t\t<item name="Source" index="0" type_name="gh_guid" type_code="9">${param.sources[0]}</item>` : "",
            `${t}\t\t\t\t<item name="SourceCount" type_name="gh_int32" type_code="3">${param.sources.length}</item>`,
            `${t}\t\t\t</items>`,
            `${t}\t\t\t<chunks count="1">`,
            `${t}\t\t\t\t<chunk name="Attributes" />`,
            `${t}\t\t\t</chunks>`,
            `${t}\t\t</chunk>`,
            `${t}\t</chunks>`,
            `${t}</chunk>`
        ].join("\n");

        return p;
    }

    private compileComponent(t: string, i: number, c: ResthopperComponent): string {
        let component = [
            `${t}<chunk name="Object" index="${i}">`,
            `${t}\t<items count="2">`,
            `${t}\t\t<item name="GUID" type_name="gh_guid" type_code="9">${c.guid}</item>`,
            `${t}\t\t<item name="Name" type_name="gh_string" type_code="10">${c.name}</item>`,
            `${t}\t</items>`,
            `${t}\t<chunks count="1">`,
            `${t}\t\t<chunk name="Container">`,
            `${t}\t\t\t<items count="1">`,
            `${t}\t\t\t\t<item name="InstanceGuid" type_name="gh_guid" type_code="9">${newGuid()}</item>`,
            `${t}\t\t\t</items>`,
            `${t}\t\t\t<chunks count="2">`,
            `${t}\t\t\t\t<chunk name="Attributes" />`,
        ];

        if (c.isVariable) {
            component = component.concat([
                `${t}\t\t\t\t<chunk name="ParameterData">`,
                `${t}\t\t\t\t\t<items count="${c.getInputCount() + c.getOutputCount() + 2}">`,
            ])

            // Compile top-level input and output ids
            const paramGuid = newGuid();

            component.push(`${t}\t\t\t\t\t\t<item name="InputCount" type_name="gh_int32" type_code="3">${c.getInputCount()}</item>`);
            for(let j = 0; j < c.getInputCount(); j++) {
                component.push(`${t}\t\t\t\t\t\t<item name="InputId" index="${j}" type_name="gh_guid" type_code="9">${paramGuid}</item>`);
            }

            component.push(`${t}\t\t\t\t\t\t<item name="OutputCount" type_name="gh_int32" type_code="3">${c.getOutputCount()}</item>`);
            for(let j = 0; j < c.getOutputCount(); j++) {
                component.push(`${t}\t\t\t\t\t\t<item name="OutputId" index="${j}" type_name="gh_guid" type_code="9">${paramGuid}</item>`);
            }

            // Compile inputs and outputs
            component = component.concat([
                `${t}\t\t\t\t\t</items>`,
                `${t}\t\t\t\t\t<chunks count="${c.getInputCount() + c.getOutputCount()}">`
            ]);

            const tabs = this.getTabs(12);

            // Compile inputs and their sources
            for(let j = 0; j < c.getInputCount(); j++) {
                const input = c.getInputByIndex(j);

                if (input == undefined) {
                    continue;
                }

                component = component.concat([
                    `${tabs}<chunk name="InputParam" index="${j}">`,
                    `${tabs}\t<items count="4">`,
                    `${tabs}\t\t<item name="InstanceGuid" type_name="gh_guid" type_code="9">${input.instanceGuid}</item>`,
                    `${tabs}\t\t<item name="Optional" type_name="gh_bool" type_code="1">${input.isOptional}</item>`,
                    input.sources.length > 0 ? `${tabs}\t\t<item name="Source" index="0" type_name="gh_guid" type_code="9">${input.sources[0]}</item>` : "",
                    `${tabs}\t\t<item name="SourceCount" type_name="gh_int32" type_code="3">${input.sources.length}</item>`,
                    `${tabs}\t</items>`,
                    `${tabs}\t<chunks count="1">`,
                    `${tabs}\t\t<chunk name="Attributes" />`,
                    `${tabs}\t</chunks>`,
                    `${tabs}</chunk>`
                ]);
            }

            // Compile outputs with empty sources
            for(let j = 0; j < c.getOutputCount(); j++) {
                const output = c.getOutputByIndex(j);

                if (output == undefined) {
                    continue;
                }

                component = component.concat([
                    `${tabs}<chunk name="OutputParam" index="${j}">`,
                    `${tabs}\t<items count="3">`,
                    `${tabs}\t\t<item name="InstanceGuid" type_name="gh_guid" type_code="9">${output.instanceGuid}</item>`,
                    `${tabs}\t\t<item name="Optional" type_name="gh_bool" type_code="1">false</item>`,
                    `${tabs}\t\t<item name="SourceCount" type_name="gh_int32" type_code="3">0</item>`,
                    `${tabs}\t</items>`,
                    `${tabs}\t<chunks count="1">`,
                    `${tabs}\t\t<chunk name="Attributes" />`,
                    `${tabs}\t</chunks>`,
                    `${tabs}</chunk>`
                ]);
            }

            component = component.concat([
                `${t}\t\t\t\t\t</chunks>`,
                `${t}\t\t\t\t</chunk>`,
            ]);
        }
        else {
            const tabs = this.getTabs(10);

            for(let j = 0; j < c.getInputCount(); j++) {
                
                const input = c.getInputByIndex(j);

                if (input == undefined) {
                    continue;
                }

                component = component.concat([
                    `${tabs}<chunk name="param_input" index="${j}">`,
                    `${tabs}\t<items count="4">`,
                    `${tabs}\t\t<item name="InstanceGuid" type_name="gh_guid" type_code="9">${input.instanceGuid}</item>`,
                    `${tabs}\t\t<item name="Optional" type_name="gh_bool" type_code="1">${input.isOptional}</item>`,
                    input.sources.length > 0 ? `${tabs}\t\t<item name="Source" index="0" type_name="gh_guid" type_code="9">${input.sources[0]}</item>` : "",
                    `${tabs}\t\t<item name="SourceCount" type_name="gh_int32" type_code="3">${input.sources.length}</item>`,
                    `${tabs}\t</items>`,
                    `${tabs}\t<chunks count="1">`,
                    `${tabs}\t\t<chunk name="Attributes" />`,
                    `${tabs}\t</chunks>`,
                    `${tabs}</chunk>`
                ]);
            }

            for(let j = 0; j < c.getOutputCount(); j++) {
                const output = c.getOutputByIndex(j);

                if (output == undefined) {
                    continue;
                }

                component = component.concat([
                    `${tabs}<chunk name="param_output" index="${j}">`,
                    `${tabs}\t<items count="3">`,
                    `${tabs}\t\t<item name="InstanceGuid" type_name="gh_guid" type_code="9">${output.instanceGuid}</item>`,
                    `${tabs}\t\t<item name="Optional" type_name="gh_bool" type_code="1">false</item>`,
                    `${tabs}\t\t<item name="SourceCount" type_name="gh_int32" type_code="3">0</item>`,
                    `${tabs}\t</items>`,
                    `${tabs}\t<chunks count="1">`,
                    `${tabs}\t\t<chunk name="Attributes" />`,
                    `${tabs}\t</chunks>`,
                    `${tabs}</chunk>`
                ]);
            }
        }

        // Finish component compilation
        component = component.concat([
            `${t}\t\t\t</chunks>`,
            `${t}\t\t</chunk>`,
            `${t}\t</chunks>`,
            `${t}</chunk>`
        ])

        return component.join("\n");
    }
}