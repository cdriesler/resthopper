import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Project extends ResthopperComponent {

	public guid: string = "d7ee52ff-89b8-4d1a-8662-3e0dd391d0af";
	public name: string = "Project";
	public nickName: string = "Project";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Project a curve onto a Brep.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": ProjectInput_curve_c,
		"brep_b": ProjectInput_brep_b,
		"direction_d": ProjectInput_direction_d,
	}

	public output:
	{
		"curve_c": ProjectOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ProjectInput_curve_c(),
			"brep_b": new ProjectInput_brep_b(),
			"direction_d": new ProjectInput_direction_d(),
		}
		this.output = {
			"curve_c": new ProjectOutput_curve_c(),
		}
	}

}

class ProjectInput_curve_c extends ResthopperParameter {

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

class ProjectInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectInput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectOutput_curve_c extends ResthopperParameter {

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
