import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LoftOptions extends ResthopperComponent {

	public guid: string = "45f19d16-1c9f-4b0f-a9a6-45a77f3d206c";
	public name: string = "LoftOptions";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create loft options from atomic inputs";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Closed_Cls": LoftOptionsInput_Closed_Cls,
		"Adjust_Adj": LoftOptionsInput_Adjust_Adj,
		"Rebuild_Rbd": LoftOptionsInput_Rebuild_Rbd,
		"Refit_Rft": LoftOptionsInput_Refit_Rft,
		"Type_T": LoftOptionsInput_Type_T,
	}

	public output:
	{
		"Options_O": LoftOptionsOutput_Options_O,
	}

	constructor() {
		super();
		this.input = {
			"Closed_Cls": new LoftOptionsInput_Closed_Cls(),
			"Adjust_Adj": new LoftOptionsInput_Adjust_Adj(),
			"Rebuild_Rbd": new LoftOptionsInput_Rebuild_Rbd(),
			"Refit_Rft": new LoftOptionsInput_Refit_Rft(),
			"Type_T": new LoftOptionsInput_Type_T(),
		}
		this.output = {
			"Options_O": new LoftOptionsOutput_Options_O(),
		}
	}

}

class LoftOptionsInput_Closed_Cls extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "Cls";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsInput_Adjust_Adj extends ResthopperParameter {

	public name: string = "Adjust";
	public nickName: string = "Adj";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsInput_Rebuild_Rbd extends ResthopperParameter {

	public name: string = "Rebuild";
	public nickName: string = "Rbd";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsInput_Refit_Rft extends ResthopperParameter {

	public name: string = "Refit";
	public nickName: string = "Rft";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsInput_Type_T extends ResthopperParameter {

	public name: string = "Type";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsOutput_Options_O extends ResthopperParameter {

	public name: string = "Options";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Loft Options;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
