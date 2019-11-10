import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SortAlongCurve extends ResthopperComponent {

	public guid: string = "59aaebf8-6654-46b7-8386-89223c773978";
	public name: string = "SortAlongCurve";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Sort points along a curve";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Points_P": SortAlongCurveInput_Points_P,
		"Curve_C": SortAlongCurveInput_Curve_C,
	}

	public output:
	{
		"Points_P": SortAlongCurveOutput_Points_P,
		"Indices_I": SortAlongCurveOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new SortAlongCurveInput_Points_P(),
			"Curve_C": new SortAlongCurveInput_Curve_C(),
		}
		this.output = {
			"Points_P": new SortAlongCurveOutput_Points_P(),
			"Indices_I": new SortAlongCurveOutput_Indices_I(),
		}
	}

}

class SortAlongCurveInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortAlongCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortAlongCurveOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortAlongCurveOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
