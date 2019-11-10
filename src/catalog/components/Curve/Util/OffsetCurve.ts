import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetCurve extends ResthopperComponent {

	public guid: string = "1a38d325-98de-455c-93f1-bca431bc1243";
	public name: string = "Offset Curve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset a curve with a specified distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}