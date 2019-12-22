import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorXYZ extends ResthopperComponent {

	public guid: string = "56b92eab-d121-43f7-94d3-6cd8f0ddead8";
	public name: string = "Vector XYZ";
	public nickName: string = "Vec";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Create a vector from {xyz} components.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"xcomponent_x": VectorXYZInput_xcomponent_x,
		"ycomponent_y": VectorXYZInput_ycomponent_y,
		"zcomponent_z": VectorXYZInput_zcomponent_z,
	}

	public output:
	{
		"vector_v": VectorXYZOutput_vector_v,
		"length_l": VectorXYZOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"xcomponent_x": new VectorXYZInput_xcomponent_x(),
			"ycomponent_y": new VectorXYZInput_ycomponent_y(),
			"zcomponent_z": new VectorXYZInput_zcomponent_z(),
		}
		this.output = {
			"vector_v": new VectorXYZOutput_vector_v(),
			"length_l": new VectorXYZOutput_length_l(),
		}
	}

}

class VectorXYZInput_xcomponent_x extends ResthopperParameter {

	public name: string = "Xcomponent";
	public nickName: string = "X";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorXYZInput_ycomponent_y extends ResthopperParameter {

	public name: string = "Ycomponent";
	public nickName: string = "Y";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorXYZInput_zcomponent_z extends ResthopperParameter {

	public name: string = "Zcomponent";
	public nickName: string = "Z";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorXYZOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorXYZOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
