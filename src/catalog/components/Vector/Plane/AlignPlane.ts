import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class AlignPlane extends ResthopperComponent {

	public guid: string = "e76040ec-3b91-41e1-8e00-c74c23b89391";
	public name: string = "Align Plane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Perform minimal rotation to align a plane with a guide vector";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}