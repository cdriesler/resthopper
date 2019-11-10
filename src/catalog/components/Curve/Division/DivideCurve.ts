import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideCurve extends ResthopperComponent {

	public guid: string = "2162e72e-72fc-4bf8-9459-d4d82fa8aa14";
	public name: string = "Divide Curve";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve into equal length segments";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}