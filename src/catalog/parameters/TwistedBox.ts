import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class TwistedBoxParam extends ResthopperParameter {

	public guid: string = "6db039c4-cad1-4549-bd45-e31cb0f71692";
	public name: string = "TwistedBox";
	public nickName: string = "TBox"
	public description: string = "Contains a collection of twisted boxes"
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