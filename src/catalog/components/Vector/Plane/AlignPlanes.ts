import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AlignPlanes extends ResthopperComponent {

	public guid: string = "2318aee8-01fe-4ea8-9524-6966023fc622";
	public name: string = "AlignPlanes";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Align planes by minimizing their serial rotation.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"planes_p": AlignPlanesInput_planes_p,
		"master_m": AlignPlanesInput_master_m,
	}

	public output:
	{
		"planes_p": AlignPlanesOutput_planes_p,
	}

	constructor() {
		super();
		this.input = {
			"planes_p": new AlignPlanesInput_planes_p(),
			"master_m": new AlignPlanesInput_master_m(),
		}
		this.output = {
			"planes_p": new AlignPlanesOutput_planes_p(),
		}
	}

}

class AlignPlanesInput_planes_p extends ResthopperParameter {

	public name: string = "Planes";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlanesInput_master_m extends ResthopperParameter {

	public name: string = "Master";
	public nickName: string = "M";
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlanesOutput_planes_p extends ResthopperParameter {

	public name: string = "Planes";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
