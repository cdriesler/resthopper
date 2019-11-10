import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Isotrim extends ResthopperComponent {

	public guid: string = "6a9ccaab-1b03-484e-bbda-be9c81584a66";
	public name: string = "Isotrim";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Extract an isoparametric subset of a surface.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": IsotrimInput_surface_s,
		"domain_d": IsotrimInput_domain_d,
	}

	public output:
	{
		"surface_s": IsotrimOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new IsotrimInput_surface_s(),
			"domain_d": new IsotrimInput_domain_d(),
		}
		this.output = {
			"surface_s": new IsotrimOutput_surface_s(),
		}
	}

}

class IsotrimInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsotrimInput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain²"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsotrimOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
