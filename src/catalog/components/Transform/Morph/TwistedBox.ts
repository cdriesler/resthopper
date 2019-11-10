import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TwistedBox extends ResthopperComponent {

	public guid: string = "124de0f5-65f8-4ae0-8f61-8fb066e2ba02";
	public name: string = "TwistedBox";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Create a twisted box from corner points.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"cornera_a": TwistedBoxInput_cornera_a,
		"cornerb_b": TwistedBoxInput_cornerb_b,
		"cornerc_c": TwistedBoxInput_cornerc_c,
		"cornerd_d": TwistedBoxInput_cornerd_d,
		"cornere_e": TwistedBoxInput_cornere_e,
		"cornerf_f": TwistedBoxInput_cornerf_f,
		"cornerg_g": TwistedBoxInput_cornerg_g,
		"cornerh_h": TwistedBoxInput_cornerh_h,
	}

	public output:
	{
		"twistedbox_b": TwistedBoxOutput_twistedbox_b,
	}

	constructor() {
		super();
		this.input = {
			"cornera_a": new TwistedBoxInput_cornera_a(),
			"cornerb_b": new TwistedBoxInput_cornerb_b(),
			"cornerc_c": new TwistedBoxInput_cornerc_c(),
			"cornerd_d": new TwistedBoxInput_cornerd_d(),
			"cornere_e": new TwistedBoxInput_cornere_e(),
			"cornerf_f": new TwistedBoxInput_cornerf_f(),
			"cornerg_g": new TwistedBoxInput_cornerg_g(),
			"cornerh_h": new TwistedBoxInput_cornerh_h(),
		}
		this.output = {
			"twistedbox_b": new TwistedBoxOutput_twistedbox_b(),
		}
	}

}

class TwistedBoxInput_cornera_a extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_cornerb_b extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_cornerc_c extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_cornerd_d extends ResthopperParameter {

	public name: string = "CornerD";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_cornere_e extends ResthopperParameter {

	public name: string = "CornerE";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_cornerf_f extends ResthopperParameter {

	public name: string = "CornerF";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_cornerg_g extends ResthopperParameter {

	public name: string = "CornerG";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_cornerh_h extends ResthopperParameter {

	public name: string = "CornerH";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxOutput_twistedbox_b extends ResthopperParameter {

	public name: string = "TwistedBox";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Twisted Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
