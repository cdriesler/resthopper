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
		"Name_N": MakeTwoDRhinoViewInput_Name_N,
		"Clip_C": MakeTwoDRhinoViewInput_Clip_C,
	}

	public output:
	{
		"View_V": MakeTwoDRhinoViewOutput_View_V,
	}

	constructor() {
		super();
		this.input = {
			"Name_N": new MakeTwoDRhinoViewInput_Name_N(),
			"Clip_C": new MakeTwoDRhinoViewInput_Clip_C(),
		}
		this.output = {
			"View_V": new MakeTwoDRhinoViewOutput_View_V(),
		}
	}

}

class MakeTwoDRhinoViewInput_Name_N extends ResthopperParameter {

	public name: string = "Name";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDRhinoViewInput_Clip_C extends ResthopperParameter {

	public name: string = "Clip";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDRhinoViewOutput_View_V extends ResthopperParameter {

	public name: string = "View";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Projection;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
