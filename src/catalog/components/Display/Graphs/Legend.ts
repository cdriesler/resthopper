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
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"colour_c": LegendInput_colour_c,
		"tags_t": LegendInput_tags_t,
		"rectangle_r": LegendInput_rectangle_r,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"colour_c": new LegendInput_colour_c(),
			"tags_t": new LegendInput_tags_t(),
			"rectangle_r": new LegendInput_rectangle_r(),
		}
		this.output = {

		}
	}

}

class LegendInput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LegendInput_tags_t extends ResthopperParameter {

	public name: string = "Tags";
	public nickName: string = "T";
	public isOptional: boolean = true;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LegendInput_rectangle_r extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
