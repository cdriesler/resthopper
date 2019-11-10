import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class CultureParam extends ResthopperParameter {

	public guid: string = "7fa15783-70da-485c-98c0-a099e6988c3e";
	public name: string = "Culture";
	public nickName: string = "Culture"
	public description: string = "Contains a collection of culture specifiers"
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