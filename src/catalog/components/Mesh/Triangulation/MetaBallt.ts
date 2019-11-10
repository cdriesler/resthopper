import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MetaBallt extends ResthopperComponent {

	public guid: string = "c48cf4d4-432c-41b6-b77a-77650479a31f";
	public name: string = "MetaBallt";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "2D Metaball isosurface by threshold";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Points_P": MetaBalltInput_Points_P,
		"Plane_Pl": MetaBalltInput_Plane_Pl,
		"Threshold_T": MetaBalltInput_Threshold_T,
		"Accuracy_A": MetaBalltInput_Accuracy_A,
	}

	public output:
	{
		"Isocurve_I": MetaBalltOutput_Isocurve_I,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new MetaBalltInput_Points_P(),
			"Plane_Pl": new MetaBalltInput_Plane_Pl(),
			"Threshold_T": new MetaBalltInput_Threshold_T(),
			"Accuracy_A": new MetaBalltInput_Accuracy_A(),
		}
		this.output = {
			"Isocurve_I": new MetaBalltOutput_Isocurve_I(),
		}
	}

}

class MetaBalltInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltInput_Threshold_T extends ResthopperParameter {

	public name: string = "Threshold";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltInput_Accuracy_A extends ResthopperParameter {

	public name: string = "Accuracy";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltOutput_Isocurve_I extends ResthopperParameter {

	public name: string = "Isocurve";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
