import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoundaryVolume extends ResthopperComponent {

	public guid: string = "b57bf805-046a-4360-ad76-51aeddfe9720";
	public name: string = "BoundaryVolume";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Create a closed polysurface from boundary surfaces";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Boundaries_B": BoundaryVolumeInput_Boundaries_B,
	}

	public output:
	{
		"Solid_S": BoundaryVolumeOutput_Solid_S,
	}

	constructor() {
		super();
		this.input = {
			"Boundaries_B": new BoundaryVolumeInput_Boundaries_B(),
		}
		this.output = {
			"Solid_S": new BoundaryVolumeOutput_Solid_S(),
		}
	}

}

class BoundaryVolumeInput_Boundaries_B extends ResthopperParameter {

	public name: string = "Boundaries";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundaryVolumeOutput_Solid_S extends ResthopperParameter {

	public name: string = "Solid";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
