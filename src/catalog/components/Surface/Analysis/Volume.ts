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
		"Geometry_G": VolumeInput_Geometry_G,
	}

	public output:
	{
		"Volume_V": VolumeOutput_Volume_V,
		"Centroid_C": VolumeOutput_Centroid_C,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new VolumeInput_Geometry_G(),
		}
		this.output = {
			"Volume_V": new VolumeOutput_Volume_V(),
			"Centroid_C": new VolumeOutput_Centroid_C(),
		}
	}

}

class VolumeInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeOutput_Volume_V extends ResthopperParameter {

	public name: string = "Volume";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeOutput_Centroid_C extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
