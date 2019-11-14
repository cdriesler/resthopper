import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceLine extends ResthopperComponent {

	public guid: string = "a834e823-ae01-44d8-9066-c138eeb6f391";
	public name: string = "SurfaceLine";
	public nickName: string = "SLX";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a surface and a line.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": SurfaceLineInput_surface_s,
		"line_l": SurfaceLineInput_line_l,
	}

	public output:
	{
		"curves_c": SurfaceLineOutput_curves_c,
		"points_p": SurfaceLineOutput_points_p,
		"uvpoints_uv": SurfaceLineOutput_uvpoints_uv,
		"normal_n": SurfaceLineOutput_normal_n,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new SurfaceLineInput_surface_s(),
			"line_l": new SurfaceLineInput_line_l(),
		}
		this.output = {
			"curves_c": new SurfaceLineOutput_curves_c(),
			"points_p": new SurfaceLineOutput_points_p(),
			"uvpoints_uv": new SurfaceLineOutput_uvpoints_uv(),
			"normal_n": new SurfaceLineOutput_normal_n(),
		}
	}

}

class SurfaceLineInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineOutput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineOutput_uvpoints_uv extends ResthopperParameter {

	public name: string = "UVPoints";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceLineOutput_normal_n extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
