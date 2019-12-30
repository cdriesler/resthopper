import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SumSurface extends ResthopperComponent {

	public guid: string = "5e33c760-adcd-4235-b1dd-05cf72eb7a38";
	public name: string = "Sum Surface";
	public nickName: string = "SumSrf";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a sum surface from two edge curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curvea_a": SumSurfaceInput_curvea_a,
		"curveb_b": SumSurfaceInput_curveb_b,
	}

	public output:
	{
		"surface_s": SumSurfaceOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new SumSurfaceInput_curvea_a(),
			"curveb_b": new SumSurfaceInput_curveb_b(),
		}
		this.output = {
			"surface_s": new SumSurfaceOutput_surface_s(),
		}
	}

}

class SumSurfaceInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public description: string = "First curve"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SumSurfaceInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public description: string = "Second curve"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SumSurfaceOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "BRep representing the sum-surface"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
