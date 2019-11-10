import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Triangular extends ResthopperComponent {

	public guid: string = "86a9944b-dea5-4126-9433-9e95ff07927a";
	public name: string = "Triangular";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with triangular cells";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": TriangularInput_Plane_P,
		"Size_S": TriangularInput_Size_S,
		"ExtentX_Ex": TriangularInput_ExtentX_Ex,
		"ExtentY_Ey": TriangularInput_ExtentY_Ey,
	}

	public output:
	{
		"Cells_C": TriangularOutput_Cells_C,
		"Points_P": TriangularOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new TriangularInput_Plane_P(),
			"Size_S": new TriangularInput_Size_S(),
			"ExtentX_Ex": new TriangularInput_ExtentX_Ex(),
			"ExtentY_Ey": new TriangularInput_ExtentY_Ey(),
		}
		this.output = {
			"Cells_C": new TriangularOutput_Cells_C(),
			"Points_P": new TriangularOutput_Points_P(),
		}
	}

}

class TriangularInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularInput_ExtentX_Ex extends ResthopperParameter {

	public name: string = "ExtentX";
	public nickName: string = "Ex";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularInput_ExtentY_Ey extends ResthopperParameter {

	public name: string = "ExtentY";
	public nickName: string = "Ey";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularOutput_Cells_C extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangularOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
