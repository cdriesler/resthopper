import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Closed extends ResthopperComponent {

	public guid: string = "323f3245-af49-4489-8677-7a2c73664077";
	public name: string = "Closed";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test if a curve is closed or periodic.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": ClosedInput_Curve_C,
	}

	public output:
	{
		"Closed_C": ClosedOutput_Closed_C,
		"Periodic_P": ClosedOutput_Periodic_P,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ClosedInput_Curve_C(),
		}
		this.output = {
			"Closed_C": new ClosedOutput_Closed_C(),
			"Periodic_P": new ClosedOutput_Periodic_P(),
		}
	}

}

class ClosedInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedOutput_Closed_C extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedOutput_Periodic_P extends ResthopperParameter {

	public name: string = "Periodic";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
