import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Legend extends ResthopperComponent {

	public guid: string = "f6867cdd-2216-4451-9134-7da94bdcd5af";
	public name: string = "Legend";
	public category: string = "Display";
	public subCategory: string = "Graphs";
	public description: string = "Display a legend consisting of Tags and Colours";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Colour_C": LegendInput_Colour_C,
		"Tags_T": LegendInput_Tags_T,
		"Rectangle_R": LegendInput_Rectangle_R,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Colour_C": new LegendInput_Colour_C(),
			"Tags_T": new LegendInput_Tags_T(),
			"Rectangle_R": new LegendInput_Rectangle_R(),
		}
		this.output = {

		}
	}

}

class LegendInput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LegendInput_Tags_T extends ResthopperParameter {

	public name: string = "Tags";
	public nickName: string = "T";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LegendInput_Rectangle_R extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
