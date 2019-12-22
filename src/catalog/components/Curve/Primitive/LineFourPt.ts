import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineFourPt extends ResthopperComponent {

	public guid: string = "b9fde5fa-d654-4306-8ee1-6b69e6757604";
	public name: string = "Line 4Pt";
	public nickName: string = "Ln4Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line from four points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"line_l": LineFourPtInput_line_l,
		"pointa_a": LineFourPtInput_pointa_a,
		"pointb_b": LineFourPtInput_pointb_b,
	}

	public output:
	{
		"line_l": LineFourPtOutput_line_l,
	}

	constructor() {
		super();
		this.input = {
			"line_l": new LineFourPtInput_line_l(),
			"pointa_a": new LineFourPtInput_pointa_a(),
			"pointb_b": new LineFourPtInput_pointb_b(),
		}
		this.output = {
			"line_l": new LineFourPtOutput_line_l(),
		}
	}

}

class LineFourPtInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineFourPtInput_pointa_a extends ResthopperParameter {

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

class LineFourPtInput_pointb_b extends ResthopperParameter {

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

class LineFourPtOutput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
