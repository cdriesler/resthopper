import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class MarshallingsignalparameterParam extends ResthopperParameter {

	public guid: string = "4018985c-f9e8-4a8f-8d4d-518aec276f60";
	public name: string = "Marshallingsignalparameter";
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