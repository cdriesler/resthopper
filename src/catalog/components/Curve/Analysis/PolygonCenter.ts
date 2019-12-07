import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolygonCenter extends ResthopperComponent {

	public guid: string = "59e94548-cefd-4774-b3de-48142fc783fb";
	public name: string = "PolygonCenter";
	public nickName: string = "PCen";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the center point (average) for a polyline.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"polyline_p": PolygonCenterInput_polyline_p,
	}

	public output:
	{
		"centerv_cv": PolygonCenterOutput_centerv_cv,
		"centere_ce": PolygonCenterOutput_centere_ce,
		"centera_ca": PolygonCenterOutput_centera_ca,
	}

	constructor() {
		super();
		this.input = {
			"polyline_p": new PolygonCenterInput_polyline_p(),
		}
		this.output = {
			"centerv_cv": new PolygonCenterOutput_centerv_cv(),
			"centere_ce": new PolygonCenterOutput_centere_ce(),
			"centera_ca": new PolygonCenterOutput_centera_ca(),
		}
	}

}

class PolygonCenterInput_polyline_p extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonCenterOutput_centerv_cv extends ResthopperParameter {

	public name: string = "CenterV";
	public nickName: string = "Cv";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonCenterOutput_centere_ce extends ResthopperParameter {

	public name: string = "CenterE";
	public nickName: string = "Ce";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonCenterOutput_centera_ca extends ResthopperParameter {

	public name: string = "CenterA";
	public nickName: string = "Ca";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
