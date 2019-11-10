import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TweenCurve extends ResthopperComponent {

	public guid: string = "139619d2-8b18-47b6-b3b9-bf4fec0d6eb1";
	public name: string = "TweenCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Tween between two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CurveA_A": TweenCurveInput_CurveA_A,
		"CurveB_B": TweenCurveInput_CurveB_B,
		"Factor_F": TweenCurveInput_Factor_F,
	}

	public output:
	{
		"Tween_T": TweenCurveOutput_Tween_T,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new TweenCurveInput_CurveA_A(),
			"CurveB_B": new TweenCurveInput_CurveB_B(),
			"Factor_F": new TweenCurveInput_Factor_F(),
		}
		this.output = {
			"Tween_T": new TweenCurveOutput_Tween_T(),
		}
	}

}

class TweenCurveInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TweenCurveInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TweenCurveInput_Factor_F extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TweenCurveOutput_Tween_T extends ResthopperParameter {

	public name: string = "Tween";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
