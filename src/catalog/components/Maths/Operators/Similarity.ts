import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Similarity extends ResthopperComponent {

	public guid: string = "40177d8a-a35c-4622-bca7-d150031fe427";
	public name: string = "Similarity";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Test for similarity of two numbers";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"FirstNumber_A": SimilarityInput_FirstNumber_A,
		"SecondNumber_B": SimilarityInput_SecondNumber_B,
		"Threshold_T": SimilarityInput_Threshold_T,
	}

	public output:
	{
		"Similarity_": SimilarityOutput_Similarity_,
		"Absolutedifference_dt": SimilarityOutput_Absolutedifference_dt,
	}

	constructor() {
		super();
		this.input = {
			"FirstNumber_A": new SimilarityInput_FirstNumber_A(),
			"SecondNumber_B": new SimilarityInput_SecondNumber_B(),
			"Threshold_T": new SimilarityInput_Threshold_T(),
		}
		this.output = {
			"Similarity_": new SimilarityOutput_Similarity_(),
			"Absolutedifference_dt": new SimilarityOutput_Absolutedifference_dt(),
		}
	}

}

class SimilarityInput_FirstNumber_A extends ResthopperParameter {

	public name: string = "FirstNumber";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimilarityInput_SecondNumber_B extends ResthopperParameter {

	public name: string = "SecondNumber";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimilarityInput_Threshold_T extends ResthopperParameter {

	public name: string = "Threshold";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimilarityOutput_Similarity_ extends ResthopperParameter {

	public name: string = "Similarity";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimilarityOutput_Absolutedifference_dt extends ResthopperParameter {

	public name: string = "Absolutedifference";
	public nickName: string = "dt";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
