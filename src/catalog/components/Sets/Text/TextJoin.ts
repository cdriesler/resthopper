import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextJoin extends ResthopperComponent {

	public guid: string = "1274d51a-81e6-4ccf-ad1f-0edf4c769cac";
	public name: string = "TextJoin";
	public nickName: string = "Join";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Join a collection of text fragments into one";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"text_t": TextJoinInput_text_t,
		"join_j": TextJoinInput_join_j,
	}

	public output:
	{
		"result_r": TextJoinOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"text_t": new TextJoinInput_text_t(),
			"join_j": new TextJoinInput_join_j(),
		}
		this.output = {
			"result_r": new TextJoinOutput_result_r(),
		}
	}

}

class TextJoinInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextJoinInput_join_j extends ResthopperParameter {

	public name: string = "Join";
	public nickName: string = "J";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = true;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextJoinOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
