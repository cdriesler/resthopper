import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextTag extends ResthopperComponent {

	public guid: string = "3b220754-4114-4170-b6c3-b286b86ed524";
	public name: string = "Text Tag";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Represents a list of text tags in a Rhino viewport";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}