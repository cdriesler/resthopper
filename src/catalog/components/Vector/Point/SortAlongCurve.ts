import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SortAlongCurve extends ResthopperComponent {

	public guid: string = "59aaebf8-6654-46b7-8386-89223c773978";
	public name: string = "Sort Along Curve";
	public nickName: string = "AlongCrv";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Sort points along a curve";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"points_p": SortAlongCurveInput_points_p,
		"curve_c": SortAlongCurveInput_curve_c,
	}

	public output:
	{
		"points_p": SortAlongCurveOutput_points_p,
		"indices_i": SortAlongCurveOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new SortAlongCurveInput_points_p(),
			"curve_c": new SortAlongCurveInput_curve_c(),
		}
		this.output = {
			"points_p": new SortAlongCurveOutput_points_p(),
			"indices_i": new SortAlongCurveOutput_indices_i(),
		}
	}

}

class SortAlongCurveInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortAlongCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortAlongCurveOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortAlongCurveOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
