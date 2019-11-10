import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextJoin extends ResthopperComponent {

	public guid: string = "1274d51a-81e6-4ccf-ad1f-0edf4c769cac";
	public name: string = "TextJoin";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Join a collection of text fragments into one";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Text_T": TextJoinInput_Text_T,
		"Join_J": TextJoinInput_Join_J,
	}

	public output:
	{
		"Result_R": TextJoinOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Text_T": new TextJoinInput_Text_T(),
			"Join_J": new TextJoinInput_Join_J(),
		}
		this.output = {
			"Result_R": new TextJoinOutput_Result_R(),
		}
	}

}

class TextJoinInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextJoinInput_Join_J extends ResthopperParameter {

	public name: string = "Join";
	public nickName: string = "J";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextJoinOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
