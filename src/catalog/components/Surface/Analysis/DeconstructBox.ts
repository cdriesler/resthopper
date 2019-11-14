import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructBox extends ResthopperComponent {

	public guid: string = "db7d83b1-2898-4ef9-9be5-4e94b4e2048d";
	public name: string = "DeconstructBox";
	public nickName: string = "DeBox";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a box into its constituent parts.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"box_b": DeconstructBoxInput_box_b,
	}

	public output:
	{
		"plane_p": DeconstructBoxOutput_plane_p,
		"x_x": DeconstructBoxOutput_x_x,
		"y_y": DeconstructBoxOutput_y_y,
		"z_z": DeconstructBoxOutput_z_z,
	}

	constructor() {
		super();
		this.input = {
			"box_b": new DeconstructBoxInput_box_b(),
		}
		this.output = {
			"plane_p": new DeconstructBoxOutput_plane_p(),
			"x_x": new DeconstructBoxOutput_x_x(),
			"y_y": new DeconstructBoxOutput_y_y(),
			"z_z": new DeconstructBoxOutput_z_z(),
		}
	}

}

class DeconstructBoxInput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBoxOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBoxOutput_x_x extends ResthopperParameter {

	public name: string = "X";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBoxOutput_y_y extends ResthopperParameter {

	public name: string = "Y";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBoxOutput_z_z extends ResthopperParameter {

	public name: string = "Z";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
