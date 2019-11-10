import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IsoVist extends ResthopperComponent {

	public guid: string = "cab92254-1c79-4e5a-9972-0a4412b35c88";
	public name: string = "IsoVist";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Compute an isovist sampling at a location";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Plane_P": IsoVistInput_Plane_P,
		"Count_N": IsoVistInput_Count_N,
		"Radius_R": IsoVistInput_Radius_R,
		"Obstacles_O": IsoVistInput_Obstacles_O,
	}

	public output:
	{
		"Points_P": IsoVistOutput_Points_P,
		"Distance_D": IsoVistOutput_Distance_D,
		"Index_I": IsoVistOutput_Index_I,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new IsoVistInput_Plane_P(),
			"Count_N": new IsoVistInput_Count_N(),
			"Radius_R": new IsoVistInput_Radius_R(),
			"Obstacles_O": new IsoVistInput_Obstacles_O(),
		}
		this.output = {
			"Points_P": new IsoVistOutput_Points_P(),
			"Distance_D": new IsoVistOutput_Distance_D(),
			"Index_I": new IsoVistOutput_Index_I(),
		}
	}

}

class IsoVistInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistInput_Obstacles_O extends ResthopperParameter {

	public name: string = "Obstacles";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
