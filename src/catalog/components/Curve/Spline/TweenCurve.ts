import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TweenCurve extends ResthopperComponent {

	public guid: string = "139619d2-8b18-47b6-b3b9-bf4fec0d6eb1";
	public name: string = "TweenCurve";
	public nickName: string = "TweenCrv";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Tween between two curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curvea_a": TweenCurveInput_curvea_a,
		"curveb_b": TweenCurveInput_curveb_b,
		"factor_f": TweenCurveInput_factor_f,
	}

	public output:
	{
		"tween_t": TweenCurveOutput_tween_t,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new TweenCurveInput_curvea_a(),
			"curveb_b": new TweenCurveInput_curveb_b(),
			"factor_f": new TweenCurveInput_factor_f(),
		}
		this.output = {
			"tween_t": new TweenCurveOutput_tween_t(),
		}
	}

}

class TweenCurveInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TweenCurveInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TweenCurveInput_factor_f extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TweenCurveOutput_tween_t extends ResthopperParameter {

	public name: string = "Tween";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
