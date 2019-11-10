import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Area extends ResthopperComponent {

	public guid: string = "2e205f24-9279-47b2-b414-d06dcd0b21a7";
	public name: string = "Area";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Solve area properties for breps, meshes and planar closed curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Geometry_G": AreaInput_Geometry_G,
	}

	public output:
	{
		"Area_A": AreaOutput_Area_A,
		"Centroid_C": AreaOutput_Centroid_C,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new AreaInput_Geometry_G(),
		}
		this.output = {
			"Area_A": new AreaOutput_Area_A(),
			"Centroid_C": new AreaOutput_Centroid_C(),
		}
	}

}

class AreaInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaOutput_Area_A extends ResthopperParameter {

	public name: string = "Area";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaOutput_Centroid_C extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
