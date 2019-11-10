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
		"firstnumber_a": SimilarityInput_firstnumber_a,
		"secondnumber_b": SimilarityInput_secondnumber_b,
		"threshold_t": SimilarityInput_threshold_t,
	}

	public output:
	{
		"similarity_": SimilarityOutput_similarity_,
		"absolutedifference_dt": SimilarityOutput_absolutedifference_dt,
	}

	constructor() {
		super();
		this.input = {
			"firstnumber_a": new SimilarityInput_firstnumber_a(),
			"secondnumber_b": new SimilarityInput_secondnumber_b(),
			"threshold_t": new SimilarityInput_threshold_t(),
		}
		this.output = {
			"similarity_": new SimilarityOutput_similarity_(),
			"absolutedifference_dt": new SimilarityOutput_absolutedifference_dt(),
		}
	}

}

class SimilarityInput_firstnumber_a extends ResthopperParameter {

	public name: string = "FirstNumber";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimilarityInput_secondnumber_b extends ResthopperParameter {

	public name: string = "SecondNumber";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimilarityInput_threshold_t extends ResthopperParameter {

	public name: string = "Threshold";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimilarityOutput_similarity_ extends ResthopperParameter {

	public name: string = "Similarity";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimilarityOutput_absolutedifference_dt extends ResthopperParameter {

	public name: string = "Absolutedifference";
	public nickName: string = "dt";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
