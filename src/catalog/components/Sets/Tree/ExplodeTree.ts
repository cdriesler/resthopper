import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExplodeTree extends ResthopperComponent {

	public guid: string = "74cad441-2264-45fe-a57d-85034751208a";
	public name: string = "ExplodeTree";
	public nickName: string = "BANG";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Extract all the branches from a tree";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Grasshopper";

	public input:
	{
		"data_d": ExplodeTreeInput_data_d,
	}

	public output:
	{
		"branch1_": ExplodeTreeOutput_branch1_,
	}

	constructor() {
		super();
		this.input = {
			"data_d": new ExplodeTreeInput_data_d(),
		}
		this.output = {
			"branch1_": new ExplodeTreeOutput_branch1_(),
		}
	}

}

class ExplodeTreeInput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExplodeTreeOutput_branch1_ extends ResthopperParameter {

	public name: string = "Branch1";
	public nickName: string = "";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
