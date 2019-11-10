import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class GroupParam extends ResthopperParameter {

	public guid: string = "b0851fc0-ab55-47d8-bdda-cc6306a40176";
	public name: string = "Group";
	public nickName: string = "Grp"
	public description: string = "Contains a collection of geometric groups"
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