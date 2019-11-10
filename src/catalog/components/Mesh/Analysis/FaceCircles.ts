import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FaceCircles extends ResthopperComponent {

	public guid: string = "d8cf1555-a0d5-43cb-8a10-46f8c014db3a";
	public name: string = "FaceCircles";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Solve the circumscribed circles for all mesh faces";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": FaceCirclesInput_Mesh_M,
	}

	public output:
	{
		"Centers_C": FaceCirclesOutput_Centers_C,
		"Ratio_R": FaceCirclesOutput_Ratio_R,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new FaceCirclesInput_Mesh_M(),
		}
		this.output = {
			"Centers_C": new FaceCirclesOutput_Centers_C(),
			"Ratio_R": new FaceCirclesOutput_Ratio_R(),
		}
	}

}

class FaceCirclesInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceCirclesOutput_Centers_C extends ResthopperParameter {

	public name: string = "Centers";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceCirclesOutput_Ratio_R extends ResthopperParameter {

	public name: string = "Ratio";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
