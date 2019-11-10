import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourCMYK extends ResthopperComponent {

	public guid: string = "17af01a5-a846-4769-9478-de1df65a0afa";
	public name: string = "Colour CMYK";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {CMYK} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}