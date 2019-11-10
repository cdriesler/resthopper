import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Polygon extends ResthopperComponent {

	public guid: string = "845527a6-5cea-4ae9-a667-96ae1667a4e8";
	public name: string = "Polygon";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a polygon with optional round edges.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"plane_p": PolygonInput_plane_p,
		"radius_r": PolygonInput_radius_r,
		"segments_s": PolygonInput_segments_s,
		"filletradius_rf": PolygonInput_filletradius_rf,
	}

	public output:
	{
		"polygon_p": PolygonOutput_polygon_p,
		"length_l": PolygonOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new PolygonInput_plane_p(),
			"radius_r": new PolygonInput_radius_r(),
			"segments_s": new PolygonInput_segments_s(),
			"filletradius_rf": new PolygonInput_filletradius_rf(),
		}
		this.output = {
			"polygon_p": new PolygonOutput_polygon_p(),
			"length_l": new PolygonOutput_length_l(),
		}
	}

}

class PolygonInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonInput_segments_s extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonInput_filletradius_rf extends ResthopperParameter {

	public name: string = "FilletRadius";
	public nickName: string = "Rf";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonOutput_polygon_p extends ResthopperParameter {

	public name: string = "Polygon";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
