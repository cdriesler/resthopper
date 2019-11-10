import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FilletDistance extends ResthopperComponent {

	public guid: string = "6fb21315-a032-400e-a80f-248687f5507f";
	public name: string = "FilletDistance";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Fillet the sharp corners of a curve by distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": FilletDistanceInput_Curve_C,
		"Distance_D": FilletDistanceInput_Distance_D,
	}

	public output:
	{
		"Curve_C": FilletDistanceOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new FilletDistanceInput_Curve_C(),
			"Distance_D": new FilletDistanceInput_Distance_D(),
		}
		this.output = {
			"Curve_C": new FilletDistanceOutput_Curve_C(),
		}
	}

}

class FilletDistanceInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletDistanceInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletDistanceOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
