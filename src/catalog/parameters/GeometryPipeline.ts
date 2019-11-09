import ResthopperParameter from './../../models/ResthopperParameter';

export class GeometryPipelineParam extends ResthopperParameter {

	public guid: string = "b341e2e5-c4b3-49a3-b3a4-b4e6e2054516";
	public name: string = "GeometryPipeline";
	public nickName: string = "Pipeline"
	public description: string = "Defines a geometry pipeline from Rhino to Grasshopper"
	public isOptional: boolean = false;
	public typeName: string = ""

	public isUserInput: boolean = false;
	public isUserOutput: boolean = false;

	public sources: string[] = [];
	public values: any[] = []

	constructor(value?: any) {
		super();
		this.values = [value!] ?? [];
	}

}