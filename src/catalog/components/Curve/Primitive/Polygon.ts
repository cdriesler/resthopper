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
		"Plane_P": PolygonInput_Plane_P,
		"Radius_R": PolygonInput_Radius_R,
		"Segments_S": PolygonInput_Segments_S,
		"FilletRadius_Rf": PolygonInput_FilletRadius_Rf,
	}

	public output:
	{
		"Polygon_P": PolygonOutput_Polygon_P,
		"Length_L": PolygonOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new PolygonInput_Plane_P(),
			"Radius_R": new PolygonInput_Radius_R(),
			"Segments_S": new PolygonInput_Segments_S(),
			"FilletRadius_Rf": new PolygonInput_FilletRadius_Rf(),
		}
		this.output = {
			"Polygon_P": new PolygonOutput_Polygon_P(),
			"Length_L": new PolygonOutput_Length_L(),
		}
	}

}

class PolygonInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonInput_Segments_S extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonInput_FilletRadius_Rf extends ResthopperParameter {

	public name: string = "FilletRadius";
	public nickName: string = "Rf";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonOutput_Polygon_P extends ResthopperParameter {

	public name: string = "Polygon";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
