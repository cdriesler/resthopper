import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ConstructPoint extends ResthopperComponent {

	public guid: string = "3581f42a-9592-4549-bd6b-1c0fc39d067b";
	public name: string = "Construct Point";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Construct a point from {xyz} coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}