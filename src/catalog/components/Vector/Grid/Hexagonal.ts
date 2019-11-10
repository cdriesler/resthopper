import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Hexagonal extends ResthopperComponent {

	public guid: string = "125dc122-8544-4617-945e-bb9a0c101c50";
	public name: string = "Hexagonal";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with hexagonal cells";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": HexagonalInput_plane_p,
		"size_s": HexagonalInput_size_s,
		"extentx_ex": HexagonalInput_extentx_ex,
		"extenty_ey": HexagonalInput_extenty_ey,
	}

	public output:
	{
		"cells_c": HexagonalOutput_cells_c,
		"points_p": HexagonalOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new HexagonalInput_plane_p(),
			"size_s": new HexagonalInput_size_s(),
			"extentx_ex": new HexagonalInput_extentx_ex(),
			"extenty_ey": new HexagonalInput_extenty_ey(),
		}
		this.output = {
			"cells_c": new HexagonalOutput_cells_c(),
			"points_p": new HexagonalOutput_points_p(),
		}
	}

}

class HexagonalInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalInput_extentx_ex extends ResthopperParameter {

	public name: string = "ExtentX";
	public nickName: string = "Ex";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalInput_extenty_ey extends ResthopperParameter {

	public name: string = "ExtentY";
	public nickName: string = "Ey";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalOutput_cells_c extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
