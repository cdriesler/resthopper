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

	public library: string = "Transform Components";

	public input:
	{
		"PointA_A": CentroidInput_PointA_A,
		"PointB_B": CentroidInput_PointB_B,
		"PointC_C": CentroidInput_PointC_C,
	}

	public output:
	{
		"Centroid_C": CentroidOutput_Centroid_C,
		"MedianAB_AB": CentroidOutput_MedianAB_AB,
		"MedianBC_BC": CentroidOutput_MedianBC_BC,
		"MedianCA_CA": CentroidOutput_MedianCA_CA,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new CentroidInput_PointA_A(),
			"PointB_B": new CentroidInput_PointB_B(),
			"PointC_C": new CentroidInput_PointC_C(),
		}
		this.output = {
			"Centroid_C": new CentroidOutput_Centroid_C(),
			"MedianAB_AB": new CentroidOutput_MedianAB_AB(),
			"MedianBC_BC": new CentroidOutput_MedianBC_BC(),
			"MedianCA_CA": new CentroidOutput_MedianCA_CA(),
		}
	}

}

class CentroidInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidInput_PointC_C extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidOutput_Centroid_C extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidOutput_MedianAB_AB extends ResthopperParameter {

	public name: string = "MedianAB";
	public nickName: string = "AB";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidOutput_MedianBC_BC extends ResthopperParameter {

	public name: string = "MedianBC";
	public nickName: string = "BC";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CentroidOutput_MedianCA_CA extends ResthopperParameter {

	public name: string = "MedianCA";
	public nickName: string = "CA";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
