import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullPattern extends ResthopperComponent {

	public guid: string = "008e9a6f-478a-4813-8c8a-546273bc3a6b";
	public name: string = "CullPattern";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Cull (remove) elements in a list using a repeating bit mask.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": CullPatternInput_List_L,
		"CullPattern_P": CullPatternInput_CullPattern_P,
	}

	public output:
	{
		"List_L": CullPatternOutput_List_L,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new CullPatternInput_List_L(),
			"CullPattern_P": new CullPatternInput_CullPattern_P(),
		}
		this.output = {
			"List_L": new CullPatternOutput_List_L(),
		}
	}

}

class CullPatternInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullPatternInput_CullPattern_P extends ResthopperParameter {

	public name: string = "CullPattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullPatternOutput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
