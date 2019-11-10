import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class JoinCurves extends ResthopperComponent {

	public guid: string = "8073a420-6bec-49e3-9b18-367f6fd76ac3";
	public name: string = "JoinCurves";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Join as many curves as possible";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curves_C": JoinCurvesInput_Curves_C,
		"Preserve_P": JoinCurvesInput_Preserve_P,
	}

	public output:
	{
		"Curves_C": JoinCurvesOutput_Curves_C,
	}

	constructor() {
		super();
		this.input = {
			"Curves_C": new JoinCurvesInput_Curves_C(),
			"Preserve_P": new JoinCurvesInput_Preserve_P(),
		}
		this.output = {
			"Curves_C": new JoinCurvesOutput_Curves_C(),
		}
	}

}

class JoinCurvesInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JoinCurvesInput_Preserve_P extends ResthopperParameter {

	public name: string = "Preserve";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JoinCurvesOutput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
