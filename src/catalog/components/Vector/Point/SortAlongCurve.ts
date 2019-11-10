import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SortAlongCurve extends ResthopperComponent {

	public guid: string = "59aaebf8-6654-46b7-8386-89223c773978";
	public name: string = "Sort Along Curve";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Sort points along a curve";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}