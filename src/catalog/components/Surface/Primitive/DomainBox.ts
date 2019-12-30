import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DomainBox extends ResthopperComponent {

	public guid: string = "79aa7f47-397c-4d3f-9761-aaf421bb7f5f";
	public name: string = "Domain Box";
	public nickName: string = "Box";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box defined by a base plane and size domains.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"base_b": DomainBoxInput_base_b,
		"x_x": DomainBoxInput_x_x,
		"y_y": DomainBoxInput_y_y,
		"z_z": DomainBoxInput_z_z,
	}

	public output:
	{
		"box_b": DomainBoxOutput_box_b,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new DomainBoxInput_base_b(),
			"x_x": new DomainBoxInput_x_x(),
			"y_y": new DomainBoxInput_y_y(),
			"z_z": new DomainBoxInput_z_z(),
		}
		this.output = {
			"box_b": new DomainBoxOutput_box_b(),
		}
	}

}

class DomainBoxInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public description: string = "Base plane"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DomainBoxInput_x_x extends ResthopperParameter {

	public name: string = "X";
	public nickName: string = "X";
	public description: string = "Domain of the box in the {x} direction."
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DomainBoxInput_y_y extends ResthopperParameter {

	public name: string = "Y";
	public nickName: string = "Y";
	public description: string = "Domain of the box in the {y} direction."
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DomainBoxInput_z_z extends ResthopperParameter {

	public name: string = "Z";
	public nickName: string = "Z";
	public description: string = "Domain of the box in the {z} direction."
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DomainBoxOutput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public description: string = "Resulting box"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
