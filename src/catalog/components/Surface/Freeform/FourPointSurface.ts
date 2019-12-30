import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FourPointSurface extends ResthopperComponent {

	public guid: string = "c77a8b3b-c569-4d81-9b59-1c27299a1c45";
	public name: string = "4Point Surface";
	public nickName: string = "Srf4Pt";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface connecting three or four corner points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"cornera_a": FourPointSurfaceInput_cornera_a,
		"cornerb_b": FourPointSurfaceInput_cornerb_b,
		"cornerc_c": FourPointSurfaceInput_cornerc_c,
		"cornerd_d": FourPointSurfaceInput_cornerd_d,
	}

	public output:
	{
		"surface_s": FourPointSurfaceOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"cornera_a": new FourPointSurfaceInput_cornera_a(),
			"cornerb_b": new FourPointSurfaceInput_cornerb_b(),
			"cornerc_c": new FourPointSurfaceInput_cornerc_c(),
			"cornerd_d": new FourPointSurfaceInput_cornerd_d(),
		}
		this.output = {
			"surface_s": new FourPointSurfaceOutput_surface_s(),
		}
	}

}

class FourPointSurfaceInput_cornera_a extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public description: string = "First corner"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FourPointSurfaceInput_cornerb_b extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public description: string = "Second corner"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FourPointSurfaceInput_cornerc_c extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public description: string = "Third corner"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FourPointSurfaceInput_cornerd_d extends ResthopperParameter {

	public name: string = "CornerD";
	public nickName: string = "D";
	public description: string = "Optional fourth corner"
	public isOptional: boolean = true;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FourPointSurfaceOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Resulting surface"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
