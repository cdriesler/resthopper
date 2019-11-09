import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ColourHSV extends ResthopperComponent {

	public guid: string = "5958a658-20c2-4a2b-86ba-4d1b81bf5348";
	public name: string = "Colour HSV";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {HSV} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}