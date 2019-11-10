import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetonSrf extends ResthopperComponent {

	public guid: string = "b6f5cb51-f260-4c74-bf73-deb47de1bf91";
	public name: string = "OffsetonSrf";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset a curve on a surface with a specified distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": OffsetonSrfInput_Curve_C,
		"Distance_D": OffsetonSrfInput_Distance_D,
		"Surface_S": OffsetonSrfInput_Surface_S,
	}

	public output:
	{
		"Curve_C": OffsetonSrfOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new OffsetonSrfInput_Curve_C(),
			"Distance_D": new OffsetonSrfInput_Distance_D(),
			"Surface_S": new OffsetonSrfInput_Surface_S(),
		}
		this.output = {
			"Curve_C": new OffsetonSrfOutput_Curve_C(),
		}
	}

}

class OffsetonSrfInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetonSrfInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetonSrfInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetonSrfOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
