import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contourex extends ResthopperComponent {

	public guid: string = "246cda78-5e88-4087-ba09-ae082bbc4af8";
	public name: string = "Contourex";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Create a set of Brep or Mesh contours";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Shape_S": ContourexInput_Shape_S,
		"Plane_P": ContourexInput_Plane_P,
		"Offsets_O": ContourexInput_Offsets_O,
		"Distances_D": ContourexInput_Distances_D,
	}

	public output:
	{
		"Contours_C": ContourexOutput_Contours_C,
	}

	constructor() {
		super();
		this.input = {
			"Shape_S": new ContourexInput_Shape_S(),
			"Plane_P": new ContourexInput_Plane_P(),
			"Offsets_O": new ContourexInput_Offsets_O(),
			"Distances_D": new ContourexInput_Distances_D(),
		}
		this.output = {
			"Contours_C": new ContourexOutput_Contours_C(),
		}
	}

}

class ContourexInput_Shape_S extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_Offsets_O extends ResthopperParameter {

	public name: string = "Offsets";
	public nickName: string = "O";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_Distances_D extends ResthopperParameter {

	public name: string = "Distances";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexOutput_Contours_C extends ResthopperParameter {

	public name: string = "Contours";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
