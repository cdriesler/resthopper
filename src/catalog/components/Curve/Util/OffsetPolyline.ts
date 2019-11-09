import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class OffsetPolyline extends ResthopperComponent {

	public guid: string = "e2c6cab3-91ea-4c01-900c-646642d3e436";
	public name: string = "Offset Polyline";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset a 2D polyline";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}