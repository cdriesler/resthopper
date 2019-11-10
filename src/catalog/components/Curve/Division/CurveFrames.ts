import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveFrames extends ResthopperComponent {

	public guid: string = "0e94542a-2e46-4793-9f98-2200b06b28f4";
	public name: string = "Curve Frames";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Generate a number of equally spaced curve frames.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}