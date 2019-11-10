import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class BoxParam extends ResthopperParameter {

	public guid: string = "c9482db6-bea9-448d-98ff-fed6d69a8efc";
	public name: string = "Box";
	public nickName: string = "Box"
	public description: string = "Contains a collection of boxes"
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