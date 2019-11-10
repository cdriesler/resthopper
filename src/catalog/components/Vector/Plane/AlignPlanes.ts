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

	public library: string = "Vector Components";

	public input:
	{
		"Planes_P": AlignPlanesInput_Planes_P,
		"Master_M": AlignPlanesInput_Master_M,
	}

	public output:
	{
		"Planes_P": AlignPlanesOutput_Planes_P,
	}

	constructor() {
		super();
		this.input = {
			"Planes_P": new AlignPlanesInput_Planes_P(),
			"Master_M": new AlignPlanesInput_Master_M(),
		}
		this.output = {
			"Planes_P": new AlignPlanesOutput_Planes_P(),
		}
	}

}

class AlignPlanesInput_Planes_P extends ResthopperParameter {

	public name: string = "Planes";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlanesInput_Master_M extends ResthopperParameter {

	public name: string = "Master";
	public nickName: string = "M";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlanesOutput_Planes_P extends ResthopperParameter {

	public name: string = "Planes";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
