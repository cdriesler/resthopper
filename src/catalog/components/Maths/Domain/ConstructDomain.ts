import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructDomain extends ResthopperComponent {

	public guid: string = "9083b87f-a98c-4e41-9591-077ae4220b19";
	public name: string = "Construct Domain²";
	public nickName: string = "DomNum";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create a two-dimensinal domain from four numbers.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"umin_u0": ConstructDomainInput_umin_u0,
		"umax_u1": ConstructDomainInput_umax_u1,
		"vmin_v0": ConstructDomainInput_vmin_v0,
		"vmax_v1": ConstructDomainInput_vmax_v1,
	}

	public output:
	{
		"2ddomain_i": ConstructDomainOutput_2ddomain_i,
	}

	constructor() {
		super();
		this.input = {
			"umin_u0": new ConstructDomainInput_umin_u0(),
			"umax_u1": new ConstructDomainInput_umax_u1(),
			"vmin_v0": new ConstructDomainInput_vmin_v0(),
			"vmax_v1": new ConstructDomainInput_vmax_v1(),
		}
		this.output = {
			"2ddomain_i": new ConstructDomainOutput_2ddomain_i(),
		}
	}

}

class ConstructDomainInput_umin_u0 extends ResthopperParameter {

	public name: string = "Umin";
	public nickName: string = "U0";
	public description: string = "Lower limit of domain in {u} direction"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDomainInput_umax_u1 extends ResthopperParameter {

	public name: string = "Umax";
	public nickName: string = "U1";
	public description: string = "Upper limit of domain in {u} direction"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDomainInput_vmin_v0 extends ResthopperParameter {

	public name: string = "Vmin";
	public nickName: string = "V0";
	public description: string = "Lower limit of domain in {v} direction"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDomainInput_vmax_v1 extends ResthopperParameter {

	public name: string = "Vmax";
	public nickName: string = "V1";
	public description: string = "Upper limit of domain in {v} direction"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDomainOutput_2ddomain_i extends ResthopperParameter {

	public name: string = "2DDomain";
	public nickName: string = "I";
	public description: string = "Two dimensional numeric domain of {u} and {v}"
	public isOptional: boolean = false;
	public typeName: string = "Domain²"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
