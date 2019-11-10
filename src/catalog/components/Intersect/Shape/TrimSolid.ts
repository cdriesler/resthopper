import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimSolid extends ResthopperComponent {

	public guid: string = "f0b70e8e-7337-4ce4-a7bb-317fc971f918";
	public name: string = "TrimSolid";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Cut holes into a shape with a set of solid cutters.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Shape_S": TrimSolidInput_Shape_S,
		"Cutters_T": TrimSolidInput_Cutters_T,
	}

	public output:
	{
		"Result_R": TrimSolidOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Shape_S": new TrimSolidInput_Shape_S(),
			"Cutters_T": new TrimSolidInput_Cutters_T(),
		}
		this.output = {
			"Result_R": new TrimSolidOutput_Result_R(),
		}
	}

}

class TrimSolidInput_Shape_S extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimSolidInput_Cutters_T extends ResthopperParameter {

	public name: string = "Cutters";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimSolidOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
