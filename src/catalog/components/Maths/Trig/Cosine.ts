import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cosine extends ResthopperComponent {

	public guid: string = "d2d2a900-780c-4d58-9a35-1f9d8d35df6f";
	public name: string = "Cosine";
	public nickName: string = "Cos";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the cosine of a value";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": CosineInput_value_x,
	}

	public output:
	{
		"result_y": CosineOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new CosineInput_value_x(),
		}
		this.output = {
			"result_y": new CosineOutput_result_y(),
		}
	}

}

class CosineInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CosineOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
