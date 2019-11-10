import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConvexHull extends ResthopperComponent {

	public guid: string = "9d0c5284-ea24-4f9f-a183-ef57fc48b5b8";
	public name: string = "ConvexHull";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Compute the planar, convex hull for a collection of points";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Points_P": ConvexHullInput_Points_P,
		"Plane_Pl": ConvexHullInput_Plane_Pl,
	}

	public output:
	{
		"Hull_H": ConvexHullOutput_Hull_H,
		"Hullz_Hz": ConvexHullOutput_Hullz_Hz,
		"Indices_I": ConvexHullOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new ConvexHullInput_Points_P(),
			"Plane_Pl": new ConvexHullInput_Plane_Pl(),
		}
		this.output = {
			"Hull_H": new ConvexHullOutput_Hull_H(),
			"Hullz_Hz": new ConvexHullOutput_Hullz_Hz(),
			"Indices_I": new ConvexHullOutput_Indices_I(),
		}
	}

}

class ConvexHullInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexHullInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexHullOutput_Hull_H extends ResthopperParameter {

	public name: string = "Hull";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexHullOutput_Hullz_Hz extends ResthopperParameter {

	public name: string = "Hullz";
	public nickName: string = "Hz";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexHullOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
