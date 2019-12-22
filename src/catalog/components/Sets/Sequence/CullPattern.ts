import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullPattern extends ResthopperComponent {

	public guid: string = "008e9a6f-478a-4813-8c8a-546273bc3a6b";
	public name: string = "Cull Pattern";
	public nickName: string = "Cull";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Cull (remove) elements in a list using a repeating bit mask.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": CullPatternInput_list_l,
		"cullpattern_p": CullPatternInput_cullpattern_p,
	}

	public output:
	{
		"list_l": CullPatternOutput_list_l,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new CullPatternInput_list_l(),
			"cullpattern_p": new CullPatternInput_cullpattern_p(),
		}
		this.output = {
			"list_l": new CullPatternOutput_list_l(),
		}
	}

}

class CullPatternInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullPatternInput_cullpattern_p extends ResthopperParameter {

	public name: string = "CullPattern";
	public nickName: string = "P";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullPatternOutput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
