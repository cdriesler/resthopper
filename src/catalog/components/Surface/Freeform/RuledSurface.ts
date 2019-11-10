import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RuledSurface extends ResthopperComponent {

	public guid: string = "6e5de495-ba76-42d0-9985-a5c265e9aeca";
	public name: string = "RuledSurface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface between two curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"CurveA_A": RuledSurfaceInput_CurveA_A,
		"CurveB_B": RuledSurfaceInput_CurveB_B,
	}

	public output:
	{
		"Surface_S": RuledSurfaceOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new RuledSurfaceInput_CurveA_A(),
			"CurveB_B": new RuledSurfaceInput_CurveB_B(),
		}
		this.output = {
			"Surface_S": new RuledSurfaceOutput_Surface_S(),
		}
	}

}

class RuledSurfaceInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RuledSurfaceInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RuledSurfaceOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
