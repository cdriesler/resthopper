import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TextTagThreeD extends ResthopperComponent {

	public guid: string = "5a41528b-12b9-40dc-a3f2-842034d267c4";
	public name: string = "Text Tag 3D";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Represents a list of 3D text tags in a Rhino viewport";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}