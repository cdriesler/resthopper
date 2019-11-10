import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructArc extends ResthopperComponent {

	public guid: string = "23862862-049a-40be-b558-2418aacbd916";
	public name: string = "DeconstructArc";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Retrieve the base plane, radius and angle domain of an arc.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Arc_A": DeconstructArcInput_Arc_A,
	}

	public output:
	{
		"BasePlane_B": DeconstructArcOutput_BasePlane_B,
		"Radius_R": DeconstructArcOutput_Radius_R,
		"Angle_A": DeconstructArcOutput_Angle_A,
	}

	constructor() {
		super();
		this.input = {
			"Arc_A": new DeconstructArcInput_Arc_A(),
		}
		this.output = {
			"BasePlane_B": new DeconstructArcOutput_BasePlane_B(),
			"Radius_R": new DeconstructArcOutput_Radius_R(),
			"Angle_A": new DeconstructArcOutput_Angle_A(),
		}
	}

}

class DeconstructArcInput_Arc_A extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructArcOutput_BasePlane_B extends ResthopperParameter {

	public name: string = "BasePlane";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructArcOutput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructArcOutput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
