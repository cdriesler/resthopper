import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class JoinCurves extends ResthopperComponent {

	public guid: string = "8073a420-6bec-49e3-9b18-367f6fd76ac3";
	public name: string = "JoinCurves";
	public nickName: string = "Join";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Join as many curves as possible";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curves_c": JoinCurvesInput_curves_c,
		"preserve_p": JoinCurvesInput_preserve_p,
	}

	public output:
	{
		"curves_c": JoinCurvesOutput_curves_c,
	}

	constructor() {
		super();
		this.input = {
			"curves_c": new JoinCurvesInput_curves_c(),
			"preserve_p": new JoinCurvesInput_preserve_p(),
		}
		this.output = {
			"curves_c": new JoinCurvesOutput_curves_c(),
		}
	}

}

class JoinCurvesInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JoinCurvesInput_preserve_p extends ResthopperParameter {

	public name: string = "Preserve";
	public nickName: string = "P";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JoinCurvesOutput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
