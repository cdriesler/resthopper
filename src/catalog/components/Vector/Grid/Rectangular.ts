import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Rectangular extends ResthopperComponent {

	public guid: string = "1a25aae0-0b56-497a-85b2-cc5bf7e4b96b";
	public name: string = "Rectangular";
	public nickName: string = "RecGrid";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with rectangular cells";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": RectangularInput_plane_p,
		"sizex_sx": RectangularInput_sizex_sx,
		"sizey_sy": RectangularInput_sizey_sy,
		"extentx_ex": RectangularInput_extentx_ex,
		"extenty_ey": RectangularInput_extenty_ey,
	}

	public output:
	{
		"cells_c": RectangularOutput_cells_c,
		"points_p": RectangularOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new RectangularInput_plane_p(),
			"sizex_sx": new RectangularInput_sizex_sx(),
			"sizey_sy": new RectangularInput_sizey_sy(),
			"extentx_ex": new RectangularInput_extentx_ex(),
			"extenty_ey": new RectangularInput_extenty_ey(),
		}
		this.output = {
			"cells_c": new RectangularOutput_cells_c(),
			"points_p": new RectangularOutput_points_p(),
		}
	}

}

class RectangularInput_plane_p extends ResthopperParameter {

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

class RectangularInput_sizex_sx extends ResthopperParameter {

	public name: string = "SizeX";
	public nickName: string = "Sx";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularInput_sizey_sy extends ResthopperParameter {

	public name: string = "SizeY";
	public nickName: string = "Sy";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularInput_extentx_ex extends ResthopperParameter {

	public name: string = "ExtentX";
	public nickName: string = "Ex";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularInput_extenty_ey extends ResthopperParameter {

	public name: string = "ExtentY";
	public nickName: string = "Ey";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularOutput_cells_c extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public description: string = "Empty Rectangle parameter"
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularOutput_points_p extends ResthopperParameter {

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
