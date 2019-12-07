import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Subtraction extends ResthopperComponent {

	public guid: string = "9c007a04-d0d9-48e4-9da3-9ba142bc4d46";
	public name: string = "Subtraction";
	public nickName: string = "AB";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical subtraction";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"a_a": SubtractionInput_a_a,
		"b_b": SubtractionInput_b_b,
	}

	public output:
	{
		"result_r": SubtractionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new SubtractionInput_a_a(),
			"b_b": new SubtractionInput_b_b(),
		}
		this.output = {
			"result_r": new SubtractionOutput_result_r(),
		}
	}

}

class SubtractionInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubtractionInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubtractionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
