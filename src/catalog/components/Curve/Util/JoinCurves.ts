import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class JoinCurves extends ResthopperComponent {

	public guid: string = "8073a420-6bec-49e3-9b18-367f6fd76ac3";
	public name: string = "Join Curves";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Join as many curves as possible";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}