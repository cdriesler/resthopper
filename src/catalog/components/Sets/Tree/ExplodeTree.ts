import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExplodeTree extends ResthopperComponent {

	public guid: string = "74cad441-2264-45fe-a57d-85034751208a";
	public name: string = "ExplodeTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Extract all the branches from a tree";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Data_D": ExplodeTreeInput_Data_D,
	}

	public output:
	{
		"Branch1_": ExplodeTreeOutput_Branch1_,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new ExplodeTreeInput_Data_D(),
		}
		this.output = {
			"Branch1_": new ExplodeTreeOutput_Branch1_(),
		}
	}

}

class ExplodeTreeInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExplodeTreeOutput_Branch1_ extends ResthopperParameter {

	public name: string = "Branch1";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
