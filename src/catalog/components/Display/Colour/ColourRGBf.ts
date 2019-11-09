import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ColourRGBf extends ResthopperComponent {

	public guid: string = "f35132c0-c298-4b9c-b446-42e960f52677";
	public name: string = "Colour RGB (f)";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {RGB} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}