import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Planar extends ResthopperComponent {

	public guid: string = "5816ec9c-f170-4c59-ac44-364401ff84cd";
	public name: string = "Planar";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test a curve for planarity.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": PlanarInput_Curve_C,
	}

	public output:
	{
		"Planar_p": PlanarOutput_Planar_p,
		"Plane_P": PlanarOutput_Plane_P,
		"Deviation_D": PlanarOutput_Deviation_D,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new PlanarInput_Curve_C(),
		}
		this.output = {
			"Planar_p": new PlanarOutput_Planar_p(),
			"Plane_P": new PlanarOutput_Plane_P(),
			"Deviation_D": new PlanarOutput_Deviation_D(),
		}
	}

}

class PlanarInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanarOutput_Planar_p extends ResthopperParameter {

	public name: string = "Planar";
	public nickName: string = "p";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanarOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanarOutput_Deviation_D extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
