import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlendBox extends ResthopperComponent {

	public guid: string = "6283fb37-e273-4eb2-8d2a-e347881e3928";
	public name: string = "BlendBox";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Create a twisted box between two surfaces.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"SurfaceA_Sa": BlendBoxInput_SurfaceA_Sa,
		"DomainA_Da": BlendBoxInput_DomainA_Da,
		"SurfaceB_Sb": BlendBoxInput_SurfaceB_Sb,
		"DomainB_Db": BlendBoxInput_DomainB_Db,
	}

	public output:
	{
		"TwistedBox_B": BlendBoxOutput_TwistedBox_B,
	}

	constructor() {
		super();
		this.input = {
			"SurfaceA_Sa": new BlendBoxInput_SurfaceA_Sa(),
			"DomainA_Da": new BlendBoxInput_DomainA_Da(),
			"SurfaceB_Sb": new BlendBoxInput_SurfaceB_Sb(),
			"DomainB_Db": new BlendBoxInput_DomainB_Db(),
		}
		this.output = {
			"TwistedBox_B": new BlendBoxOutput_TwistedBox_B(),
		}
	}

}

class BlendBoxInput_SurfaceA_Sa extends ResthopperParameter {

	public name: string = "SurfaceA";
	public nickName: string = "Sa";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendBoxInput_DomainA_Da extends ResthopperParameter {

	public name: string = "DomainA";
	public nickName: string = "Da";
	public isOptional: boolean = false;
	public typeName: string = "Domain²;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendBoxInput_SurfaceB_Sb extends ResthopperParameter {

	public name: string = "SurfaceB";
	public nickName: string = "Sb";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendBoxInput_DomainB_Db extends ResthopperParameter {

	public name: string = "DomainB";
	public nickName: string = "Db";
	public isOptional: boolean = false;
	public typeName: string = "Domain²;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendBoxOutput_TwistedBox_B extends ResthopperParameter {

	public name: string = "TwistedBox";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Twisted Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
