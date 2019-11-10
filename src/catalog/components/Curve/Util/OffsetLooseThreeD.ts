import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetLooseThreeD extends ResthopperComponent {

	public guid: string = "c6fe61e7-25e2-4333-9172-f4e2a123fcfe";
	public name: string = "OffsetLoose3D";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset the control-points of a curve with a specified distance in 3D.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": OffsetLooseThreeDInput_Curve_C,
		"Distance_D": OffsetLooseThreeDInput_Distance_D,
	}

	public output:
	{
		"Curve_C": OffsetLooseThreeDOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new OffsetLooseThreeDInput_Curve_C(),
			"Distance_D": new OffsetLooseThreeDInput_Distance_D(),
		}
		this.output = {
			"Curve_C": new OffsetLooseThreeDOutput_Curve_C(),
		}
	}

}

class OffsetLooseThreeDInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetLooseThreeDInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetLooseThreeDOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
