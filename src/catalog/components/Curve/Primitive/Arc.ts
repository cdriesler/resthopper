import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Arc extends ResthopperComponent {

	public guid: string = "bb59bffc-f54c-4682-9778-f6c3fe74fce3";
	public name: string = "Arc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc defined by base plane, radius and angle domain.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Plane_P": ArcInput_Plane_P,
		"Radius_R": ArcInput_Radius_R,
		"Angle_A": ArcInput_Angle_A,
	}

	public output:
	{
		"Arc_A": ArcOutput_Arc_A,
		"Length_L": ArcOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new ArcInput_Plane_P(),
			"Radius_R": new ArcInput_Radius_R(),
			"Angle_A": new ArcInput_Angle_A(),
		}
		this.output = {
			"Arc_A": new ArcOutput_Arc_A(),
			"Length_L": new ArcOutput_Length_L(),
		}
	}

}

class ArcInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcOutput_Arc_A extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
