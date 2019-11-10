import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceLine extends ResthopperComponent {

	public guid: string = "a834e823-ae01-44d8-9066-c138eeb6f391";
	public name: string = "SurfaceLine";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a surface and a line.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": SurfaceLineInput_Surface_S,
		"Line_L": SurfaceLineInput_Line_L,
	}

	public output:
	{
		"Curves_C": SurfaceLineOutput_Curves_C,
		"Points_P": SurfaceLineOutput_Points_P,
		"UVPoints_uv": SurfaceLineOutput_UVPoints_uv,
		"Normal_N": SurfaceLineOutput_Normal_N,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new SurfaceLineInput_Surface_S(),
			"Line_L": new SurfaceLineInput_Line_L(),
		}
		this.output = {
			"Curves_C": new SurfaceLineOutput_Curves_C(),
			"Points_P": new SurfaceLineOutput_Points_P(),
			"UVPoints_uv": new SurfaceLineOutput_UVPoints_uv(),
			"Normal_N": new SurfaceLineOutput_Normal_N(),
		}
	}

}

class SurfaceLineInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineOutput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineOutput_UVPoints_uv extends ResthopperParameter {

	public name: string = "UVPoints";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineOutput_Normal_N extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
