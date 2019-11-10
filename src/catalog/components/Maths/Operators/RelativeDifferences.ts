import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RelativeDifferences extends ResthopperComponent {

	public guid: string = "dd17d442-3776-40b3-ad5b-5e188b56bd4c";
	public name: string = "RelativeDifferences";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Compute relative differences for a list of data";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Values_V": RelativeDifferencesInput_Values_V,
	}

	public output:
	{
		"Differenced_D": RelativeDifferencesOutput_Differenced_D,
	}

	constructor() {
		super();
		this.input = {
			"Values_V": new RelativeDifferencesInput_Values_V(),
		}
		this.output = {
			"Differenced_D": new RelativeDifferencesOutput_Differenced_D(),
		}
	}

}

class RelativeDifferencesInput_Values_V extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeDifferencesOutput_Differenced_D extends ResthopperParameter {

	public name: string = "Differenced";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
