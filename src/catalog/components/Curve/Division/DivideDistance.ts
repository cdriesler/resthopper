import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideDistance extends ResthopperComponent {

	public guid: string = "1e531c08-9c80-46d6-8850-1b50d1dae69f";
	public name: string = "DivideDistance";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve with a preset distance between points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Curve_C": DivideDistanceInput_Curve_C,
		"Distance_D": DivideDistanceInput_Distance_D,
	}

	public output:
	{
		"Points_P": DivideDistanceOutput_Points_P,
		"Tangents_T": DivideDistanceOutput_Tangents_T,
		"Parameters_t": DivideDistanceOutput_Parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new DivideDistanceInput_Curve_C(),
			"Distance_D": new DivideDistanceInput_Distance_D(),
		}
		this.output = {
			"Points_P": new DivideDistanceOutput_Points_P(),
			"Tangents_T": new DivideDistanceOutput_Tangents_T(),
			"Parameters_t": new DivideDistanceOutput_Parameters_t(),
		}
	}

}

class DivideDistanceInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDistanceInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDistanceOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDistanceOutput_Tangents_T extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDistanceOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
