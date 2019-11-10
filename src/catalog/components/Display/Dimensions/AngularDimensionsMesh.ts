import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AngularDimensionsMesh extends ResthopperComponent {

	public guid: string = "91f3bde5-26e6-432e-a5fe-a2938b2a94f9";
	public name: string = "AngularDimensionsMesh";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create angle annotations for all mesh corners.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Mesh_M": AngularDimensionsMeshInput_Mesh_M,
		"Text_T": AngularDimensionsMeshInput_Text_T,
		"Size_S": AngularDimensionsMeshInput_Size_S,
		"LengthFactor_F": AngularDimensionsMeshInput_LengthFactor_F,
		"MinimumAngle_A0": AngularDimensionsMeshInput_MinimumAngle_A0,
		"MaximumAngle_A1": AngularDimensionsMeshInput_MaximumAngle_A1,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new AngularDimensionsMeshInput_Mesh_M(),
			"Text_T": new AngularDimensionsMeshInput_Text_T(),
			"Size_S": new AngularDimensionsMeshInput_Size_S(),
			"LengthFactor_F": new AngularDimensionsMeshInput_LengthFactor_F(),
			"MinimumAngle_A0": new AngularDimensionsMeshInput_MinimumAngle_A0(),
			"MaximumAngle_A1": new AngularDimensionsMeshInput_MaximumAngle_A1(),
		}
		this.output = {

		}
	}

}

class AngularDimensionsMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_LengthFactor_F extends ResthopperParameter {

	public name: string = "LengthFactor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_MinimumAngle_A0 extends ResthopperParameter {

	public name: string = "MinimumAngle";
	public nickName: string = "A0";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_MaximumAngle_A1 extends ResthopperParameter {

	public name: string = "MaximumAngle";
	public nickName: string = "A1";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
