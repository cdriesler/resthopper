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
		"values_v": RelativeDifferencesInput_values_v,
	}

	public output:
	{
		"differenced_d": RelativeDifferencesOutput_differenced_d,
	}

	constructor() {
		super();
		this.input = {
			"values_v": new RelativeDifferencesInput_values_v(),
		}
		this.output = {
			"differenced_d": new RelativeDifferencesOutput_differenced_d(),
		}
	}

}

class RelativeDifferencesInput_values_v extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeDifferencesOutput_differenced_d extends ResthopperParameter {

	public name: string = "Differenced";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
