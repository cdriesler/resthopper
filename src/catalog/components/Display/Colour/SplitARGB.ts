import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitARGB extends ResthopperComponent {

	public guid: string = "350f7d03-a48f-4121-bcee-328cfe1ed9ef";
	public name: string = "Split ARGB";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Split a colour into floating point {ARGB} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}