import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructDomain extends ResthopperComponent {

	public guid: string = "f0adfc96-b175-46a6-80c7-2b0ee17395c4";
	public name: string = "DeconstructDomain";
	public nickName: string = "DeDom2";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Deconstruct a two-dimensional domain into its component parts";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"domain_i": DeconstructDomainInput_domain_i,
	}

	public output:
	{
		"ucomponent_u": DeconstructDomainOutput_ucomponent_u,
		"vcomponent_v": DeconstructDomainOutput_vcomponent_v,
	}

	constructor() {
		super();
		this.input = {
			"domain_i": new DeconstructDomainInput_domain_i(),
		}
		this.output = {
			"ucomponent_u": new DeconstructDomainOutput_ucomponent_u(),
			"vcomponent_v": new DeconstructDomainOutput_vcomponent_v(),
		}
	}

}

class DeconstructDomainInput_domain_i extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public description: string = "Empty Domain² parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain²"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDomainOutput_ucomponent_u extends ResthopperParameter {

	public name: string = "Ucomponent";
	public nickName: string = "U";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDomainOutput_vcomponent_v extends ResthopperParameter {

	public name: string = "Vcomponent";
	public nickName: string = "V";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
