import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MetaBalltCustom extends ResthopperComponent {

	public guid: string = "c4373505-a4cf-4992-8db1-fd6e6bb5850d";
	public name: string = "MetaBalltCustom";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "2D Metaball isosurface by threshold and custom charge values";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Points_P": MetaBalltCustomInput_Points_P,
		"Charge_C": MetaBalltCustomInput_Charge_C,
		"Plane_Pl": MetaBalltCustomInput_Plane_Pl,
		"Threshold_T": MetaBalltCustomInput_Threshold_T,
		"Accuracy_A": MetaBalltCustomInput_Accuracy_A,
	}

	public output:
	{
		"Isocurve_I": MetaBalltCustomOutput_Isocurve_I,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new MetaBalltCustomInput_Points_P(),
			"Charge_C": new MetaBalltCustomInput_Charge_C(),
			"Plane_Pl": new MetaBalltCustomInput_Plane_Pl(),
			"Threshold_T": new MetaBalltCustomInput_Threshold_T(),
			"Accuracy_A": new MetaBalltCustomInput_Accuracy_A(),
		}
		this.output = {
			"Isocurve_I": new MetaBalltCustomOutput_Isocurve_I(),
		}
	}

}

class MetaBalltCustomInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomInput_Charge_C extends ResthopperParameter {

	public name: string = "Charge";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomInput_Threshold_T extends ResthopperParameter {

	public name: string = "Threshold";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomInput_Accuracy_A extends ResthopperParameter {

	public name: string = "Accuracy";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomOutput_Isocurve_I extends ResthopperParameter {

	public name: string = "Isocurve";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
