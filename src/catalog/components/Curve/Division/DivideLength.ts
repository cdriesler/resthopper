import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideLength extends ResthopperComponent {

	public guid: string = "fdc466a9-d3b8-4056-852a-09dba0f74aca";
	public name: string = "DivideLength";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve into segments with a preset length";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Curve_C": DivideLengthInput_Curve_C,
		"Length_L": DivideLengthInput_Length_L,
	}

	public output:
	{
		"Points_P": DivideLengthOutput_Points_P,
		"Tangents_T": DivideLengthOutput_Tangents_T,
		"Parameters_t": DivideLengthOutput_Parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new DivideLengthInput_Curve_C(),
			"Length_L": new DivideLengthInput_Length_L(),
		}
		this.output = {
			"Points_P": new DivideLengthOutput_Points_P(),
			"Tangents_T": new DivideLengthOutput_Tangents_T(),
			"Parameters_t": new DivideLengthOutput_Parameters_t(),
		}
	}

}

class DivideLengthInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideLengthInput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideLengthOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideLengthOutput_Tangents_T extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideLengthOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
