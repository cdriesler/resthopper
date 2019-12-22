import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubCurve extends ResthopperComponent {

	public guid: string = "429cbba9-55ee-4e84-98ea-876c44db879a";
	public name: string = "Sub Curve";
	public nickName: string = "SubCrv";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a curve from the sub-domain of a base curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"basecurve_c": SubCurveInput_basecurve_c,
		"domain_d": SubCurveInput_domain_d,
	}

	public output:
	{
		"curve_c": SubCurveOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"basecurve_c": new SubCurveInput_basecurve_c(),
			"domain_d": new SubCurveInput_domain_d(),
		}
		this.output = {
			"curve_c": new SubCurveOutput_curve_c(),
		}
	}

}

class SubCurveInput_basecurve_c extends ResthopperParameter {

	public name: string = "Basecurve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubCurveInput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubCurveOutput_curve_c extends ResthopperParameter {

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
