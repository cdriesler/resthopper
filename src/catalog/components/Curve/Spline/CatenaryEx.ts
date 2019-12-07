import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CatenaryEx extends ResthopperComponent {

	public guid: string = "769f9064-17f5-4c4a-921f-c3a0ee05ba3a";
	public name: string = "CatenaryEx";
	public nickName: string = "CatEx";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a variable catenary chain between two points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"pointa_a": CatenaryExInput_pointa_a,
		"pointb_b": CatenaryExInput_pointb_b,
		"lengths_l": CatenaryExInput_lengths_l,
		"weights_w": CatenaryExInput_weights_w,
		"gravity_g": CatenaryExInput_gravity_g,
	}

	public output:
	{
		"catenary_c": CatenaryExOutput_catenary_c,
		"segments_s": CatenaryExOutput_segments_s,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new CatenaryExInput_pointa_a(),
			"pointb_b": new CatenaryExInput_pointb_b(),
			"lengths_l": new CatenaryExInput_lengths_l(),
			"weights_w": new CatenaryExInput_weights_w(),
			"gravity_g": new CatenaryExInput_gravity_g(),
		}
		this.output = {
			"catenary_c": new CatenaryExOutput_catenary_c(),
			"segments_s": new CatenaryExOutput_segments_s(),
		}
	}

}

class CatenaryExInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExInput_lengths_l extends ResthopperParameter {

	public name: string = "Lengths";
	public nickName: string = "L";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExInput_weights_w extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExInput_gravity_g extends ResthopperParameter {

	public name: string = "Gravity";
	public nickName: string = "G";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExOutput_catenary_c extends ResthopperParameter {

	public name: string = "Catenary";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExOutput_segments_s extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
