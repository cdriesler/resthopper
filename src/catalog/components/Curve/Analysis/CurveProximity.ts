import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveProximity extends ResthopperComponent {

	public guid: string = "6b7ba278-5c9d-42f1-a61d-6209cbd44907";
	public name: string = "CurveProximity";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the pair of closest points between two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CurveA_A": CurveProximityInput_CurveA_A,
		"CurveB_B": CurveProximityInput_CurveB_B,
	}

	public output:
	{
		"PointA_A": CurveProximityOutput_PointA_A,
		"PointB_B": CurveProximityOutput_PointB_B,
		"Distance_D": CurveProximityOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new CurveProximityInput_CurveA_A(),
			"CurveB_B": new CurveProximityInput_CurveB_B(),
		}
		this.output = {
			"PointA_A": new CurveProximityOutput_PointA_A(),
			"PointB_B": new CurveProximityOutput_PointB_B(),
			"Distance_D": new CurveProximityOutput_Distance_D(),
		}
	}

}

class CurveProximityInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveProximityInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveProximityOutput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveProximityOutput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveProximityOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
