import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FlipCurve extends ResthopperComponent {

	public guid: string = "22990b1f-9be6-477c-ad89-f775cd347105";
	public name: string = "Flip Curve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Flip a curve using an optional guide curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}