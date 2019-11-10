import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ModifiedArc extends ResthopperComponent {

	public guid: string = "9d8dec9c-3fd1-481c-9c3d-75ea5e15eb1a";
	public name: string = "ModifiedArc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc based on another arc.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Angle_A": ModifiedArcInput_Angle_A,
		"Radius_R": ModifiedArcInput_Radius_R,
	}

	public output:
	{
		"Arc_A": ModifiedArcOutput_Arc_A,
	}

	constructor() {
		super();
		this.input = {
			"Angle_A": new ModifiedArcInput_Angle_A(),
			"Radius_R": new ModifiedArcInput_Radius_R(),
		}
		this.output = {
			"Arc_A": new ModifiedArcOutput_Arc_A(),
		}
	}

}

class ModifiedArcInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ModifiedArcInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ModifiedArcOutput_Arc_A extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
