import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourXYZ extends ResthopperComponent {

	public guid: string = "77185dc2-2f18-469d-9686-00f5b6049195";
	public name: string = "Colour XYZ";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {XYZ} channels (CIE 1931 spec).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}