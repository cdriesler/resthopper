import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlendBox extends ResthopperComponent {

	public guid: string = "6283fb37-e273-4eb2-8d2a-e347881e3928";
	public name: string = "Blend Box";
	public nickName: string = "BlendBox";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Create a twisted box between two surfaces.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"surfacea_sa": BlendBoxInput_surfacea_sa,
		"domaina_da": BlendBoxInput_domaina_da,
		"surfaceb_sb": BlendBoxInput_surfaceb_sb,
		"domainb_db": BlendBoxInput_domainb_db,
	}

	public output:
	{
		"twistedbox_b": BlendBoxOutput_twistedbox_b,
	}

	constructor() {
		super();
		this.input = {
			"surfacea_sa": new BlendBoxInput_surfacea_sa(),
			"domaina_da": new BlendBoxInput_domaina_da(),
			"surfaceb_sb": new BlendBoxInput_surfaceb_sb(),
			"domainb_db": new BlendBoxInput_domainb_db(),
		}
		this.output = {
			"twistedbox_b": new BlendBoxOutput_twistedbox_b(),
		}
	}

}

class BlendBoxInput_surfacea_sa extends ResthopperParameter {

	public name: string = "SurfaceA";
	public nickName: string = "Sa";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendBoxInput_domaina_da extends ResthopperParameter {

	public name: string = "DomainA";
	public nickName: string = "Da";
	public description: string = "Empty Domain² parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain²"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendBoxInput_surfaceb_sb extends ResthopperParameter {

	public name: string = "SurfaceB";
	public nickName: string = "Sb";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendBoxInput_domainb_db extends ResthopperParameter {

	public name: string = "DomainB";
	public nickName: string = "Db";
	public description: string = "Empty Domain² parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain²"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendBoxOutput_twistedbox_b extends ResthopperParameter {

	public name: string = "TwistedBox";
	public nickName: string = "B";
	public description: string = "Empty Twisted Box parameter"
	public isOptional: boolean = false;
	public typeName: string = "Twisted Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
