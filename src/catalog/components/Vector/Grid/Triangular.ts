import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Triangular extends ResthopperComponent {

	public guid: string = "86a9944b-dea5-4126-9433-9e95ff07927a";
	public name: string = "Triangular";
	public nickName: string = "TriGrid";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with triangular cells";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": TriangularInput_plane_p,
		"size_s": TriangularInput_size_s,
		"extentx_ex": TriangularInput_extentx_ex,
		"extenty_ey": TriangularInput_extenty_ey,
	}

	public output:
	{
		"cells_c": TriangularOutput_cells_c,
		"points_p": TriangularOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new TriangularInput_plane_p(),
			"size_s": new TriangularInput_size_s(),
			"extentx_ex": new TriangularInput_extentx_ex(),
			"extenty_ey": new TriangularInput_extenty_ey(),
		}
		this.output = {
			"cells_c": new TriangularOutput_cells_c(),
			"points_p": new TriangularOutput_points_p(),
		}
	}

}

class TriangularInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularInput_extentx_ex extends ResthopperParameter {

	public name: string = "ExtentX";
	public nickName: string = "Ex";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularInput_extenty_ey extends ResthopperParameter {

	public name: string = "ExtentY";
	public nickName: string = "Ey";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularOutput_cells_c extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
