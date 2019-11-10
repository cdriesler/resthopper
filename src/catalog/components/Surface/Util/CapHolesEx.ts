import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CapHolesEx extends ResthopperComponent {

	public guid: string = "f6409a9c-3d2a-4b14-9f2c-e3c3f2cb72f8";
	public name: string = "CapHolesEx";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Cap as many holes as possible in a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": CapHolesExInput_Brep_B,
	}

	public output:
	{
		"Brep_B": CapHolesExOutput_Brep_B,
		"Caps_C": CapHolesExOutput_Caps_C,
		"Solid_S": CapHolesExOutput_Solid_S,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new CapHolesExInput_Brep_B(),
		}
		this.output = {
			"Brep_B": new CapHolesExOutput_Brep_B(),
			"Caps_C": new CapHolesExOutput_Caps_C(),
			"Solid_S": new CapHolesExOutput_Solid_S(),
		}
	}

}

class CapHolesExInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CapHolesExOutput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CapHolesExOutput_Caps_C extends ResthopperParameter {

	public name: string = "Caps";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CapHolesExOutput_Solid_S extends ResthopperParameter {

	public name: string = "Solid";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
