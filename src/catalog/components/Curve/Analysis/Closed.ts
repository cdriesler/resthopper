import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Closed extends ResthopperComponent {

	public guid: string = "323f3245-af49-4489-8677-7a2c73664077";
	public name: string = "Closed";
	public nickName: string = "Cls";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test if a curve is closed or periodic.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": ClosedInput_curve_c,
	}

	public output:
	{
		"closed_c": ClosedOutput_closed_c,
		"periodic_p": ClosedOutput_periodic_p,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ClosedInput_curve_c(),
		}
		this.output = {
			"closed_c": new ClosedOutput_closed_c(),
			"periodic_p": new ClosedOutput_periodic_p(),
		}
	}

}

class ClosedInput_curve_c extends ResthopperParameter {

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

class ClosedOutput_closed_c extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedOutput_periodic_p extends ResthopperParameter {

	public name: string = "Periodic";
	public nickName: string = "P";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
