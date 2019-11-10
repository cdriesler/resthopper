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

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": HexagonalInput_Plane_P,
		"Size_S": HexagonalInput_Size_S,
		"ExtentX_Ex": HexagonalInput_ExtentX_Ex,
		"ExtentY_Ey": HexagonalInput_ExtentY_Ey,
	}

	public output:
	{
		"Cells_C": HexagonalOutput_Cells_C,
		"Points_P": HexagonalOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new HexagonalInput_Plane_P(),
			"Size_S": new HexagonalInput_Size_S(),
			"ExtentX_Ex": new HexagonalInput_ExtentX_Ex(),
			"ExtentY_Ey": new HexagonalInput_ExtentY_Ey(),
		}
		this.output = {
			"Cells_C": new HexagonalOutput_Cells_C(),
			"Points_P": new HexagonalOutput_Points_P(),
		}
	}

}

class HexagonalInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalInput_ExtentX_Ex extends ResthopperParameter {

	public name: string = "ExtentX";
	public nickName: string = "Ex";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalInput_ExtentY_Ey extends ResthopperParameter {

	public name: string = "ExtentY";
	public nickName: string = "Ey";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalOutput_Cells_C extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HexagonalOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
