import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Torsion extends ResthopperComponent {

	public guid: string = "dbe9fce4-b6b3-465f-9615-34833c4763bd";
	public name: string = "Torsion";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the torsion of a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": TorsionInput_Curve_C,
		"Parameter_t": TorsionInput_Parameter_t,
	}

	public output:
	{
		"Point_P": TorsionOutput_Point_P,
		"Torsion_T": TorsionOutput_Torsion_T,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new TorsionInput_Curve_C(),
			"Parameter_t": new TorsionInput_Parameter_t(),
		}
		this.output = {
			"Point_P": new TorsionOutput_Point_P(),
			"Torsion_T": new TorsionOutput_Torsion_T(),
		}
	}

}

class TorsionInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TorsionInput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TorsionOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TorsionOutput_Torsion_T extends ResthopperParameter {

	public name: string = "Torsion";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
