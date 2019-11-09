import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SegmentLengths extends ResthopperComponent {

	public guid: string = "f88a6cd9-1035-4361-b896-4f2dfe79272d";
	public name: string = "Segment Lengths";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Finds the shortest and longest segments of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}