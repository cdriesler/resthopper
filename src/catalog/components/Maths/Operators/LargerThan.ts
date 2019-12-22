import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LargerThan extends ResthopperComponent {

	public guid: string = "30d58600-1aab-42db-80a3-f1ea6c4269a0";
	public name: string = "Larger Than";
	public nickName: string = "Larger";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Larger than (or equal to)";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"firstnumber_a": LargerThanInput_firstnumber_a,
		"secondnumber_b": LargerThanInput_secondnumber_b,
	}

	public output:
	{
		"orequalto_": LargerThanOutput_orequalto_,
	}

	constructor() {
		super();
		this.input = {
			"firstnumber_a": new LargerThanInput_firstnumber_a(),
			"secondnumber_b": new LargerThanInput_secondnumber_b(),
		}
		this.output = {
			"orequalto_": new LargerThanOutput_orequalto_(),
		}
	}

}

class LargerThanInput_firstnumber_a extends ResthopperParameter {

	public name: string = "FirstNumber";
	public nickName: string = "A";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LargerThanInput_secondnumber_b extends ResthopperParameter {

	public name: string = "SecondNumber";
	public nickName: string = "B";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LargerThanOutput_orequalto_ extends ResthopperParameter {

	public name: string = "orEqualto";
	public nickName: string = "";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
