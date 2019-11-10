import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxCorners extends ResthopperComponent {

	public guid: string = "a10e8cdf-7c7a-4aac-aa70-ddb7010ab231";
	public name: string = "BoxCorners";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Extract all 8 corners of a box.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Box_B": BoxCornersInput_Box_B,
	}

	public output:
	{
		"CornerA_A": BoxCornersOutput_CornerA_A,
		"CornerB_B": BoxCornersOutput_CornerB_B,
		"CornerC_C": BoxCornersOutput_CornerC_C,
		"CornerD_D": BoxCornersOutput_CornerD_D,
		"CornerE_E": BoxCornersOutput_CornerE_E,
		"CornerF_F": BoxCornersOutput_CornerF_F,
		"CornerG_G": BoxCornersOutput_CornerG_G,
		"CornerH_H": BoxCornersOutput_CornerH_H,
	}

	constructor() {
		super();
		this.input = {
			"Box_B": new BoxCornersInput_Box_B(),
		}
		this.output = {
			"CornerA_A": new BoxCornersOutput_CornerA_A(),
			"CornerB_B": new BoxCornersOutput_CornerB_B(),
			"CornerC_C": new BoxCornersOutput_CornerC_C(),
			"CornerD_D": new BoxCornersOutput_CornerD_D(),
			"CornerE_E": new BoxCornersOutput_CornerE_E(),
			"CornerF_F": new BoxCornersOutput_CornerF_F(),
			"CornerG_G": new BoxCornersOutput_CornerG_G(),
			"CornerH_H": new BoxCornersOutput_CornerH_H(),
		}
	}

}

class BoxCornersInput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_CornerA_A extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_CornerB_B extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_CornerC_C extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_CornerD_D extends ResthopperParameter {

	public name: string = "CornerD";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_CornerE_E extends ResthopperParameter {

	public name: string = "CornerE";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_CornerF_F extends ResthopperParameter {

	public name: string = "CornerF";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_CornerG_G extends ResthopperParameter {

	public name: string = "CornerG";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_CornerH_H extends ResthopperParameter {

	public name: string = "CornerH";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
