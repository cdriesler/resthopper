import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class GuidParam extends ResthopperParameter {

	public guid: string = "faf6e3bb-4c84-4cbf-bd88-6d6a0db5667a";
	public name: string = "Guid";
	public nickName: string = "ID"
	public description: string = "Contains a collection of Globally Unique Identifiers"
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