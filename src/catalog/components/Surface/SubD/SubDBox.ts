import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDBox extends ResthopperComponent {

	public guid: string = "10487e4e-a405-48b5-b188-5a8a6328418b";
	public name: string = "SubDBox";
	public nickName: string = "SubDBox";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Create a subdivision box";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"box_b": SubDBoxInput_box_b,
		"density_d": SubDBoxInput_density_d,
		"creases_c": SubDBoxInput_creases_c,
	}

	public output:
	{
		"subd_s": SubDBoxOutput_subd_s,
	}

	constructor() {
		super();
		this.input = {
			"box_b": new SubDBoxInput_box_b(),
			"density_d": new SubDBoxInput_density_d(),
			"creases_c": new SubDBoxInput_creases_c(),
		}
		this.output = {
			"subd_s": new SubDBoxOutput_subd_s(),
		}
	}

}

class SubDBoxInput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public description: string = "Empty Box parameter"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDBoxInput_density_d extends ResthopperParameter {

	public name: string = "Density";
	public nickName: string = "D";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDBoxInput_creases_c extends ResthopperParameter {

	public name: string = "Creases";
	public nickName: string = "C";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDBoxOutput_subd_s extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public description: string = "Empty SubD parameter"
	public isOptional: boolean = false;
	public typeName: string = "SubD"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
