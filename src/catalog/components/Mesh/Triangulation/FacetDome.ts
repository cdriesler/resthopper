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
		"Points_P": FacetDomeInput_Points_P,
		"Box_B": FacetDomeInput_Box_B,
		"Radius_R": FacetDomeInput_Radius_R,
	}

	public output:
	{
		"Pattern_P": FacetDomeOutput_Pattern_P,
		"Dome_D": FacetDomeOutput_Dome_D,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new FacetDomeInput_Points_P(),
			"Box_B": new FacetDomeInput_Box_B(),
			"Radius_R": new FacetDomeInput_Radius_R(),
		}
		this.output = {
			"Pattern_P": new FacetDomeOutput_Pattern_P(),
			"Dome_D": new FacetDomeOutput_Dome_D(),
		}
	}

}

class FacetDomeInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FacetDomeInput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FacetDomeInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FacetDomeOutput_Pattern_P extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FacetDomeOutput_Dome_D extends ResthopperParameter {

	public name: string = "Dome";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
