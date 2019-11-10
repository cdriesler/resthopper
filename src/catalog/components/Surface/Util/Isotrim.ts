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

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": IsotrimInput_Surface_S,
		"Domain_D": IsotrimInput_Domain_D,
	}

	public output:
	{
		"Surface_S": IsotrimOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new IsotrimInput_Surface_S(),
			"Domain_D": new IsotrimInput_Domain_D(),
		}
		this.output = {
			"Surface_S": new IsotrimOutput_Surface_S(),
		}
	}

}

class IsotrimInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsotrimInput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain²;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsotrimOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
