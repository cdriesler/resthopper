import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MetaBall extends ResthopperComponent {

	public guid: string = "dc934310-67eb-4d1d-8607-7cc62a501dd9";
	public name: string = "MetaBall";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "2D Metaball isocurve through point";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Points_P": MetaBallInput_Points_P,
		"Plane_Pl": MetaBallInput_Plane_Pl,
		"Point_X": MetaBallInput_Point_X,
		"Accuracy_A": MetaBallInput_Accuracy_A,
	}

	public output:
	{
		"Isocurve_I": MetaBallOutput_Isocurve_I,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new MetaBallInput_Points_P(),
			"Plane_Pl": new MetaBallInput_Plane_Pl(),
			"Point_X": new MetaBallInput_Point_X(),
			"Accuracy_A": new MetaBallInput_Accuracy_A(),
		}
		this.output = {
			"Isocurve_I": new MetaBallOutput_Isocurve_I(),
		}
	}

}

class MetaBallInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBallInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBallInput_Point_X extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBallInput_Accuracy_A extends ResthopperParameter {

	public name: string = "Accuracy";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBallOutput_Isocurve_I extends ResthopperParameter {

	public name: string = "Isocurve";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
