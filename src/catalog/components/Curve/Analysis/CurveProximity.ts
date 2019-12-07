import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveProximity extends ResthopperComponent {

	public guid: string = "6b7ba278-5c9d-42f1-a61d-6209cbd44907";
	public name: string = "CurveProximity";
	public nickName: string = "CrvProx";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the pair of closest points between two curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curvea_a": CurveProximityInput_curvea_a,
		"curveb_b": CurveProximityInput_curveb_b,
	}

	public output:
	{
		"pointa_a": CurveProximityOutput_pointa_a,
		"pointb_b": CurveProximityOutput_pointb_b,
		"distance_d": CurveProximityOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new CurveProximityInput_curvea_a(),
			"curveb_b": new CurveProximityInput_curveb_b(),
		}
		this.output = {
			"pointa_a": new CurveProximityOutput_pointa_a(),
			"pointb_b": new CurveProximityOutput_pointb_b(),
			"distance_d": new CurveProximityOutput_distance_d(),
		}
	}

}

class CurveProximityInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveProximityInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveProximityOutput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveProximityOutput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveProximityOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
