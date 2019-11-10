import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DomainBox extends ResthopperComponent {

	public guid: string = "79aa7f47-397c-4d3f-9761-aaf421bb7f5f";
	public name: string = "DomainBox";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box defined by a base plane and size domains.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Base_B": DomainBoxInput_Base_B,
		"X_X": DomainBoxInput_X_X,
		"Y_Y": DomainBoxInput_Y_Y,
		"Z_Z": DomainBoxInput_Z_Z,
	}

	public output:
	{
		"Box_B": DomainBoxOutput_Box_B,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new DomainBoxInput_Base_B(),
			"X_X": new DomainBoxInput_X_X(),
			"Y_Y": new DomainBoxInput_Y_Y(),
			"Z_Z": new DomainBoxInput_Z_Z(),
		}
		this.output = {
			"Box_B": new DomainBoxOutput_Box_B(),
		}
	}

}

class DomainBoxInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DomainBoxInput_X_X extends ResthopperParameter {

	public name: string = "X";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DomainBoxInput_Y_Y extends ResthopperParameter {

	public name: string = "Y";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DomainBoxInput_Z_Z extends ResthopperParameter {

	public name: string = "Z";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DomainBoxOutput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
