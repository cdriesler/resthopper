import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FaceCircles extends ResthopperComponent {

	public guid: string = "d8cf1555-a0d5-43cb-8a10-46f8c014db3a";
	public name: string = "FaceCircles";
	public nickName: string = "FaceC";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Solve the circumscribed circles for all mesh faces";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": FaceCirclesInput_mesh_m,
	}

	public output:
	{
		"centers_c": FaceCirclesOutput_centers_c,
		"ratio_r": FaceCirclesOutput_ratio_r,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new FaceCirclesInput_mesh_m(),
		}
		this.output = {
			"centers_c": new FaceCirclesOutput_centers_c(),
			"ratio_r": new FaceCirclesOutput_ratio_r(),
		}
	}

}

class FaceCirclesInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceCirclesOutput_centers_c extends ResthopperParameter {

	public name: string = "Centers";
	public nickName: string = "C";
	public description: string = "Empty Circle parameter"
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceCirclesOutput_ratio_r extends ResthopperParameter {

	public name: string = "Ratio";
	public nickName: string = "R";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
