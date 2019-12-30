import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointinCurves extends ResthopperComponent {

	public guid: string = "0b04e8b9-00d7-47a7-95c3-0d51e654fe88";
	public name: string = "Point in Curves";
	public nickName: string = "InCurves";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test a point for multiple closed curve containment.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"point_p": PointinCurvesInput_point_p,
		"curves_c": PointinCurvesInput_curves_c,
	}

	public output:
	{
		"relationship_r": PointinCurvesOutput_relationship_r,
		"index_i": PointinCurvesOutput_index_i,
		"point_p": PointinCurvesOutput_point_p,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new PointinCurvesInput_point_p(),
			"curves_c": new PointinCurvesInput_curves_c(),
		}
		this.output = {
			"relationship_r": new PointinCurvesOutput_relationship_r(),
			"index_i": new PointinCurvesOutput_index_i(),
			"point_p": new PointinCurvesOutput_point_p(),
		}
	}

}

class PointinCurvesInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Point for inclusion test"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointinCurvesInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Boundary regions (closed curves only)"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointinCurvesOutput_relationship_r extends ResthopperParameter {

	public name: string = "Relationship";
	public nickName: string = "R";
	public description: string = "Point/Region relationship (0 = outside, 1 = coincident, 2 = inside)"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointinCurvesOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public description: string = "Index of first region that contains the point"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointinCurvesOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Point projected on region plane."
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
