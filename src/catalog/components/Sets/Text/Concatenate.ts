import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Concatenate extends ResthopperComponent {

	public guid: string = "2013e425-8713-42e2-a661-b57e78840337";
	public name: string = "Concatenate";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Concatenate some fragments of text";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"fragmenta_a": ConcatenateInput_fragmenta_a,
		"fragmentb_b": ConcatenateInput_fragmentb_b,
	}

	public output:
	{
		"result_r": ConcatenateOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"fragmenta_a": new ConcatenateInput_fragmenta_a(),
			"fragmentb_b": new ConcatenateInput_fragmentb_b(),
		}
		this.output = {
			"result_r": new ConcatenateOutput_result_r(),
		}
	}

}

class ConcatenateInput_fragmenta_a extends ResthopperParameter {

	public name: string = "FragmentA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConcatenateInput_fragmentb_b extends ResthopperParameter {

	public name: string = "FragmentB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConcatenateOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
