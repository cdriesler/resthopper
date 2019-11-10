import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Rectangular extends ResthopperComponent {

	public guid: string = "1a25aae0-0b56-497a-85b2-cc5bf7e4b96b";
	public name: string = "Rectangular";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with rectangular cells";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": RectangularInput_Plane_P,
		"SizeX_Sx": RectangularInput_SizeX_Sx,
		"SizeY_Sy": RectangularInput_SizeY_Sy,
		"ExtentX_Ex": RectangularInput_ExtentX_Ex,
		"ExtentY_Ey": RectangularInput_ExtentY_Ey,
	}

	public output:
	{
		"Cells_C": RectangularOutput_Cells_C,
		"Points_P": RectangularOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new RectangularInput_Plane_P(),
			"SizeX_Sx": new RectangularInput_SizeX_Sx(),
			"SizeY_Sy": new RectangularInput_SizeY_Sy(),
			"ExtentX_Ex": new RectangularInput_ExtentX_Ex(),
			"ExtentY_Ey": new RectangularInput_ExtentY_Ey(),
		}
		this.output = {
			"Cells_C": new RectangularOutput_Cells_C(),
			"Points_P": new RectangularOutput_Points_P(),
		}
	}

}

class RectangularInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularInput_SizeX_Sx extends ResthopperParameter {

	public name: string = "SizeX";
	public nickName: string = "Sx";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularInput_SizeY_Sy extends ResthopperParameter {

	public name: string = "SizeY";
	public nickName: string = "Sy";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularInput_ExtentX_Ex extends ResthopperParameter {

	public name: string = "ExtentX";
	public nickName: string = "Ex";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularInput_ExtentY_Ey extends ResthopperParameter {

	public name: string = "ExtentY";
	public nickName: string = "Ey";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularOutput_Cells_C extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
