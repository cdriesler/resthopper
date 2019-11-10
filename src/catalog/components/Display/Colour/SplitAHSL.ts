import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitAHSL extends ResthopperComponent {

	public guid: string = "0a1331c8-c58d-4b3f-a886-47051532e35e";
	public name: string = "Split AHSL";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Split a colour into floating point {AHSL} channels";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}