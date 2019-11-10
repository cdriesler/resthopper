import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubCurve extends ResthopperComponent {

	public guid: string = "429cbba9-55ee-4e84-98ea-876c44db879a";
	public name: string = "SubCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a curve from the sub-domain of a base curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Basecurve_C": SubCurveInput_Basecurve_C,
		"Domain_D": SubCurveInput_Domain_D,
	}

	public output:
	{
		"Curve_C": SubCurveOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Basecurve_C": new SubCurveInput_Basecurve_C(),
			"Domain_D": new SubCurveInput_Domain_D(),
		}
		this.output = {
			"Curve_C": new SubCurveOutput_Curve_C(),
		}
	}

}

class SubCurveInput_Basecurve_C extends ResthopperParameter {

	public name: string = "Basecurve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubCurveInput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
