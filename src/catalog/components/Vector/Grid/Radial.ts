import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Radial extends ResthopperComponent {

	public guid: string = "66eedc35-187d-4dab-b49b-408491b1255f";
	public name: string = "Radial";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D radial grid";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": RadialInput_Plane_P,
		"Size_S": RadialInput_Size_S,
		"ExtentR_Er": RadialInput_ExtentR_Er,
		"ExtentP_Ep": RadialInput_ExtentP_Ep,
	}

	public output:
	{
		"Cells_C": RadialOutput_Cells_C,
		"Points_P": RadialOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new RadialInput_Plane_P(),
			"Size_S": new RadialInput_Size_S(),
			"ExtentR_Er": new RadialInput_ExtentR_Er(),
			"ExtentP_Ep": new RadialInput_ExtentP_Ep(),
		}
		this.output = {
			"Cells_C": new RadialOutput_Cells_C(),
			"Points_P": new RadialOutput_Points_P(),
		}
	}

}

class RadialInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialInput_ExtentR_Er extends ResthopperParameter {

	public name: string = "ExtentR";
	public nickName: string = "Er";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialInput_ExtentP_Ep extends ResthopperParameter {

	public name: string = "ExtentP";
	public nickName: string = "Ep";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialOutput_Cells_C extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadialOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
