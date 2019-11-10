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
		"location_p": SymbolDisplayInput_location_p,
		"display_d": SymbolDisplayInput_display_d,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"location_p": new SymbolDisplayInput_location_p(),
			"display_d": new SymbolDisplayInput_display_d(),
		}
		this.output = {

		}
	}

}

class SymbolDisplayInput_location_p extends ResthopperParameter {

	public name: string = "Location";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolDisplayInput_display_d extends ResthopperParameter {

	public name: string = "Display";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Symbol Display"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
