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
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"box_b": BoxCornersInput_box_b,
	}

	public output:
	{
		"cornera_a": BoxCornersOutput_cornera_a,
		"cornerb_b": BoxCornersOutput_cornerb_b,
		"cornerc_c": BoxCornersOutput_cornerc_c,
		"cornerd_d": BoxCornersOutput_cornerd_d,
		"cornere_e": BoxCornersOutput_cornere_e,
		"cornerf_f": BoxCornersOutput_cornerf_f,
		"cornerg_g": BoxCornersOutput_cornerg_g,
		"cornerh_h": BoxCornersOutput_cornerh_h,
	}

	constructor() {
		super();
		this.input = {
			"box_b": new BoxCornersInput_box_b(),
		}
		this.output = {
			"cornera_a": new BoxCornersOutput_cornera_a(),
			"cornerb_b": new BoxCornersOutput_cornerb_b(),
			"cornerc_c": new BoxCornersOutput_cornerc_c(),
			"cornerd_d": new BoxCornersOutput_cornerd_d(),
			"cornere_e": new BoxCornersOutput_cornere_e(),
			"cornerf_f": new BoxCornersOutput_cornerf_f(),
			"cornerg_g": new BoxCornersOutput_cornerg_g(),
			"cornerh_h": new BoxCornersOutput_cornerh_h(),
		}
	}

}

class BoxCornersInput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_cornera_a extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_cornerb_b extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_cornerc_c extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_cornerd_d extends ResthopperParameter {

	public name: string = "CornerD";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_cornere_e extends ResthopperParameter {

	public name: string = "CornerE";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_cornerf_f extends ResthopperParameter {

	public name: string = "CornerF";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_cornerg_g extends ResthopperParameter {

	public name: string = "CornerG";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxCornersOutput_cornerh_h extends ResthopperParameter {

	public name: string = "CornerH";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
