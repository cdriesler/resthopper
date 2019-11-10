import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class BooleanParam extends ResthopperParameter {

	public guid: string = "cb95db89-6165-43b6-9c41-5702bc5bf137";
	public name: string = "Boolean";
	public nickName: string = "Bool"
	public description: string = "Contains a collection of boolean values"
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