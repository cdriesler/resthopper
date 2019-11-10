import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class DomainParam extends ResthopperParameter {

	public guid: string = "15b7afe5-d0d0-43e1-b894-34fcfe3be384";
	public name: string = "Domain";
	public nickName: string = "Domain"
	public description: string = "Contains a collection of numeric domains"
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