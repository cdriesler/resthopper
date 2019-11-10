import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructSmoothTime extends ResthopperComponent {

	public guid: string = "f151b0b9-cef8-4809-96fc-9b14f1c3a7b9";
	public name: string = "Construct Smooth Time";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a time instance from smooth components";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}