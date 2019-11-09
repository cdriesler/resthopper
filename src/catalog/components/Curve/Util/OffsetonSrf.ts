import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class OffsetonSrf extends ResthopperComponent {

	public guid: string = "b6f5cb51-f260-4c74-bf73-deb47de1bf91";
	public name: string = "Offset on Srf";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset a curve on a surface with a specified distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}