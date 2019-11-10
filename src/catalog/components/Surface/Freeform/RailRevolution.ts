import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RailRevolution extends ResthopperComponent {

	public guid: string = "d8d68c35-f869-486d-adf3-69ee3cc2d501";
	public name: string = "RailRevolution";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface of revolution using a sweep rail.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Curve_P": RailRevolutionInput_Curve_P,
		"Rail_R": RailRevolutionInput_Rail_R,
		"Axis_A": RailRevolutionInput_Axis_A,
		"Scale_S": RailRevolutionInput_Scale_S,
	}

	public output:
	{
		"Surface_S": RailRevolutionOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Curve_P": new RailRevolutionInput_Curve_P(),
			"Rail_R": new RailRevolutionInput_Rail_R(),
			"Axis_A": new RailRevolutionInput_Axis_A(),
			"Scale_S": new RailRevolutionInput_Scale_S(),
		}
		this.output = {
			"Surface_S": new RailRevolutionOutput_Surface_S(),
		}
	}

}

class RailRevolutionInput_Curve_P extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RailRevolutionInput_Rail_R extends ResthopperParameter {

	public name: string = "Rail";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RailRevolutionInput_Axis_A extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RailRevolutionInput_Scale_S extends ResthopperParameter {

	public name: string = "Scale";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RailRevolutionOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
