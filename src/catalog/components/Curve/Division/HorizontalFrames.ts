import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class HorizontalFrames extends ResthopperComponent {

	public guid: string = "8d058945-ce47-4e7c-82af-3269295d7890";
	public name: string = "Horizontal Frames";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Generate a number of equally spaced, horizontally aligned curve frames.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}