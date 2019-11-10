import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Findsimilarmember extends ResthopperComponent {

	public guid: string = "b4d4235f-14ff-4d4e-a29a-b358dcd2baf4";
	public name: string = "Findsimilarmember";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Find the most similar member in a set.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Data_D": FindsimilarmemberInput_Data_D,
		"Set_S": FindsimilarmemberInput_Set_S,
	}

	public output:
	{
		"Hit_H": FindsimilarmemberOutput_Hit_H,
		"Index_i": FindsimilarmemberOutput_Index_i,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new FindsimilarmemberInput_Data_D(),
			"Set_S": new FindsimilarmemberInput_Set_S(),
		}
		this.output = {
			"Hit_H": new FindsimilarmemberOutput_Hit_H(),
			"Index_i": new FindsimilarmemberOutput_Index_i(),
		}
	}

}

class FindsimilarmemberInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindsimilarmemberInput_Set_S extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindsimilarmemberOutput_Hit_H extends ResthopperParameter {

	public name: string = "Hit";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindsimilarmemberOutput_Index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
