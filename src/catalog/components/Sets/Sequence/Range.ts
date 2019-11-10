import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Range extends ResthopperComponent {

	public guid: string = "9445ca40-cc73-4861-a455-146308676855";
	public name: string = "Range";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Create a range of numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"domain_d": RangeInput_domain_d,
		"steps_n": RangeInput_steps_n,
	}

	public output:
	{
		"range_r": RangeOutput_range_r,
	}

	constructor() {
		super();
		this.input = {
			"domain_d": new RangeInput_domain_d(),
			"steps_n": new RangeInput_steps_n(),
		}
		this.output = {
			"range_r": new RangeOutput_range_r(),
		}
	}

}

class RangeInput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RangeInput_steps_n extends ResthopperParameter {

	public name: string = "Steps";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RangeOutput_range_r extends ResthopperParameter {

	public name: string = "Range";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
