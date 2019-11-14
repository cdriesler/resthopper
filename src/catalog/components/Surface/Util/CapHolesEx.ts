import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CapHolesEx extends ResthopperComponent {

	public guid: string = "f6409a9c-3d2a-4b14-9f2c-e3c3f2cb72f8";
	public name: string = "CapHolesEx";
	public nickName: string = "CapEx";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Cap as many holes as possible in a Brep.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": CapHolesExInput_brep_b,
	}

	public output:
	{
		"brep_b": CapHolesExOutput_brep_b,
		"caps_c": CapHolesExOutput_caps_c,
		"solid_s": CapHolesExOutput_solid_s,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new CapHolesExInput_brep_b(),
		}
		this.output = {
			"brep_b": new CapHolesExOutput_brep_b(),
			"caps_c": new CapHolesExOutput_caps_c(),
			"solid_s": new CapHolesExOutput_solid_s(),
		}
	}

}

class CapHolesExInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CapHolesExOutput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CapHolesExOutput_caps_c extends ResthopperParameter {

	public name: string = "Caps";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CapHolesExOutput_solid_s extends ResthopperParameter {

	public name: string = "Solid";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
