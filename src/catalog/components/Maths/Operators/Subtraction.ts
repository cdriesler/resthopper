import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Subtraction extends ResthopperComponent {

	public guid: string = "9c007a04-d0d9-48e4-9da3-9ba142bc4d46";
	public name: string = "Subtraction";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical subtraction";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": SubtractionInput_A_A,
		"B_B": SubtractionInput_B_B,
	}

	public output:
	{
		"Result_R": SubtractionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new SubtractionInput_A_A(),
			"B_B": new SubtractionInput_B_B(),
		}
		this.output = {
			"Result_R": new SubtractionOutput_Result_R(),
		}
	}

}

class SubtractionInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubtractionInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubtractionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
