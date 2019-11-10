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
		"FragmentA_A": ConcatenateInput_FragmentA_A,
		"FragmentB_B": ConcatenateInput_FragmentB_B,
	}

	public output:
	{
		"Result_R": ConcatenateOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"FragmentA_A": new ConcatenateInput_FragmentA_A(),
			"FragmentB_B": new ConcatenateInput_FragmentB_B(),
		}
		this.output = {
			"Result_R": new ConcatenateOutput_Result_R(),
		}
	}

}

class ConcatenateInput_FragmentA_A extends ResthopperParameter {

	public name: string = "FragmentA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConcatenateInput_FragmentB_B extends ResthopperParameter {

	public name: string = "FragmentB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConcatenateOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
