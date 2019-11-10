import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FacetDome extends ResthopperComponent {

	public guid: string = "190c0070-8cbf-4347-94c2-d84bbb488d55";
	public name: string = "FacetDome";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Create a facetted dome";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": FacetDomeInput_points_p,
		"box_b": FacetDomeInput_box_b,
		"radius_r": FacetDomeInput_radius_r,
	}

	public output:
	{
		"pattern_p": FacetDomeOutput_pattern_p,
		"dome_d": FacetDomeOutput_dome_d,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new FacetDomeInput_points_p(),
			"box_b": new FacetDomeInput_box_b(),
			"radius_r": new FacetDomeInput_radius_r(),
		}
		this.output = {
			"pattern_p": new FacetDomeOutput_pattern_p(),
			"dome_d": new FacetDomeOutput_dome_d(),
		}
	}

}

class FacetDomeInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FacetDomeInput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FacetDomeInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FacetDomeOutput_pattern_p extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FacetDomeOutput_dome_d extends ResthopperParameter {

	public name: string = "Dome";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
