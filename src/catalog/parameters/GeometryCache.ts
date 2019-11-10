import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class GeometryCacheParam extends ResthopperParameter {

	public guid: string = "f91778ca-2700-42fc-8ee6-74049a2292b5";
	public name: string = "GeometryCache";
	public nickName: string = ""
	public description: string = "Bake or Load geometry to and from the Rhino document"
	public isOptional: boolean = false;
	public typeName: string = ""

	public isUserInput: boolean = false;
	public isUserOutput: boolean = false;

	public sources: string[] = [];
	public values: any[] = []

	constructor(value?: any) {
		super();
		this.values = [value!] ?? [];
		this.instanceGuid = newGuid();
	}

}