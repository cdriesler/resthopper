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
		"Plane_P": SquareInput_Plane_P,
		"Size_S": SquareInput_Size_S,
		"ExtentX_Ex": SquareInput_ExtentX_Ex,
		"ExtentY_Ey": SquareInput_ExtentY_Ey,
	}

	public output:
	{
		"Cells_C": SquareOutput_Cells_C,
		"Points_P": SquareOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new SquareInput_Plane_P(),
			"Size_S": new SquareInput_Size_S(),
			"ExtentX_Ex": new SquareInput_ExtentX_Ex(),
			"ExtentY_Ey": new SquareInput_ExtentY_Ey(),
		}
		this.output = {
			"Cells_C": new SquareOutput_Cells_C(),
			"Points_P": new SquareOutput_Points_P(),
		}
	}

}

class SquareInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareInput_ExtentX_Ex extends ResthopperParameter {

	public name: string = "ExtentX";
	public nickName: string = "Ex";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareInput_ExtentY_Ey extends ResthopperParameter {

	public name: string = "ExtentY";
	public nickName: string = "Ey";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareOutput_Cells_C extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
