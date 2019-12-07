import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Findsimilarmember extends ResthopperComponent {

	public guid: string = "b4d4235f-14ff-4d4e-a29a-b358dcd2baf4";
	public name: string = "Findsimilarmember";
	public nickName: string = "FSim";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Find the most similar member in a set.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"data_d": FindsimilarmemberInput_data_d,
		"set_s": FindsimilarmemberInput_set_s,
	}

	public output:
	{
		"hit_h": FindsimilarmemberOutput_hit_h,
		"index_i": FindsimilarmemberOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"data_d": new FindsimilarmemberInput_data_d(),
			"set_s": new FindsimilarmemberInput_set_s(),
		}
		this.output = {
			"hit_h": new FindsimilarmemberOutput_hit_h(),
			"index_i": new FindsimilarmemberOutput_index_i(),
		}
	}

}

class FindsimilarmemberInput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindsimilarmemberInput_set_s extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindsimilarmemberOutput_hit_h extends ResthopperParameter {

	public name: string = "Hit";
	public nickName: string = "H";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindsimilarmemberOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
