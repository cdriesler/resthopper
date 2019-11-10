import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FaceCircles extends ResthopperComponent {

	public guid: string = "d8cf1555-a0d5-43cb-8a10-46f8c014db3a";
	public name: string = "Face Circles";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Solve the circumscribed circles for all mesh faces";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}