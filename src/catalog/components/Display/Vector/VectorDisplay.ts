import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class VectorDisplay extends ResthopperComponent {

	public guid: string = "2a3f7078-2e25-4dd4-96f7-0efb491bd61c";
	public name: string = "Vector Display";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Preview vectors in the viewport";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}