import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceBox extends ResthopperComponent {

	public guid: string = "4f65c681-9331-4818-9d54-6290cae686c3";
	public name: string = "SurfaceBox";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Create a twisted box on a surface patch.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Surface_S": SurfaceBoxInput_Surface_S,
		"Domain_D": SurfaceBoxInput_Domain_D,
		"Height_H": SurfaceBoxInput_Height_H,
	}

	public output:
	{
		"TwistedBox_B": SurfaceBoxOutput_TwistedBox_B,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new SurfaceBoxInput_Surface_S(),
			"Domain_D": new SurfaceBoxInput_Domain_D(),
			"Height_H": new SurfaceBoxInput_Height_H(),
		}
		this.output = {
			"TwistedBox_B": new SurfaceBoxOutput_TwistedBox_B(),
		}
	}

}

class SurfaceBoxInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceBoxInput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain²;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceBoxInput_Height_H extends ResthopperParameter {

	public name: string = "Height";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceBoxOutput_TwistedBox_B extends ResthopperParameter {

	public name: string = "TwistedBox";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Twisted Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
