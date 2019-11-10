import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AngularDimension extends ResthopperComponent {

	public guid: string = "fc6b519e-df6d-4ce1-a1f4-083f1c217c14";
	public name: string = "AngularDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create an angle annotation between points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"center_c": AngularDimensionInput_center_c,
		"pointa_a": AngularDimensionInput_pointa_a,
		"pointb_b": AngularDimensionInput_pointb_b,
		"reflex_r": AngularDimensionInput_reflex_r,
		"text_t": AngularDimensionInput_text_t,
		"size_s": AngularDimensionInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"center_c": new AngularDimensionInput_center_c(),
			"pointa_a": new AngularDimensionInput_pointa_a(),
			"pointb_b": new AngularDimensionInput_pointb_b(),
			"reflex_r": new AngularDimensionInput_reflex_r(),
			"text_t": new AngularDimensionInput_text_t(),
			"size_s": new AngularDimensionInput_size_s(),
		}
		this.output = {

		}
	}

}

class AngularDimensionInput_center_c extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_reflex_r extends ResthopperParameter {

	public name: string = "Reflex";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngularDimensionInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
