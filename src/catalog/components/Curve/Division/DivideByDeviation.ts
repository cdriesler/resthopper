import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DivideByDeviation extends ResthopperComponent {

	public guid: string = "6e9c0577-ae4a-4b21-8880-0ec3daf3eb4d";
	public name: string = "Divide By Deviation";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve into segments with equal deviation";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}