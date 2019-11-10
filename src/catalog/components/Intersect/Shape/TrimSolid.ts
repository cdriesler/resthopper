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
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"shape_s": TrimSolidInput_shape_s,
		"cutters_t": TrimSolidInput_cutters_t,
	}

	public output:
	{
		"result_r": TrimSolidOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"shape_s": new TrimSolidInput_shape_s(),
			"cutters_t": new TrimSolidInput_cutters_t(),
		}
		this.output = {
			"result_r": new TrimSolidOutput_result_r(),
		}
	}

}

class TrimSolidInput_shape_s extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimSolidInput_cutters_t extends ResthopperParameter {

	public name: string = "Cutters";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimSolidOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
