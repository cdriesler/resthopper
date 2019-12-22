import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceBox extends ResthopperComponent {

	public guid: string = "4f65c681-9331-4818-9d54-6290cae686c3";
	public name: string = "Surface Box";
	public nickName: string = "SBox";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Create a twisted box on a surface patch.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"surface_s": SurfaceBoxInput_surface_s,
		"domain_d": SurfaceBoxInput_domain_d,
		"height_h": SurfaceBoxInput_height_h,
	}

	public output:
	{
		"twistedbox_b": SurfaceBoxOutput_twistedbox_b,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new SurfaceBoxInput_surface_s(),
			"domain_d": new SurfaceBoxInput_domain_d(),
			"height_h": new SurfaceBoxInput_height_h(),
		}
		this.output = {
			"twistedbox_b": new SurfaceBoxOutput_twistedbox_b(),
		}
	}

}

class SurfaceBoxInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceBoxInput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public description: string = "Empty Domain² parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain²"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceBoxInput_height_h extends ResthopperParameter {

	public name: string = "Height";
	public nickName: string = "H";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceBoxOutput_twistedbox_b extends ResthopperParameter {

	public name: string = "TwistedBox";
	public nickName: string = "B";
	public description: string = "Empty Twisted Box parameter"
	public isOptional: boolean = false;
	public typeName: string = "Twisted Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
