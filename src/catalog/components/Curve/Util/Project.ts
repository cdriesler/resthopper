import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Project extends ResthopperComponent {

	public guid: string = "d7ee52ff-89b8-4d1a-8662-3e0dd391d0af";
	public name: string = "Project";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Project a curve onto a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": ProjectInput_Curve_C,
		"Brep_B": ProjectInput_Brep_B,
		"Direction_D": ProjectInput_Direction_D,
	}

	public output:
	{
		"Curve_C": ProjectOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ProjectInput_Curve_C(),
			"Brep_B": new ProjectInput_Brep_B(),
			"Direction_D": new ProjectInput_Direction_D(),
		}
		this.output = {
			"Curve_C": new ProjectOutput_Curve_C(),
		}
	}

}

class ProjectInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectInput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
