import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourLab extends ResthopperComponent {

	public guid: string = "f922ed44-6e4a-44a0-8b4b-4b4a46bdfe29";
	public name: string = "Colour L*ab";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {CIE L*ab} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}