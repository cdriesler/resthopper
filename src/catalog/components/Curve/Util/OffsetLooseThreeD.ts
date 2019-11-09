import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class OffsetLooseThreeD extends ResthopperComponent {

	public guid: string = "c6fe61e7-25e2-4333-9172-f4e2a123fcfe";
	public name: string = "Offset Loose 3D";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset the control-points of a curve with a specified distance in 3D.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}