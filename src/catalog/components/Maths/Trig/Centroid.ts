import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Centroid extends ResthopperComponent {

	public guid: string = "afbcbad4-2a2a-4954-8040-d999e316d2bd";
	public name: string = "Centroid";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle centroid from medians.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"pointa_a": CentroidInput_pointa_a,
		"pointb_b": CentroidInput_pointb_b,
		"pointc_c": CentroidInput_pointc_c,
	}

	public output:
	{
		"centroid_c": CentroidOutput_centroid_c,
		"medianab_ab": CentroidOutput_medianab_ab,
		"medianbc_bc": CentroidOutput_medianbc_bc,
		"medianca_ca": CentroidOutput_medianca_ca,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new CentroidInput_pointa_a(),
			"pointb_b": new CentroidInput_pointb_b(),
			"pointc_c": new CentroidInput_pointc_c(),
		}
		this.output = {
			"centroid_c": new CentroidOutput_centroid_c(),
			"medianab_ab": new CentroidOutput_medianab_ab(),
			"medianbc_bc": new CentroidOutput_medianbc_bc(),
			"medianca_ca": new CentroidOutput_medianca_ca(),
		}
	}

}

class CentroidInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidInput_pointc_c extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidOutput_centroid_c extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidOutput_medianab_ab extends ResthopperParameter {

	public name: string = "MedianAB";
	public nickName: string = "AB";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidOutput_medianbc_bc extends ResthopperParameter {

	public name: string = "MedianBC";
	public nickName: string = "BC";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidOutput_medianca_ca extends ResthopperParameter {

	public name: string = "MedianCA";
	public nickName: string = "CA";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
