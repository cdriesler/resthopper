import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxMorph extends ResthopperComponent {

	public guid: string = "d8940ff0-dd4a-4e74-9361-54df537b50db";
	public name: string = "BoxMorph";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Morph an object into a twisted box.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": BoxMorphInput_Geometry_G,
		"Reference_R": BoxMorphInput_Reference_R,
		"Target_T": BoxMorphInput_Target_T,
	}

	public output:
	{
		"Geometry_G": BoxMorphOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new BoxMorphInput_Geometry_G(),
			"Reference_R": new BoxMorphInput_Reference_R(),
			"Target_T": new BoxMorphInput_Target_T(),
		}
		this.output = {
			"Geometry_G": new BoxMorphOutput_Geometry_G(),
		}
	}

}

class BoxMorphInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMorphInput_Reference_R extends ResthopperParameter {

	public name: string = "Reference";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMorphInput_Target_T extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Twisted Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMorphOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
