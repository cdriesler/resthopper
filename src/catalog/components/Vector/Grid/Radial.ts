import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Radial extends ResthopperComponent {

	public guid: string = "66eedc35-187d-4dab-b49b-408491b1255f";
	public name: string = "Radial";
	public nickName: string = "RadGrid";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D radial grid";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": RadialInput_plane_p,
		"size_s": RadialInput_size_s,
		"extentr_er": RadialInput_extentr_er,
		"extentp_ep": RadialInput_extentp_ep,
	}

	public output:
	{
		"cells_c": RadialOutput_cells_c,
		"points_p": RadialOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new RadialInput_plane_p(),
			"size_s": new RadialInput_size_s(),
			"extentr_er": new RadialInput_extentr_er(),
			"extentp_ep": new RadialInput_extentp_ep(),
		}
		this.output = {
			"cells_c": new RadialOutput_cells_c(),
			"points_p": new RadialOutput_points_p(),
		}
	}

}

class RadialInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialInput_extentr_er extends ResthopperParameter {

	public name: string = "ExtentR";
	public nickName: string = "Er";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialInput_extentp_ep extends ResthopperParameter {

	public name: string = "ExtentP";
	public nickName: string = "Ep";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialOutput_cells_c extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
