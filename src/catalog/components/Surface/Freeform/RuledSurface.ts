import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RuledSurface extends ResthopperComponent {

	public guid: string = "6e5de495-ba76-42d0-9985-a5c265e9aeca";
	public name: string = "RuledSurface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface between two curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curvea_a": RuledSurfaceInput_curvea_a,
		"curveb_b": RuledSurfaceInput_curveb_b,
	}

	public output:
	{
		"surface_s": RuledSurfaceOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new RuledSurfaceInput_curvea_a(),
			"curveb_b": new RuledSurfaceInput_curveb_b(),
		}
		this.output = {
			"surface_s": new RuledSurfaceOutput_surface_s(),
		}
	}

}

class RuledSurfaceInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RuledSurfaceInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RuledSurfaceOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
