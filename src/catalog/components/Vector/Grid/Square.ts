import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Square extends ResthopperComponent {

	public guid: string = "717a1e25-a075-4530-bc80-d43ecc2500d9";
	public name: string = "Square";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with square cells";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": SquareInput_plane_p,
		"size_s": SquareInput_size_s,
		"extentx_ex": SquareInput_extentx_ex,
		"extenty_ey": SquareInput_extenty_ey,
	}

	public output:
	{
		"cells_c": SquareOutput_cells_c,
		"points_p": SquareOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new SquareInput_plane_p(),
			"size_s": new SquareInput_size_s(),
			"extentx_ex": new SquareInput_extentx_ex(),
			"extenty_ey": new SquareInput_extenty_ey(),
		}
		this.output = {
			"cells_c": new SquareOutput_cells_c(),
			"points_p": new SquareOutput_points_p(),
		}
	}

}

class SquareInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareInput_extentx_ex extends ResthopperParameter {

	public name: string = "ExtentX";
	public nickName: string = "Ex";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareInput_extenty_ey extends ResthopperParameter {

	public name: string = "ExtentY";
	public nickName: string = "Ey";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareOutput_cells_c extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
