import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LoftOptions extends ResthopperComponent {

	public guid: string = "45f19d16-1c9f-4b0f-a9a6-45a77f3d206c";
	public name: string = "LoftOptions";
	public nickName: string = "LoftOpt";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create loft options from atomic inputs";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"closed_cls": LoftOptionsInput_closed_cls,
		"adjust_adj": LoftOptionsInput_adjust_adj,
		"rebuild_rbd": LoftOptionsInput_rebuild_rbd,
		"refit_rft": LoftOptionsInput_refit_rft,
		"type_t": LoftOptionsInput_type_t,
	}

	public output:
	{
		"options_o": LoftOptionsOutput_options_o,
	}

	constructor() {
		super();
		this.input = {
			"closed_cls": new LoftOptionsInput_closed_cls(),
			"adjust_adj": new LoftOptionsInput_adjust_adj(),
			"rebuild_rbd": new LoftOptionsInput_rebuild_rbd(),
			"refit_rft": new LoftOptionsInput_refit_rft(),
			"type_t": new LoftOptionsInput_type_t(),
		}
		this.output = {
			"options_o": new LoftOptionsOutput_options_o(),
		}
	}

}

class LoftOptionsInput_closed_cls extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "Cls";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsInput_adjust_adj extends ResthopperParameter {

	public name: string = "Adjust";
	public nickName: string = "Adj";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsInput_rebuild_rbd extends ResthopperParameter {

	public name: string = "Rebuild";
	public nickName: string = "Rbd";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsInput_refit_rft extends ResthopperParameter {

	public name: string = "Refit";
	public nickName: string = "Rft";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsInput_type_t extends ResthopperParameter {

	public name: string = "Type";
	public nickName: string = "T";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOptionsOutput_options_o extends ResthopperParameter {

	public name: string = "Options";
	public nickName: string = "O";
	public description: string = "Empty Loft Options parameter"
	public isOptional: boolean = false;
	public typeName: string = "Loft Options"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
