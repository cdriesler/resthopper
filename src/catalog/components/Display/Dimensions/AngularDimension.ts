import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AngularDimension extends ResthopperComponent {

	public guid: string = "fc6b519e-df6d-4ce1-a1f4-083f1c217c14";
	public name: string = "AngularDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create an angle annotation between points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Center_C": AngularDimensionInput_Center_C,
		"PointA_A": AngularDimensionInput_PointA_A,
		"PointB_B": AngularDimensionInput_PointB_B,
		"Reflex_R": AngularDimensionInput_Reflex_R,
		"Text_T": AngularDimensionInput_Text_T,
		"Size_S": AngularDimensionInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Center_C": new AngularDimensionInput_Center_C(),
			"PointA_A": new AngularDimensionInput_PointA_A(),
			"PointB_B": new AngularDimensionInput_PointB_B(),
			"Reflex_R": new AngularDimensionInput_Reflex_R(),
			"Text_T": new AngularDimensionInput_Text_T(),
			"Size_S": new AngularDimensionInput_Size_S(),
		}
		this.output = {

		}
	}

}

class AngularDimensionInput_Center_C extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_Reflex_R extends ResthopperParameter {

	public name: string = "Reflex";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
