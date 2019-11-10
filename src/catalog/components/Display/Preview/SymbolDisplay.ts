import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SymbolDisplay extends ResthopperComponent {

	public guid: string = "62d5ead4-53c4-4d0b-b5ce-6bd6e0850ab8";
	public name: string = "SymbolDisplay";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Display symbols";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Location_P": SymbolDisplayInput_Location_P,
		"Display_D": SymbolDisplayInput_Display_D,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Location_P": new SymbolDisplayInput_Location_P(),
			"Display_D": new SymbolDisplayInput_Display_D(),
		}
		this.output = {

		}
	}

}

class SymbolDisplayInput_Location_P extends ResthopperParameter {

	public name: string = "Location";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolDisplayInput_Display_D extends ResthopperParameter {

	public name: string = "Display";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Symbol Display;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
