import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MakeTwoDRhinoView extends ResthopperComponent {

	public guid: string = "4ac24770-e38b-4363-be38-551a3b134707";
	public name: string = "Make2DRhinoView";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Import a Rhino view for a Make2D solution";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"name_n": MakeTwoDRhinoViewInput_name_n,
		"clip_c": MakeTwoDRhinoViewInput_clip_c,
	}

	public output:
	{
		"view_v": MakeTwoDRhinoViewOutput_view_v,
	}

	constructor() {
		super();
		this.input = {
			"name_n": new MakeTwoDRhinoViewInput_name_n(),
			"clip_c": new MakeTwoDRhinoViewInput_clip_c(),
		}
		this.output = {
			"view_v": new MakeTwoDRhinoViewOutput_view_v(),
		}
	}

}

class MakeTwoDRhinoViewInput_name_n extends ResthopperParameter {

	public name: string = "Name";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDRhinoViewInput_clip_c extends ResthopperParameter {

	public name: string = "Clip";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDRhinoViewOutput_view_v extends ResthopperParameter {

	public name: string = "View";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Projection"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
