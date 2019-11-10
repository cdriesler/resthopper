import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class DataParam extends ResthopperParameter {

	public guid: string = "8ec86459-bf01-4409-baee-174d0d2b13d0";
	public name: string = "Data";
	public nickName: string = "Data"
	public description: string = "Contains a collection of generic data"
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