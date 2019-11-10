import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructDomain extends ResthopperComponent {

	public guid: string = "f0adfc96-b175-46a6-80c7-2b0ee17395c4";
	public name: string = "DeconstructDomain";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Deconstruct a two-dimensional domain into its component parts";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Domain_I": DeconstructDomainInput_Domain_I,
	}

	public output:
	{
		"Ucomponent_U": DeconstructDomainOutput_Ucomponent_U,
		"Vcomponent_V": DeconstructDomainOutput_Vcomponent_V,
	}

	constructor() {
		super();
		this.input = {
			"Domain_I": new DeconstructDomainInput_Domain_I(),
		}
		this.output = {
			"Ucomponent_U": new DeconstructDomainOutput_Ucomponent_U(),
			"Vcomponent_V": new DeconstructDomainOutput_Vcomponent_V(),
		}
	}

}

class DeconstructDomainInput_Domain_I extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Domain²;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDomainOutput_Ucomponent_U extends ResthopperParameter {

	public name: string = "Ucomponent";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDomainOutput_Vcomponent_V extends ResthopperParameter {

	public name: string = "Vcomponent";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
