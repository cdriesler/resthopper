import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ColourLCH extends ResthopperComponent {

	public guid: string = "75a07554-8a2c-4d87-81b9-d854f498509d";
	public name: string = "Colour LCH";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {CIE LCH} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}