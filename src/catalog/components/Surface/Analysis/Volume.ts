import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Volume extends ResthopperComponent {

	public guid: string = "224f7648-5956-4b26-80d9-8d771f3dfd5d";
	public name: string = "Volume";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Solve volume properties for closed breps and meshes.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"geometry_g": VolumeInput_geometry_g,
	}

	public output:
	{
		"volume_v": VolumeOutput_volume_v,
		"centroid_c": VolumeOutput_centroid_c,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new VolumeInput_geometry_g(),
		}
		this.output = {
			"volume_v": new VolumeOutput_volume_v(),
			"centroid_c": new VolumeOutput_centroid_c(),
		}
	}

}

class VolumeInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeOutput_volume_v extends ResthopperParameter {

	public name: string = "Volume";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeOutput_centroid_c extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
