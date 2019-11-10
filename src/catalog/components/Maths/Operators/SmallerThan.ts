import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SmallerThan extends ResthopperComponent {

	public guid: string = "ae840986-cade-4e5a-96b0-570f007d4fc0";
	public name: string = "SmallerThan";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Smaller than (or equal to)";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"firstnumber_a": SmallerThanInput_firstnumber_a,
		"secondnumber_b": SmallerThanInput_secondnumber_b,
	}

	public output:
	{
		"orequalto_": SmallerThanOutput_orequalto_,
	}

	constructor() {
		super();
		this.input = {
			"firstnumber_a": new SmallerThanInput_firstnumber_a(),
			"secondnumber_b": new SmallerThanInput_secondnumber_b(),
		}
		this.output = {
			"orequalto_": new SmallerThanOutput_orequalto_(),
		}
	}

}

class SmallerThanInput_firstnumber_a extends ResthopperParameter {

	public name: string = "FirstNumber";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmallerThanInput_secondnumber_b extends ResthopperParameter {

	public name: string = "SecondNumber";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmallerThanOutput_orequalto_ extends ResthopperParameter {

	public name: string = "orEqualto";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
