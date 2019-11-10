import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IsoVistRay extends ResthopperComponent {

	public guid: string = "93d0dcbc-6207-4745-aaf7-fe57a880f959";
	public name: string = "IsoVistRay";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Compute a single isovist sample at a location";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Sample_S": IsoVistRayInput_Sample_S,
		"Radius_R": IsoVistRayInput_Radius_R,
		"Obstacles_O": IsoVistRayInput_Obstacles_O,
	}

	public output:
	{
		"Point_P": IsoVistRayOutput_Point_P,
		"Distance_D": IsoVistRayOutput_Distance_D,
		"Index_I": IsoVistRayOutput_Index_I,
	}

	constructor() {
		super();
		this.input = {
			"Sample_S": new IsoVistRayInput_Sample_S(),
			"Radius_R": new IsoVistRayInput_Radius_R(),
			"Obstacles_O": new IsoVistRayInput_Obstacles_O(),
		}
		this.output = {
			"Point_P": new IsoVistRayOutput_Point_P(),
			"Distance_D": new IsoVistRayOutput_Distance_D(),
			"Index_I": new IsoVistRayOutput_Index_I(),
		}
	}

}

class IsoVistRayInput_Sample_S extends ResthopperParameter {

	public name: string = "Sample";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayInput_Obstacles_O extends ResthopperParameter {

	public name: string = "Obstacles";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
