import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BiArc extends ResthopperComponent {

	public guid: string = "75f4b0fd-9721-47b1-99e7-9c098b342e67";
	public name: string = "BiArc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a bi-arc based on endpoints and tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"StartPoint_S": BiArcInput_StartPoint_S,
		"StartTangent_Ts": BiArcInput_StartTangent_Ts,
		"EndPoint_E": BiArcInput_EndPoint_E,
		"EndTangent_Te": BiArcInput_EndTangent_Te,
		"Ratio_R": BiArcInput_Ratio_R,
	}

	public output:
	{
		"Firstarc_A1": BiArcOutput_Firstarc_A1,
		"Secondarc_A2": BiArcOutput_Secondarc_A2,
		"BiArc_B": BiArcOutput_BiArc_B,
	}

	constructor() {
		super();
		this.input = {
			"StartPoint_S": new BiArcInput_StartPoint_S(),
			"StartTangent_Ts": new BiArcInput_StartTangent_Ts(),
			"EndPoint_E": new BiArcInput_EndPoint_E(),
			"EndTangent_Te": new BiArcInput_EndTangent_Te(),
			"Ratio_R": new BiArcInput_Ratio_R(),
		}
		this.output = {
			"Firstarc_A1": new BiArcOutput_Firstarc_A1(),
			"Secondarc_A2": new BiArcOutput_Secondarc_A2(),
			"BiArc_B": new BiArcOutput_BiArc_B(),
		}
	}

}

class BiArcInput_StartPoint_S extends ResthopperParameter {

	public name: string = "StartPoint";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcInput_StartTangent_Ts extends ResthopperParameter {

	public name: string = "StartTangent";
	public nickName: string = "Ts";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcInput_EndPoint_E extends ResthopperParameter {

	public name: string = "EndPoint";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcInput_EndTangent_Te extends ResthopperParameter {

	public name: string = "EndTangent";
	public nickName: string = "Te";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcInput_Ratio_R extends ResthopperParameter {

	public name: string = "Ratio";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcOutput_Firstarc_A1 extends ResthopperParameter {

	public name: string = "Firstarc";
	public nickName: string = "A1";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcOutput_Secondarc_A2 extends ResthopperParameter {

	public name: string = "Secondarc";
	public nickName: string = "A2";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcOutput_BiArc_B extends ResthopperParameter {

	public name: string = "BiArc";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
