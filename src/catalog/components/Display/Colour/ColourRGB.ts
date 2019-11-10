import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourRGB extends ResthopperComponent {

	public guid: string = "49d2e200-b34e-4e1c-82a3-07feb4cb9378";
	public name: string = "Colour RGB";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from {RGB} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}