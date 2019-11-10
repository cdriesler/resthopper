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
		"FirstNumber_A": EqualityInput_FirstNumber_A,
		"SecondNumber_B": EqualityInput_SecondNumber_B,
	}

	public output:
	{
		"Inequality_": EqualityOutput_Inequality_,
	}

	constructor() {
		super();
		this.input = {
			"FirstNumber_A": new EqualityInput_FirstNumber_A(),
			"SecondNumber_B": new EqualityInput_SecondNumber_B(),
		}
		this.output = {
			"Inequality_": new EqualityOutput_Inequality_(),
		}
	}

}

class EqualityInput_FirstNumber_A extends ResthopperParameter {

	public name: string = "FirstNumber";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EqualityInput_SecondNumber_B extends ResthopperParameter {

	public name: string = "SecondNumber";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EqualityOutput_Inequality_ extends ResthopperParameter {

	public name: string = "Inequality";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
