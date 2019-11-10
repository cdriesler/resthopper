import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitAHSV extends ResthopperComponent {

	public guid: string = "d84d2c2a-2813-4667-afb4-46642581e5f9";
	public name: string = "Split AHSV";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Split a colour into floating point {AHSV} channels";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}