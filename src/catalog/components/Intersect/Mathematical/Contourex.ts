import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contourex extends ResthopperComponent {

	public guid: string = "246cda78-5e88-4087-ba09-ae082bbc4af8";
	public name: string = "Contour (ex)";
	public nickName: string = "Contour";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Create a set of Brep or Mesh contours";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"shape_s": ContourexInput_shape_s,
		"plane_p": ContourexInput_plane_p,
		"offsets_o": ContourexInput_offsets_o,
		"distances_d": ContourexInput_distances_d,
	}

	public output:
	{
		"contours_c": ContourexOutput_contours_c,
	}

	constructor() {
		super();
		this.input = {
			"shape_s": new ContourexInput_shape_s(),
			"plane_p": new ContourexInput_plane_p(),
			"offsets_o": new ContourexInput_offsets_o(),
			"distances_d": new ContourexInput_distances_d(),
		}
		this.output = {
			"contours_c": new ContourexOutput_contours_c(),
		}
	}

}

class ContourexInput_shape_s extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public description: string = "Brep or Mesh to contour"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Base plane for contours"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_offsets_o extends ResthopperParameter {

	public name: string = "Offsets";
	public nickName: string = "O";
	public description: string = "Contour offsets from base plane (if omitted, you must specify distances instead)"
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_distances_d extends ResthopperParameter {

	public name: string = "Distances";
	public nickName: string = "D";
	public description: string = "Distances between contours (if omitted, you must specify offset instead)"
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexOutput_contours_c extends ResthopperParameter {

	public name: string = "Contours";
	public nickName: string = "C";
	public description: string = "Resulting contours (grouped by section)"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
