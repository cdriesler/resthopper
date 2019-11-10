import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class FieldParam extends ResthopperParameter {

	public guid: string = "3175e3eb-1ae0-4d0b-9395-53fd3e8f8a28";
	public name: string = "Field";
	public nickName: string = "Field"
	public description: string = "Contains a collection of vector fields"
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