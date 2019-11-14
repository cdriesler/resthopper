import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AngularDimensionsMesh extends ResthopperComponent {

	public guid: string = "91f3bde5-26e6-432e-a5fe-a2938b2a94f9";
	public name: string = "AngularDimensionsMesh";
	public nickName: string = "AngleDimMesh";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create angle annotations for all mesh corners.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"mesh_m": AngularDimensionsMeshInput_mesh_m,
		"text_t": AngularDimensionsMeshInput_text_t,
		"size_s": AngularDimensionsMeshInput_size_s,
		"lengthfactor_f": AngularDimensionsMeshInput_lengthfactor_f,
		"minimumangle_a0": AngularDimensionsMeshInput_minimumangle_a0,
		"maximumangle_a1": AngularDimensionsMeshInput_maximumangle_a1,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new AngularDimensionsMeshInput_mesh_m(),
			"text_t": new AngularDimensionsMeshInput_text_t(),
			"size_s": new AngularDimensionsMeshInput_size_s(),
			"lengthfactor_f": new AngularDimensionsMeshInput_lengthfactor_f(),
			"minimumangle_a0": new AngularDimensionsMeshInput_minimumangle_a0(),
			"maximumangle_a1": new AngularDimensionsMeshInput_maximumangle_a1(),
		}
		this.output = {

		}
	}

}

class AngularDimensionsMeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_lengthfactor_f extends ResthopperParameter {

	public name: string = "LengthFactor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_minimumangle_a0 extends ResthopperParameter {

	public name: string = "MinimumAngle";
	public nickName: string = "A0";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionsMeshInput_maximumangle_a1 extends ResthopperParameter {

	public name: string = "MaximumAngle";
	public nickName: string = "A1";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
