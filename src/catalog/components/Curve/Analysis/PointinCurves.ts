import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointinCurves extends ResthopperComponent {

	public guid: string = "0b04e8b9-00d7-47a7-95c3-0d51e654fe88";
	public name: string = "PointinCurves";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test a point for multiple closed curve containment.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Point_P": PointinCurvesInput_Point_P,
		"Curves_C": PointinCurvesInput_Curves_C,
	}

	public output:
	{
		"Relationship_R": PointinCurvesOutput_Relationship_R,
		"Index_I": PointinCurvesOutput_Index_I,
		"Point_P": PointinCurvesOutput_Point_P,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new PointinCurvesInput_Point_P(),
			"Curves_C": new PointinCurvesInput_Curves_C(),
		}
		this.output = {
			"Relationship_R": new PointinCurvesOutput_Relationship_R(),
			"Index_I": new PointinCurvesOutput_Index_I(),
			"Point_P": new PointinCurvesOutput_Point_P(),
		}
	}

}

class PointinCurvesInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointinCurvesInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointinCurvesOutput_Relationship_R extends ResthopperParameter {

	public name: string = "Relationship";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointinCurvesOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointinCurvesOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
