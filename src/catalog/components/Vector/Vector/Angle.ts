import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Angle extends ResthopperComponent {

	public guid: string = "b464fccb-50e7-41bd-9789-8438db9bea9f";
	public name: string = "Angle";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute the angle between two vectors.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}