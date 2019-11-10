import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class SubDParam extends ResthopperParameter {

	public guid: string = "89cd1a12-0007-4581-99ba-66578665e610";
	public name: string = "SubD";
	public nickName: string = "SubD"
	public description: string = "Contains a collection of SubDs (Subdivision surfaces)"
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