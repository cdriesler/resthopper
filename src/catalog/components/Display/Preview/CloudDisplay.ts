import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CloudDisplay extends ResthopperComponent {

	public guid: string = "059b72b0-9bb3-4542-a805-2dcd27493164";
	public name: string = "Cloud Display";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Draw a collection of points as a fuzzy cloud";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}