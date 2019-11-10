import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PerpFrames extends ResthopperComponent {

	public guid: string = "983c7600-980c-44da-bc53-c804067f667f";
	public name: string = "Perp Frames";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Generate a number of equally spaced, perpendicular frames along a curve.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}