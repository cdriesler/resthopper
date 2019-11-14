import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoundaryVolume extends ResthopperComponent {

	public guid: string = "b57bf805-046a-4360-ad76-51aeddfe9720";
	public name: string = "BoundaryVolume";
	public nickName: string = "BVol";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Create a closed polysurface from boundary surfaces";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"boundaries_b": BoundaryVolumeInput_boundaries_b,
	}

	public output:
	{
		"solid_s": BoundaryVolumeOutput_solid_s,
	}

	constructor() {
		super();
		this.input = {
			"boundaries_b": new BoundaryVolumeInput_boundaries_b(),
		}
		this.output = {
			"solid_s": new BoundaryVolumeOutput_solid_s(),
		}
	}

}

class BoundaryVolumeInput_boundaries_b extends ResthopperParameter {

	public name: string = "Boundaries";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundaryVolumeOutput_solid_s extends ResthopperParameter {

	public name: string = "Solid";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
