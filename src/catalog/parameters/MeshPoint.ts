import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class MeshPointParam extends ResthopperParameter {

	public guid: string = "fa20fe95-5775-417b-92ff-b77c13cbf40c";
	public name: string = "MeshPoint";
	public nickName: string = "MPoint"
	public description: string = "Contains a collection of mesh points"
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