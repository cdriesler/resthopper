import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolygonCenter extends ResthopperComponent {

	public guid: string = "59e94548-cefd-4774-b3de-48142fc783fb";
	public name: string = "PolygonCenter";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the center point (average) for a polyline.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Polyline_P": PolygonCenterInput_Polyline_P,
	}

	public output:
	{
		"CenterV_Cv": PolygonCenterOutput_CenterV_Cv,
		"CenterE_Ce": PolygonCenterOutput_CenterE_Ce,
		"CenterA_Ca": PolygonCenterOutput_CenterA_Ca,
	}

	constructor() {
		super();
		this.input = {
			"Polyline_P": new PolygonCenterInput_Polyline_P(),
		}
		this.output = {
			"CenterV_Cv": new PolygonCenterOutput_CenterV_Cv(),
			"CenterE_Ce": new PolygonCenterOutput_CenterE_Ce(),
			"CenterA_Ca": new PolygonCenterOutput_CenterA_Ca(),
		}
	}

}

class PolygonCenterInput_Polyline_P extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonCenterOutput_CenterV_Cv extends ResthopperParameter {

	public name: string = "CenterV";
	public nickName: string = "Cv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonCenterOutput_CenterE_Ce extends ResthopperParameter {

	public name: string = "CenterE";
	public nickName: string = "Ce";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonCenterOutput_CenterA_Ca extends ResthopperParameter {

	public name: string = "CenterA";
	public nickName: string = "Ca";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
