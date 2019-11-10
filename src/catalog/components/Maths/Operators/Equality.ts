import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Equality extends ResthopperComponent {

	public guid: string = "5db0fb89-4f22-4f09-a777-fa5e55aed7ec";
	public name: string = "Equality";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Test for (in)equality of two numbers";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"firstnumber_a": EqualityInput_firstnumber_a,
		"secondnumber_b": EqualityInput_secondnumber_b,
	}

	public output:
	{
		"inequality_": EqualityOutput_inequality_,
	}

	constructor() {
		super();
		this.input = {
			"firstnumber_a": new EqualityInput_firstnumber_a(),
			"secondnumber_b": new EqualityInput_secondnumber_b(),
		}
		this.output = {
			"inequality_": new EqualityOutput_inequality_(),
		}
	}

}

class EqualityInput_firstnumber_a extends ResthopperParameter {

	public name: string = "FirstNumber";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EqualityInput_secondnumber_b extends ResthopperParameter {

	public name: string = "SecondNumber";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EqualityOutput_inequality_ extends ResthopperParameter {

	public name: string = "Inequality";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
