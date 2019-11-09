import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ColourHSL extends ResthopperComponent {

	public guid: string = "a45d68b3-c299-4b17-bdae-7975f216cec6";
	public name: string = "Colour HSL";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {HSL} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}